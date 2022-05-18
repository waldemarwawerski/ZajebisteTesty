import ZajebisteWykresy from './Pages/ZajebisteWykresy';
import './App.css';
const App = () => {

  return (
    <>
    <div 
    style={{ 
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      alignContent: 'center',
      }}>
      
      <div style={{
        border: '3px solid black', 
        width: '25%',
        padding: '20px',
        margin: '20px'
      }}>
        <center>
          <strong>
            Liczba zarejestrowanych użytkowników
          </strong>
        </center>
        <div>
          <center>
          <div style={{
            fontSize: 30
          }}>99</div>
          </center>
        </div>
      </div>

      <div style={{
        border: '3px solid black',
        width: '25%',
        padding: '20px',
        margin: '20px'
      }}>
        <center>
          <b>
            Liczba wykonanych testów
          </b>
        </center>
        <div>
          <center>
          <div style={{
            fontSize: 30
          }}>99</div>
          </center>
        </div>
      </div>

      <div>
        Stosunek zarejestrowanych kont do wykonanych testów
        <div>
          <center>
          99 %
          </center>
        </div>
      </div>
    </div>
    <ZajebisteWykresy />
  </>
   
  );

}

export default App;
