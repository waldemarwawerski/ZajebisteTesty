import { useState, useEffect } from "react";
import ZajebisteWykresy from "./Pages/ZajebisteWykresy";
import "./App.css";
import { getData } from "./server";
import Ramka from "./Ramka";
import RamkaWrapper from "./RamkaWrapper";
import WykresSlupkowy from './WykresSlupkowy';
import WykresSlupkowyCzas from './WykresSlupkowyCzas';
import WykresKołowyKolory from "./WykresKołowyKolory";
import questions from "./questions";
import predictColor from './predictColor';
import { result } from "lodash";
import getTime from './helpers/getTime';

const App = () => {
  const [userCounter, setUserCounter] = useState();
  const [userCounterWhoWroteMessages, setUserCounterWhoWroteMessages] = useState();
  const [skonczoneTesty, setSkonczoneTesty] = useState();
  const [getSkonczoneTesty, setGetSkonczoneTesty] = useState();
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();
  const [data4, setData4] = useState();
  const [data5, setData5] = useState();
  const [data6, setData6] = useState();
  const [data7, setData7] = useState();
  const [data8, setData8] = useState();
  const [data9, setData9] = useState();
  const [data10, setData10] = useState();
  const [data11, setData11] = useState();
  const [data12, setData12] = useState();
  const [data13, setData13] = useState();
  const [data14, setData14] = useState();
  const [data15, setData15] = useState();
  const [data16, setData16] = useState();
  const [data17, setData17] = useState();
  const [data18, setData18] = useState();

  const [czasOdpowiedzi, setCzasOdpowiedzi] = useState();

  const [pieChartData, setPieChartData] = useState({ R: 0, B: 0, G: 0, Y: 0 });

  useEffect(() => {
    /* Magiczny kod który pobiera dane z bazy danych */
    getData.then((dane) => {
      // Przepisuje obiekt do tablicy
      const answers = Object.keys(dane.answers).map((key) => dane.answers[key]);
      const messages = Object.keys(dane.messages).map((key) => dane.messages[key]);

      // tutaj przypisujemy konkretną wartość do zmiennej userCouter
      setUserCounter(answers.length); // <-- tego kodu nie ruszasz bo to jest mój

      // testy ktore sa skończone
      const testFinished = answers.filter((test) => test.length >= 18);
      setGetSkonczoneTesty(testFinished);
      // console.log('odpowiedzi', answers);
      setSkonczoneTesty(testFinished.length);

      //tutaj przypisujemy konkretną wartość do zmiennej userCounterWhoWroteMessages
      // 1. Uzyj funkcji setUserConterWhoWroteMassages zamiast setUserCounter
      // 2. Zmień wartosc userCounterWhoWroteMessages na messages.length 
      setUserCounterWhoWroteMessages(messages.length); // <-- napisz swój kod tutaj proszę!. 

      // console.log("answers", answers);


      // Jak ludzie odpowiadali na 1 pytanie?
      // |
      // |                 |
      // |   |             |
      // |   |             |          |
      // |   |   |         |          |
      // |___|___|____|____|_____|____|__________
      //     0   16   32   66    82   100
      // const jakOdpowiadaliNaPierwszePytanie = [4,2,1,5,1,3];
      // const ileOsobZaznaczyloPierwszaOdpowiedzWPierwszymPytaniu = answers.map(answer=>answer)


      const KOLKO = {
        PIERWSZE: 0,
        DRUGIE: 16,
        TRZECIE: 32,
        CZWARTE: 66,
        PIATE: 82,
        SZOSTE: 100,
      }

      /* wartoscZaznaczenia
      *  Funkcja zwraca ile razy dana wartość(kółko) została zaznaczona
      *  kolko - które zaznaczenie
      *  pytanie - ktore pytanie rozpartujemy
      * 
      * np: wartoscZaznaczenia(0, 1) - wskazuje pierwsze kółko ile razy było zaznaczone w pierwszym pytanie we wszystkich testach. 
      */
      function ileZaznaczen(kolko, nrPytania) {
        const wszystkieOdpowiedziNaPierwszePytanie = answers.map(test => test.filter((answer) => answer.question === nrPytania));
        const wszystkieTestyAleOdpowiedziTylkoNaPytaniePierwszegZero = wszystkieOdpowiedziNaPierwszePytanie.map(test => test.filter((answer => answer.value === kolko)));
        const pokazTylkoTeKtoreMajaWartosc = wszystkieTestyAleOdpowiedziTylkoNaPytaniePierwszegZero.filter(test => test[0]);
        const ileByloOdpowiedzi = pokazTylkoTeKtoreMajaWartosc.length;
        const sumaZeWszystkichOdpowiedzi = wszystkieOdpowiedziNaPierwszePytanie.length;

        return Math.round((ileByloOdpowiedzi/sumaZeWszystkichOdpowiedzi)*100,2);
      }
      function jakOdpowiadaliNaPytanie(nrPytania) {
        return [
          ileZaznaczen(KOLKO.PIERWSZE, nrPytania),
          ileZaznaczen(KOLKO.DRUGIE, nrPytania),
          ileZaznaczen(KOLKO.TRZECIE, nrPytania),
          ileZaznaczen(KOLKO.CZWARTE, nrPytania),
          ileZaznaczen(KOLKO.PIATE, nrPytania),
          ileZaznaczen(KOLKO.SZOSTE, nrPytania),
        ];
      }

      const allFunctionSetData = [null, setData1, setData2, setData3, setData4, setData5, setData6, setData7, setData8, setData9, setData10, setData11, setData12, setData13, setData14, setData15, setData16, setData17, setData18];
      for (let i = 1; i <= 18; i++) {
        allFunctionSetData[i]([
          { day: 1, download: jakOdpowiadaliNaPytanie(i)[0] },
          { day: 2, download: jakOdpowiadaliNaPytanie(i)[1] },
          { day: 3, download: jakOdpowiadaliNaPytanie(i)[2] },
          { day: 4, download: jakOdpowiadaliNaPytanie(i)[3] },
          { day: 5, download: jakOdpowiadaliNaPytanie(i)[4] },
          { day: 6, download: jakOdpowiadaliNaPytanie(i)[5] },
        ]);
      }

      const czasyOdpowiedziNaPierwszePytanie = [];

      const czasyOdpowiedziNaWszystkiePytania = []

      // Czasy odpowiedzi na pierwsze pytania

      console.log('odpowiedzi', testFinished);
      for(let i = 0; i < answers.length; i++) {
        czasyOdpowiedziNaWszystkiePytania.push(getTime(answers[i][0]));
      }

      console.log('czas opowiedzi na wszystkie pytania', czasyOdpowiedziNaWszystkiePytania)
      setCzasOdpowiedzi(czasyOdpowiedziNaWszystkiePytania);
      
      const sumaCzasow = czasyOdpowiedziNaWszystkiePytania.reduce((previousValue, currentValue)=>previousValue+currentValue);
      console.log('średnia sumaCzasow', sumaCzasow/czasyOdpowiedziNaWszystkiePytania.length);
     


      // To jest pętla gdzie i = 1 to wartość początkowa, i<= 18 do jakiej wartośći pętla for ma działać, i++ co jaką wartość ma skakać
      for (let i = 1; i <= 500; i++) {
        // tutaj wyswietlasz na konsoli
        // console.log(i * 2)
      }

      const calculateOne = (i) => {
       
        const result = { R: 0, B: 0, G: 0, Y: 0 };
        const obliczKolor = (a) => Array.isArray(a) && a.map((o) => {
          result[questions[o.question - 1].colors[0]] = result[questions[o.question - 1].colors[0]] + (100 - o.value);
          result[questions[o.question - 1].colors[1]] = result[questions[o.question - 1].colors[1]] + o.value;
        });
        obliczKolor(answers[i]);
        return result;
      }


      let all = [];
      for (let i = 1; i < answers.length; i++) {
        // tutaj wyswietlasz na konsoli
        const x  = calculateOne(i);
        all.push(predictColor(x['R'], x['B'], x['G'], x['Y']));
      }

      const counts = {};

      all.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
      // console.log(counts)
      // console.log(all);
      setPieChartData({ R: counts[4], B: counts[0], G: counts[12], Y: counts[8] });
      // console.log(pieChartData);
      // const obliczKolor = () =>{ return 'test'}
      // console.log('sss', answers);
     
      // setPieChartData(result);

      // 1. Oblicz kolory jednej osoby
      // 2. Oblicz kolory dla wszystkich osób
      // 3. wyciagnij kolor dominujący dla jednej osoby
      // 4. wyciągnij kolor dominujący dla wszystkich osób
      // 5. zgrupuj kolory dominujące dla wszyskich osób.
      // 6. wyświetl je na wykresie. 


    })
  }, []);

  var tab = new Array("pomarańcze", "cytryny", "banany", "limonki", "melony", "arbuzy")


const COLORS = {
  RED: 'RED', 
  BLUE: 'BLUE', 
  YELLOW: 'YELLOW',
  GREEN: 'GREEN'
}

const COLORS_BACKGROUND = {
  RED: '#FF9999', 
  BLUE: '#99D1FF', 
  YELLOW: '#FFEB99',
  GREEN: '#9BED99'
}
  const daneWykresSlupkowy = [
    {
      data: data1,
      title: "1. Podczas podejmowania decyzji w projekcie najważniejsza jest:",
      left: 'koncentracja na celu',
      right: 'wykreowanie niepowtarzalnego pomysłu', 
      colorLeft: COLORS.RED, 
      colorRight: COLORS.YELLOW
    },
    {
      data: data2,
      title: "2. W trakcie realizacji zadań najważniejsze, żeby:",
      left: 'pracować w przemyślany sposób',
      right: 'pomagać najsłabszym pracownikom', 
      colorLeft: COLORS.BLUE, 
      colorRight: COLORS.GREEN
    },
    {
      data: data3,
      title: "3. W komunikacji w zespole:",
      left: 'być nieco na luzie, żartować',
      right: 'dbać, aby nikogo nie urazić', 
      colorLeft: COLORS.YELLOW, 
      colorRight: COLORS.GREEN
    }, {
      data: data4,
      title: "4. Podczas spotkań zawodowych:",
      left: 'chcę dobrze przeanalizować sytuację',
      right: 'buduję relację z rozmówcami, potem biznes', 
      colorLeft: COLORS.BLUE, 
      colorRight: COLORS.YELLOW
    }, {
      data: data5,
      title: "5. Kiedy udzielam feedbacku:",
      left: 'dbam o to aby nikogo nie dotknąć',
      right: 'staram się zostać precyzyjnie zrozumianym', 
      colorLeft: COLORS.GREEN, 
      colorRight: COLORS.BLUE
    }, {
      data: data6,
      title: "6. Kiedy ktoś się spóźnia:",
      left: 'spokojnie czekam na wyjaśnienie',
      right: 'złoszczę się - nie toleruję spóźnień', 
      colorLeft: COLORS.BLUE, 
      colorRight: COLORS.RED
    }, {
      data: data7,
      title: "7. W pracy zespołowej:",
      left: 'skuteczność',
      right: 'realizacja strategii', 
      colorLeft: COLORS.RED, 
      colorRight: COLORS.BLUE
    }, {
      data: data8,
      title: "8. Rolą szefa jest:",
      left: 'realizacja celu - za wszelką cenę',
      right: 'ochrona członków zespołu', 
      colorLeft: COLORS.RED, 
      colorRight: COLORS.GREEN
    }, {
      data: data9,
      title: "9. Kiedy dostaję nowe zadanie:",
      left: 'dokładnie je planuje',
      right: 'jestem podekscytowany jak nową przygodą', 
      colorLeft: COLORS.BLUE, 
      colorRight: COLORS.YELLOW
    }, {
      data: data10,
      title: "10. Kiedy ktoś jest wobec mnie nieuprzejmy:",
      left: 'mówię wprost,co o tym myślę',
      right: 'reaguję w kontrolowany sposób', 
      colorLeft: COLORS.RED, 
      colorRight: COLORS.BLUE
    }, {
      data: data11,
      title: "11. Po ukończeniu zadania większą satysfakcję sprawiają mi:",
      left: 'przeżyte wspólnie z innymi doznania i doświadczenia',
      right: 'fakt, że mam fakt, że kolejne zadanie mam już za sobą', 
      colorLeft: COLORS.YELLOW, 
      colorRight: COLORS.RED
    }, {
      data: data12,
      title: "12. Wolę wykładowcę:",
      left: 'oschłego, ale logicznego',
      right: 'sympatycznego, ale roztargnionego', 
      colorLeft: COLORS.BLUE, 
      colorRight: COLORS.GREEN
    }, {
      data: data13,
      title: "13. Odpoczywam najlepiej",
      left: 'w spokoju, samotnie lub w małym gronie',
      right: 'aktywnie, bijąc kolejny rekord lub biorąc udział w zawodach', 
      colorLeft: COLORS.GREEN, 
      colorRight: COLORS.RED
    }, {
      data: data14,
      title: "14. Bardziej denerwują mnie osoby:",
      left: 'dla których liczy się tylko tylko “tu i teraz”',
      right: 'które wszystko chcą ująć w procedury', 
      colorLeft: COLORS.GREEN, 
      colorRight: COLORS.YELLOW
    }, {
      data: data15,
      title: "15, Będąc w towarzystwie, zwykle:",
      left: 'mówię więcej niż pozostali',
      right: 'do rzeczy, zwięźle i na temat', 
      colorLeft: COLORS.YELLOW, 
      colorRight: COLORS.RED
    }, {
      data: data16,
      title: "16, Często żałuję, że powiedziałem:",
      left: 'za mało',
      right: 'za dużo', 
      colorLeft: COLORS.GREEN, 
      colorRight: COLORS.YELLOW
    },
    {
      data: data17,
      title: "17. Często podejmuję decyzje:",
      left: 'za szybko',
      right: 'za późno', 
      colorLeft: COLORS.YELLOW, 
      colorRight: COLORS.BLUE
    }, {
      data: data18,
      title: "18. Uważam, że racjonalna krytyka:",
      left: 'jest pożądana i skuteczna',
      right: 'często rani i przynosi wiele szkody', 
      colorLeft: COLORS.RED, 
      colorRight: COLORS.GREEN
    },
  ]


  // wyswietlanie
  return (
    <>
      <RamkaWrapper>
        <Ramka dane={userCounter}>Rozpoczęte i skończone testy</Ramka>
        <Ramka dane={userCounter-skonczoneTesty}>nieskończone testy</Ramka>
        <Ramka dane={skonczoneTesty}>Skończone testy</Ramka>
        {/* <Ramka dane={"x"}>Stosunek zarejestrowanych kont do wykonanych testów</Ramka> */}
        <Ramka dane={userCounterWhoWroteMessages}>Liczba osób, które wysłały wiadomość</Ramka>
        

        


        {/* <ZajebisteWykresy />  */}

      </RamkaWrapper>

      <RamkaWrapper>
        <div style={{width: 400}}>
          <h3>Rozkład dominujących stylów</h3>
          <WykresKołowyKolory 
          colorsBackground={COLORS_BACKGROUND}
          result={pieChartData} />
          </div>

          <WykresSlupkowyCzas
                  style={{height: 400}}
                  data={czasOdpowiedzi}
                />
      </RamkaWrapper>
           
      <RamkaWrapper>
        {
          // To jest funkcja map, która bierze tablicę np: [1,2,3,4,5].map((liczna)=>liczba)
          // a następnie przechodzi po kazdym elemecie tablicy i wyświetla jej wartość 
          daneWykresSlupkowy.map((dana) => 
          {
          // console.log('dane dla jednego wykresu ', dana);
          if(dana.data)
          {
            
          const left = dana.data[0].download+dana.data[1].download+dana.data[2].download;
          const right = dana.data[3].download+dana.data[4].download+dana.data[5].download;
            
           const backgroundColorBox = 
              ((left === right) ? 
                "silver" :  ((left > right) ? dana.colorLeft : dana.colorRight))

           const getBackgroundColor = backgroundColorBox ? backgroundColorBox : 'pink';

            // backgroundColorBox && console.log('xxxx', backgroundColorBox)

            return (
              <div style={{
                border: "3px solid black",
                padding: "5px",
                marginTop: "20px",
                marginBottom: "20px",
                margin: "5px",
                height: 580
              }}>
                <RamkaWrapper style={{backgroundColor: COLORS_BACKGROUND[getBackgroundColor]}}>
                  <center><div style={{ width: 550, height: 100 }}><h2>{dana.title}</h2></div></center>
                </RamkaWrapper>
                <WykresSlupkowy
                  style={{height: 400}}
                  data={dana.data}
                />
                <RamkaWrapper style={{alignItems: 'center', backgroundColor: getBackgroundColor}}>
                  <div style={
                    {
                      width: "275px", 
                      minHeight: "50px", 
                      backgroundColor: COLORS_BACKGROUND[dana.colorLeft],
                      paddingTop: 10
                      }
                    }>
                    <center>
                      <b>{dana.left}</b>
                    </center>
                  </div>
                  
                  <div style={{
                    width: "275px", 
                    minHeight: "50px", 
                    paddingTop: 10,
                    backgroundColor: COLORS_BACKGROUND[dana.colorRight]
                  }}>
                    <center>
                      <b>{dana.right}</b>
                    </center>
                  </div>
                </RamkaWrapper>
              </div>
            )
          }
          })
        }
      </RamkaWrapper>

      {
        // tutaj kod z map
        // Zadanie domowe 1 z Map
        // Stwórz tablice, przypisz do niej nazwy owocow(dziesieciu cystrusow) i wysietl te owoce na stronie
        // https://www.youtube.com/watch?v=G8WfTsZTAPE
      }

      {["pomarańcze", "cytryny", "banany", "limonki", "melony"].map((cytrus) => {
        return (<span> {cytrus}</span>)
      })}


    </>
  );
}

export default App;