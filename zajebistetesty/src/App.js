import { useState } from "react";
import ZajebisteWykresy from "./Pages/ZajebisteWykresy";
import "./App.css";
import { getData } from "./server";
import Ramka from "./Ramka";
import Telefon from './Chiny/Telefon';

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
    const testFinished = answers.filter((test)=>test.length >= 18);
    setSkonczoneTesty(testFinished.length);

    //tutaj przypisujemy konkretną wartość do zmiennej userCounterWhoWroteMessages
    // 1. Uzyj funkcji setUserConterWhoWroteMassages zamiast setUserCounter
    // 2. Zmień wartosc userCounterWhoWroteMessages na messages.length 
    setUserCounterWhoWroteMessages(messages.length); // <-- napisz swój kod tutaj proszę!. 

    console.log("answers", answers);
    console.log("messages", messages);
  });



  // Zadani domowe zrób aby było ładnie!
  // tak zrób z resztą

  // nowa wartość ->> skonczoneTesty
  return (
    <>
    { 
    // **zamien tego Diva na kompoennt , wyrzuc to do pliku a następnie dodaj import w tym pliku i uzyj tego komponentu}
}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          alignContent: "center",
          flexWrap: "wrap"
        }}
      >
       <Ramka dane={userCounter}>Liczba wykonanych testów</Ramka>
       <Ramka></Ramka>
       <Ramka></Ramka>
       <Ramka></Ramka>
       <Ramka></Ramka>
       <Ramka></Ramka>
       <Ramka>Dupa2</Ramka>


        <div
          style={{
            border: "3px solid black",
            width: '350px',
            height: '60px',
            padding: "20px",
            margin: "20px",
          }}
        >
          <center>
            <b>Liczba wykonanych testów</b>
          </center>
          <center>
            <div
              style={{
                fontSize: 30,
              }}
            >
              {userCounter}
            </div>
          </center>
        </div>

      <div
      style={{
        border: '3px solid black',
        width: '350px',
        height: '60px',
        padding: '20px',
        margin: '20px'
      }}>
        <center>
          <strong>
          Stosunek zarejestrowanych kont do wykonanych testów
          </strong>
        </center>  
        <center>
          <div style={{
            fontSize: 30
          }}>
            X
            </div>
        </center>
        </div>
      

      <div
      style={{
        border: '3px solid black',
        width: '300px',
        height: '60px',
        padding: '20px',
        margin: '20px'
      }}>
        <center>
          <strong>
         Liczba osób, które wysłała wiadomość
          </strong>
        </center>  
        <center>
          <div style={{
            fontSize: 30
          }}>
          {userCounterWhoWroteMessages}
            </div>
        </center>
        </div>
        </div>


        {
        // drugi wiersz
      }


       
        

      {/* <ZajebisteWykresy /> */}
    </>
  );
}

export default App;
