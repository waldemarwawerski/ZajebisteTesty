function Ramka({dane, children}) {
    return(
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
          <strong>{children}</strong>
        </center>
        <center>
          <div
            style={{
              fontSize: 30,
            }}
          >
            {
             // jeśli sa dane to wyswietl dane jesli nie ma danych to wyswietl 'brak danych'
            }
            {dane ? dane : 'Brak danych'}
          </div>
        </center>
      </div>
    );
}
  
export default Ramka;
  