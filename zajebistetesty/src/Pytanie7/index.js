function Pytanie7(props) {

    //console.log('Pytanie');
    console.log('Pytanie7');
  
    // funckja zwykΕa
    function wyswietlmicos() {
      alert('cos wyswietlam 1');
    };
  
    // funkcja strzaΕkowa
    const wyswietlmicos2 = () => {
      alert('cos wyswietlam 2');
    }
    function przekazWartosc(wartosc) {
      alert(wartosc);
    };
  
    // uruchamiam funkcje
    // wyswietlmicos();
    // wyswietlmicos2();
  
    // + napisz nowa funkcje ktora zwraca
    // + style dla buttona a jako parametr 
    // + przyjmuje wartosc wysokosci i szerokosci
    // ππππππππππππππππππππππππππππ
  
    function styleDlaButtona(wysokosc, szerokosc) {
      return { 
        borderRadius: 100, 
        width: wysokosc, 
        height: szerokosc, 
        borderWidth: 2, 
        borderColor: '#fcba03' 
    
      }
    };
  
    // pΔtla , for, while, map
  
    // MAP
    // pΔtla map przymuje tablice i 
    // zwraca kazdy elemt tej tablicy 
    // w funkcji a nastepnie przekazuje je do tablicy
  
    return (
      <div className="App">
        Wszyscy otwarcie dyskutujΔ na temat wΕasnych sΕaboΕci, bΕΔdΓ³w i obaw.
        <div>
          {[1, 2, 3, 4, 5, 6, 7].map((wartosc) => {
            
            let szerokosc;
            let wysokosc;
  
            if(wartosc <= 4)
            {
              szerokosc = 30 - 2*(wartosc-1);
              wysokosc = szerokosc;
            }else{
              szerokosc = 24 + 2*(wartosc-4);
              wysokosc = szerokosc; 
            }
           
            return (
              <button
                style={styleDlaButtona(wysokosc, szerokosc)}
                onClick={() => przekazWartosc(wartosc)}>
                {wartosc}
              </button>)
          })
          }
        </div>
      </div>
    );
  }
  
  // Zadanie domowe 
  // Napisz nowy komponent uzywajac metody ulubionej (Copiego Pejsta)
  // Komponent ten nazywac sie ma Pytanie7
  // Komponent ten renderuje to samo co Pytanie
  // Ale nie ma wartosci od 1 do 10 tylko wartosci od 1 do 7 gdzie kΓ³Εeczka maja siΔ wyswietlac 
  // symetrycznie
  
  export default Pytanie7;
  