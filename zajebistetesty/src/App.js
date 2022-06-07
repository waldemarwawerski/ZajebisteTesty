import { useState, useEffect } from "react";
import ZajebisteWykresy from "./Pages/ZajebisteWykresy";
import "./App.css";
import { getData } from "./server";
import Ramka from "./Ramka";
import Telefon from './Chiny/Telefon';
import RamkaWrapper from "./RamkaWrapper";
import WykresSlupkowy from './WykresSlupkowy';

const App = () => {
  const [userCounter, setUserCounter] = useState();
  const [userCounterWhoWroteMessages, setUserCounterWhoWroteMessages] = useState();
  const [skonczoneTesty, setSkonczoneTesty] = useState();
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

  useEffect(() => {
    /* Magiczny kod który pobiera dane z bazy danych */
    getData.then((dane) => {
      // Przepisuje obiekt do tablicy
      const answers = Object.keys(dane.answers).map((key) => dane.answers[key]);
      const messages = Object.keys(dane.messages).map((key) => dane.messages[key]);

      // tutaj przypisujemy konkretną wartość do zmiennej userCouter
      setUserCounter(answers.length); // <-- tego kodu nie ruszasz bo to jest mój

      // testy ktore sa skończone
      const testFinished = answers.filter((test) => test.length >= 17);
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
        const ileByloOdpowiedzi = pokazTylkoTeKtoreMajaWartosc.length
        return ileByloOdpowiedzi;
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


      // tutaj kod z for
      // Zadanie domowe 2 z for
      // na konsoli wyświetl wszystkie liczby pazyste od 1 do miliona. wzor => (i*2) gdzie i to kolejna wartosc w petli
      // https://www.youtube.com/watch?v=j3EqSYZcdX8




      // To jest pętla gdzie i = 1 to wartość początkowa, i<= 18 do jakiej wartośći pętla for ma działać, i++ co jaką wartość ma skakać
      for (let i = 1; i <= 500; i++) {
        // tutaj wyswietlasz na konsoli
        console.log(i * 2)
      }



    })
  }, []);
  var result = document.getElementById("result");

  var tab = new Array("pomarańcze", "cytryny", "banany", "limonki", "melony", "arbuzy")


const COLORS = {
  RED: 'RED', 
  BLUE: 'BLUE', 
  YELLOW: 'YELLOW',
  GREEN: 'GREEN'
}

const COLORS_BACKGROUND = {
  RED: 'red', 
  BLUE: 'blue', 
  YELLOW: 'yellow',
  GREEN: 'green'
}
  const daneWykresSlupkowy = [
    {
      data: data1,
      title: "Podczas podejmowania decyzji w projekcie najważniejsza jest:",
      left: 'koncentracja na celu',
      right: 'wykreowanie niepowtarzalnego pomysłu', 
      colorLeft: COLORS.RED, 
      colorRight: COLORS.YELLOW
    },
    {
      data: data2,
      title: "W trakcie realizacji zadań najważniejsze, żeby:",
      left: '',
      right: '', 
      colorLeft: '', 
      colorRight: ''
    },
    {
      data: data3,
      title: "W komunikacji w zespole:",
      left: '',
      right: '', 
      colorLeft: '', 
      colorRight: ''
    }, {
      data: data4,
      title: "Podczas spotkań zawodowych:",
      left: '',
      right: '', 
      colorLeft: '', 
      colorRight: ''
    }, {
      data: data5,
      title: "Kiedy udzielam feedbacku:",
      left: '',
      right: '', 
      colorLeft: '', 
      colorRight: ''
    }, {
      data: data6,
      title: "Kiedy ktoś się spóźnia:",
      left: '',
      right: '', 
      colorLeft: '', 
      colorRight: ''
    }, {
      data: data7,
      title: "W pracy zespołowej:",
      left: '',
      right: '', 
      colorLeft: '', 
      colorRight: ''
    }, {
      data: data8,
      title: "Rolą szefa jest:",
      left: '',
      right: '', 
      colorLeft: '', 
      colorRight: ''
    }, {
      data: data9,
      title: "Kiedy dostaję nowe zadanie:",
      left: '',
      right: '', 
      colorLeft: '', 
      colorRight: ''
    }, {
      data: data10,
      title: "Kiedy ktoś jest wobec mnie nieuprzejmy:",
      left: '',
      right: '', 
      colorLeft: '', 
      colorRight: ''
    }, {
      data: data11,
      title: "Po ukończeniu zadania większą satysfakcję sprawiają mi:",
      left: '',
      right: '', 
      colorLeft: '', 
      colorRight: ''
    }, {
      data: data12,
      title: "Wolę wykładowcę:",
      left: '',
      right: '', 
      colorLeft: '', 
      colorRight: ''
    }, {
      data: data13,
      title: "Odpoczywam najlepiej",
      left: '',
      right: '', 
      colorLeft: '', 
      colorRight: ''
    }, {
      data: data14,
      title: "Bardziej denerwują mnie:",
      left: '',
      right: '', 
      colorLeft: '', 
      colorRight: ''
    }, {
      data: data15,
      title: "Będąc w towarzystwie, zwykle:",
      left: '',
      right: '', 
      colorLeft: '', 
      colorRight: ''
    }, {
      data: data16,
      title: "Często żałuję, że powiedziałem:",
      left: '',
      right: '', 
      colorLeft: '', 
      colorRight: ''
    },
    {
      data: data17,
      title: "Często podejmuję decyzje:",
      left: '',
      right: '', 
      colorLeft: '', 
      colorRight: ''
    }, {
      data: data18,
      title: "Uważam, że racjonalna krytyka:",
      left: '',
      right: '', 
      colorLeft: '', 
      colorRight: ''
    },
  ]




  // wyswietlanie
  return (
    <>
      <RamkaWrapper>
        <Ramka dane={userCounter}>Liczba wykonanych testów</Ramka>
        <Ramka dane={"x"}>Stosunek zarejestrowanych kont do wykonanych testów</Ramka>
        <Ramka dane={userCounterWhoWroteMessages}>Liczba osób, które wysłały wiadomość</Ramka>
        <Ramka dane={skonczoneTesty}>Skończone testy</Ramka>

        


        {/* <ZajebisteWykresy />  */}

      </RamkaWrapper>
      <RamkaWrapper>
        {
          // To jest funkcja map, która bierze tablicę np: [1,2,3,4,5].map((liczna)=>liczba)
          // a następnie przechodzi po kazdym elemecie tablicy i wyświetla jej wartość 
          daneWykresSlupkowy.map((dana) => 
          {
          console.log('dane dla jednego wykresu ', dana);
          if(dana.data)
          {
            
          const left = dana.data[0].download+dana.data[1].download+dana.data[2].download;
          const right = dana.data[3].download+dana.data[4].download+dana.data[5].download;
            
           const backgroundColorBox = 
              ((left === right) ? 
                "silver" :  ((left > right) ? dana.colorLeft : dana.colorRight))

           const getBackgroundColor = backgroundColorBox ? backgroundColorBox : 'pink';

            backgroundColorBox && console.log('xxxx', backgroundColorBox)

            return (
              <div style={{
                border: "3px solid black",
                padding: "5px",
                marginTop: "20px",
                marginBottom: "20px",
                margin: "5px",
                height: 600
              }}>
                <RamkaWrapper style={{backgroundColor: getBackgroundColor}}>
                  <center><div style={{ width: 550, height: 100 }}><h2>{dana.title}</h2></div></center>
                </RamkaWrapper>
                <WykresSlupkowy
                // style={{backgroundColor: getBackgroundColor}}
                  data={dana.data}
                />
                <RamkaWrapper style={{alignItems: 'flex-start', backgroundColor: getBackgroundColor}}>
                  <div style={{width: "50%", minHeight: "60px", backgroundColor: COLORS_BACKGROUND[dana.colorLeft]}}>
                    <center>
                      <b>{dana.left}</b>
                    </center>
                  </div>
                  
                  <div style={{width: "50%", minHeight: "60px", backgroundColor: COLORS_BACKGROUND[dana.colorRight]}}>
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