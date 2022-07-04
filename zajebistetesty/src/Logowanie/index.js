import { useState } from "react";
import sha256 from 'sha256';

function Logowanie(props) {


    const [logged, setLogged] = useState(true);
    const [hashPassword, setHashPassword] = useState();

    const password = "719a8d0697c5fd17c38cfdd11a6614e9613ed8814318b54b41551a738c14c71f";

    const onChange = (e) => {
        const pass = e.target.value;
        const hashPass = sha256.x2(pass);
        setHashPassword(hashPass)
    }

    const onClick = () => {

        if(password === hashPassword)
        {
            props.setIsLogged(true); // ustawiamy dla zewntrzego App.js
            setLogged(true); // ustawiamy dla Logowanie.js (dla tego pliku)
        }else{
            props.setIsLogged(false);
            setLogged(false)
        }
    }

    return (
        <div style={{
            width: "800px",
            height: "400px",
            border: "0px solid black",
            margin: "0 auto"
        }}>
            <div style={{
                width: "200px",
                height: "300px",
                backgroundColor: "red",
                margin: "0 auto",
            }}>
            </div>
            <p style={{
                width: "200px",
                margin: "0 auto",
                textAlign: "center"
            }}> 
                { !logged && "Nie masz dostępu Uosiu "}
                <br />
                Wpisz hasło 
                <input type="password" id="name" onChange={onChange}></input>
                <br></br>
                <input type= "button" value="Zaloguj się" onClick={onClick}></input>
                {/* {} */}
            </p> 
           
            { /*

            Podaj hasło
            -----------------
            |               |
            -----------------

            Przycisk zaloguj
            */}
        </div >
    );
}

export default Logowanie;
