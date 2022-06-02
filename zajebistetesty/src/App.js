import { useState } from "react";
import ZajebisteWykresy from "./Pages/ZajebisteWykresy";
import "./App.css";
import { getData } from "./server";
import Ramka from "./Ramka";
import Telefon from './Chiny/Telefon';
import RamkaWrapper from "./RamkaWrapper";

const App = () => {
  const [userCounter, setUserCounter] = useState();
  const [userCounterWhoWroteMessages, setUserCounterWhoWroteMessages] = useState();
  const [skonczoneTesty, setSkonczoneTesty] = useState();

  /* Magiczny kod który pobiera dane z bazy danych */
  getData.then((dane) => {
    // Przepisuje obiekt do tablicy
    const answers = Object.keys(dane.answers).map((key) => dane.answers[key]);
    const messages = Object.keys(dane.messages).map((key) => dane.messages[key]);

    // tutaj przypisujemy konkretną wartość do zmiennej userCouter
    setUserCounter(answers.length); // <-- tego kodu nie ruszasz bo to jest mój

    // testy ktore sa skończone
    const testFinished = answers.filter((test)=>test.length >= 17);
    setSkonczoneTesty(testFinished.length);

    //tutaj przypisujemy konkretną wartość do zmiennej userCounterWhoWroteMessages
    // 1. Uzyj funkcji setUserConterWhoWroteMassages zamiast setUserCounter
    // 2. Zmień wartosc userCounterWhoWroteMessages na messages.length 
    setUserCounterWhoWroteMessages(messages.length); // <-- napisz swój kod tutaj proszę!. 

    console.log("answers", answers);
    console.log("messages", messages);
  });

  return (
     <RamkaWrapper>
       <Ramka dane={userCounter}>Liczba wykonanych testów</Ramka>
       <Ramka dane={"x"}>Stosunek zarejestrowanych kont do wykonanych testów</Ramka>
       <Ramka dane={userCounterWhoWroteMessages}>Liczba osób, które wysłały wiadomość</Ramka>
       <Ramka dane={skonczoneTesty}>Skończone testy</Ramka>
        {/* <ZajebisteWykresy /> */}
      </RamkaWrapper> 
  );
}

export default App;