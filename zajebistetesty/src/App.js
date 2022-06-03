import { useState } from "react";
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

    setData1([
      { day: 1, download: jakOdpowiadaliNaPytanie(1)[0] },
      { day: 2, download: jakOdpowiadaliNaPytanie(1)[1] },
      { day: 3, download: jakOdpowiadaliNaPytanie(1)[2] },
      { day: 4, download: jakOdpowiadaliNaPytanie(1)[3] },
      { day: 5, download: jakOdpowiadaliNaPytanie(1)[4] },
      { day: 6, download: jakOdpowiadaliNaPytanie(1)[5] },
    ]);

    setData2([
      { day: 1, download: jakOdpowiadaliNaPytanie(2)[0] },
      { day: 2, download: jakOdpowiadaliNaPytanie(2)[1] },
      { day: 3, download: jakOdpowiadaliNaPytanie(2)[2] },
      { day: 4, download: jakOdpowiadaliNaPytanie(2)[3] },
      { day: 5, download: jakOdpowiadaliNaPytanie(2)[4] },
      { day: 6, download: jakOdpowiadaliNaPytanie(2)[5] },
    ]);

    setData3([
      { day: 1, download: jakOdpowiadaliNaPytanie(3)[0] },
      { day: 2, download: jakOdpowiadaliNaPytanie(3)[1] },
      { day: 3, download: jakOdpowiadaliNaPytanie(3)[2] },
      { day: 4, download: jakOdpowiadaliNaPytanie(3)[3] },
      { day: 5, download: jakOdpowiadaliNaPytanie(3)[4] },
      { day: 6, download: jakOdpowiadaliNaPytanie(3)[5] },
    ]);

    setData4([
      { day: 1, download: jakOdpowiadaliNaPytanie(4)[0] },
      { day: 2, download: jakOdpowiadaliNaPytanie(4)[1] },
      { day: 3, download: jakOdpowiadaliNaPytanie(4)[2] },
      { day: 4, download: jakOdpowiadaliNaPytanie(4)[3] },
      { day: 5, download: jakOdpowiadaliNaPytanie(4)[4] },
      { day: 6, download: jakOdpowiadaliNaPytanie(4)[5] },
    ]);

    setData5([
      { day: 1, download: jakOdpowiadaliNaPytanie(5)[0] },
      { day: 2, download: jakOdpowiadaliNaPytanie(5)[1] },
      { day: 3, download: jakOdpowiadaliNaPytanie(5)[2] },
      { day: 4, download: jakOdpowiadaliNaPytanie(5)[3] },
      { day: 5, download: jakOdpowiadaliNaPytanie(5)[4] },
      { day: 6, download: jakOdpowiadaliNaPytanie(5)[5] },
    ]);

    setData6([
      { day: 1, download: jakOdpowiadaliNaPytanie(6)[0] },
      { day: 2, download: jakOdpowiadaliNaPytanie(6)[1] },
      { day: 3, download: jakOdpowiadaliNaPytanie(6)[2] },
      { day: 4, download: jakOdpowiadaliNaPytanie(6)[3] },
      { day: 5, download: jakOdpowiadaliNaPytanie(6)[4] },
      { day: 6, download: jakOdpowiadaliNaPytanie(6)[5] },
    ]);

    setData7([
      { day: 1, download: jakOdpowiadaliNaPytanie(7)[0] },
      { day: 2, download: jakOdpowiadaliNaPytanie(7)[1] },
      { day: 3, download: jakOdpowiadaliNaPytanie(7)[2] },
      { day: 4, download: jakOdpowiadaliNaPytanie(7)[3] },
      { day: 5, download: jakOdpowiadaliNaPytanie(7)[4] },
      { day: 6, download: jakOdpowiadaliNaPytanie(7)[5] },
    ]);

    setData8([
      { day: 1, download: jakOdpowiadaliNaPytanie(8)[0] },
      { day: 2, download: jakOdpowiadaliNaPytanie(8)[1] },
      { day: 3, download: jakOdpowiadaliNaPytanie(8)[2] },
      { day: 4, download: jakOdpowiadaliNaPytanie(8)[3] },
      { day: 5, download: jakOdpowiadaliNaPytanie(8)[4] },
      { day: 6, download: jakOdpowiadaliNaPytanie(8)[5] },
    ]);

    setData9([
      { day: 1, download: jakOdpowiadaliNaPytanie(9)[0] },
      { day: 2, download: jakOdpowiadaliNaPytanie(9)[1] },
      { day: 3, download: jakOdpowiadaliNaPytanie(9)[2] },
      { day: 4, download: jakOdpowiadaliNaPytanie(9)[3] },
      { day: 5, download: jakOdpowiadaliNaPytanie(9)[4] },
      { day: 6, download: jakOdpowiadaliNaPytanie(9)[5] },
    ]);

    setData10([
      { day: 1, download: jakOdpowiadaliNaPytanie(10)[0] },
      { day: 2, download: jakOdpowiadaliNaPytanie(10)[1] },
      { day: 3, download: jakOdpowiadaliNaPytanie(10)[2] },
      { day: 4, download: jakOdpowiadaliNaPytanie(10)[3] },
      { day: 5, download: jakOdpowiadaliNaPytanie(10)[4] },
      { day: 6, download: jakOdpowiadaliNaPytanie(10)[5] },
    ]);

    setData11([
      { day: 1, download: jakOdpowiadaliNaPytanie(11)[0] },
      { day: 2, download: jakOdpowiadaliNaPytanie(11)[1] },
      { day: 3, download: jakOdpowiadaliNaPytanie(11)[2] },
      { day: 4, download: jakOdpowiadaliNaPytanie(11)[3] },
      { day: 5, download: jakOdpowiadaliNaPytanie(11)[4] },
      { day: 6, download: jakOdpowiadaliNaPytanie(11)[5] },
    ]);

    setData12([
      { day: 1, download: jakOdpowiadaliNaPytanie(12)[0] },
      { day: 2, download: jakOdpowiadaliNaPytanie(12)[1] },
      { day: 3, download: jakOdpowiadaliNaPytanie(12)[2] },
      { day: 4, download: jakOdpowiadaliNaPytanie(12)[3] },
      { day: 5, download: jakOdpowiadaliNaPytanie(12)[4] },
      { day: 6, download: jakOdpowiadaliNaPytanie(12)[5] },
    ]);

    setData13([
      { day: 1, download: jakOdpowiadaliNaPytanie(13)[0] },
      { day: 2, download: jakOdpowiadaliNaPytanie(13)[1] },
      { day: 3, download: jakOdpowiadaliNaPytanie(13)[2] },
      { day: 4, download: jakOdpowiadaliNaPytanie(13)[3] },
      { day: 5, download: jakOdpowiadaliNaPytanie(13)[4] },
      { day: 6, download: jakOdpowiadaliNaPytanie(13)[5] },
    ]);

    setData14([
      { day: 1, download: jakOdpowiadaliNaPytanie(14)[0] },
      { day: 2, download: jakOdpowiadaliNaPytanie(14)[1] },
      { day: 3, download: jakOdpowiadaliNaPytanie(14)[2] },
      { day: 4, download: jakOdpowiadaliNaPytanie(14)[3] },
      { day: 5, download: jakOdpowiadaliNaPytanie(14)[4] },
      { day: 6, download: jakOdpowiadaliNaPytanie(14)[5] },
    ]);

    setData15([
      { day: 1, download: jakOdpowiadaliNaPytanie(15)[0] },
      { day: 2, download: jakOdpowiadaliNaPytanie(15)[1] },
      { day: 3, download: jakOdpowiadaliNaPytanie(15)[2] },
      { day: 4, download: jakOdpowiadaliNaPytanie(15)[3] },
      { day: 5, download: jakOdpowiadaliNaPytanie(15)[4] },
      { day: 6, download: jakOdpowiadaliNaPytanie(15)[5] },
    ]);

    setData16([
      { day: "", download: jakOdpowiadaliNaPytanie(16)[0] },
      { day: 2, download: jakOdpowiadaliNaPytanie(16)[1] },
      { day: 3, download: jakOdpowiadaliNaPytanie(16)[2] },
      { day: 4, download: jakOdpowiadaliNaPytanie(16)[3] },
      { day: 5, download: jakOdpowiadaliNaPytanie(16)[4] },
      { day: 6, download: jakOdpowiadaliNaPytanie(16)[5] },
    ]);

    setData17([
      { day: "", download: jakOdpowiadaliNaPytanie(17)[0] },
      { day: 2, download: jakOdpowiadaliNaPytanie(17)[1] },
      { day: 3, download: jakOdpowiadaliNaPytanie(17)[2] },
      { day: 4, download: jakOdpowiadaliNaPytanie(17)[3] },
      { day: 5, download: jakOdpowiadaliNaPytanie(17)[4] },
      { day: 6, download: jakOdpowiadaliNaPytanie(17)[5] },
    ]);

    setData18([
      { day: "", download: jakOdpowiadaliNaPytanie(18)[0] },
      { day: 2, download: jakOdpowiadaliNaPytanie(18)[1] },
      { day: 3, download: jakOdpowiadaliNaPytanie(18)[2] },
      { day: 4, download: jakOdpowiadaliNaPytanie(18)[3] },
      { day: 5, download: jakOdpowiadaliNaPytanie(18)[4] },
      { day: 6, download: jakOdpowiadaliNaPytanie(18)[5] },
    ]);


  });



  return (
    <>
      <RamkaWrapper>
        <Ramka dane={userCounter}>Liczba wykonanych testów</Ramka>
        <Ramka dane={"x"}>Stosunek zarejestrowanych kont do wykonanych testów</Ramka>
        <Ramka dane={userCounterWhoWroteMessages}>Liczba osób, które wysłały wiadomość</Ramka>
        <Ramka dane={skonczoneTesty}>Skończone testy</Ramka>


        {/* <ZajebisteWykresy />  */}

      </RamkaWrapper>
      <WykresSlupkowy
        data={data1}
        title={"Jak rozkładały się odpowiedzi w 1 pytaniu"}
      />

      <WykresSlupkowy
        data={data2}
        title={"Jak rozkładały się odpowiedzi w 2 pytaniu"}
      />

      <WykresSlupkowy
        data={data3}
        title={"Jak rozkładały się odpowiedzi w 3 pytaniu"}
      />

      <WykresSlupkowy
        data={data4}
        title={"Jak rozkładały się odpowiedzi w 4 pytaniu"}
      />

      <WykresSlupkowy
        data={data5}
        title={"Jak rozkładały się odpowiedzi w 5 pytaniu"}
      />

      <WykresSlupkowy
        data={data6}
        title={"Jak rozkładały się odpowiedzi w 6 pytaniu"}
      />

      <WykresSlupkowy
        data={data7}
        title={"Jak rozkładały się odpowiedzi w 7 pytaniu"}
      />

      <WykresSlupkowy
        data={data8}
        title={"Jak rozkładały się odpowiedzi w 8 pytaniu"}
      />

      <WykresSlupkowy
        data={data9}
        title={"Jak rozkładały się odpowiedzi w 9 pytaniu"}
      />

      <WykresSlupkowy
        data={data10}
        title={"Jak rozkładały się odpowiedzi w 10 pytaniu"}
      />

      <WykresSlupkowy
        data={data11}
        title={"Jak rozkładały się odpowiedzi w 11 pytaniu"}
      />

      <WykresSlupkowy
        data={data12}
        title={"Jak rozkładały się odpowiedzi w 12 pytaniu"}
      />

      <WykresSlupkowy
        data={data13}
        title={"Jak rozkładały się odpowiedzi w 13 pytaniu"}
      />

      <WykresSlupkowy
        data={data14}
        title={"Jak rozkładały się odpowiedzi w 14 pytaniu"}
      />

      <WykresSlupkowy
        data={data15}
        title={"Jak rozkładały się odpowiedzi w 15 pytaniu"}
      />

      <WykresSlupkowy
        data={data16}
        title={"Jak rozkładały się odpowiedzi w 16 pytaniu"}
      />

      <WykresSlupkowy
        data={data17}
        title={"Jak rozkładały się odpowiedzi w 17 pytaniu"}
      />

      <WykresSlupkowy
        data={data18}
        title={"Jak rozkładały się odpowiedzi w 18 pytaniu"}
      />

    </>
  );
}

export default App;