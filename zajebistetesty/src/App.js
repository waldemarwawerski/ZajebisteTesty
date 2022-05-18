import { useState } from "react";
import ZajebisteWykresy from "./Pages/ZajebisteWykresy";
import "./App.css";
import { getData } from "./server";

const App = () => {
  const [userCounter, setUserCounter] = useState();

  getData.then((v) => {
    const answers = Object.keys(v.answers).map((key) => v.answers[key]);
    const messages = Object.keys(v.messages).map((key) => v.answers[key]);
    setUserCounter(answers.length);
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <div
          style={{
            border: "3px solid black",
            width: "25%",
            padding: "20px",
            margin: "20px",
          }}
        >
          <center>
            <strong>Liczba zarejestrowanych użytkowników</strong>
          </center>
          <div>
            <center>
              <div
                style={{
                  fontSize: 30,
                }}
              >
                0
              </div>
            </center>
          </div>
        </div>

        <div
          style={{
            border: "3px solid black",
            width: "25%",
            padding: "20px",
            margin: "20px",
          }}
        >
          <center>
            <b>Liczba wykonanych testów</b>
          </center>
          <div>
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
        </div>

        <div>
          Stosunek zarejestrowanych kont do wykonanych testów
          <div>
            <center>99 %</center>
          </div>
        </div>
      </div>
      <ZajebisteWykresy />
    </>
  );
};

export default App;
