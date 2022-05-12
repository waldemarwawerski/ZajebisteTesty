function Pytanie(props) {

  console.log('Pytanie');

  // funckja zwykła
  function wyswietlmicos() {
    alert('cos wyswietlam 1');
  };

  // funkcja strzałkowa
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
  // 🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉

  function styleDlaButtona(wysokosc, szerokosc) {
    return { 
      borderRadius: 100, 
      width: wysokosc, 
      height: szerokosc, 
      borderWidth: 2, 
      borderColor: 'red' 
    }
  };

  // pętla , for, while, map

  // MAP
  // pętla map przymuje tablice i 
  // zwraca kazdy elemt tej tablicy 
  // w funkcji a nastepnie przekazuje je do tablicy

  return (
    <div className="App">
      Członkowie zespołu ufają sobie wzajemnie
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((wartosc) => {
          
          let szerokosc;
          let wysokosc;

          if(wartosc <= 5)
          {
            szerokosc = 30 - 2*(wartosc-1);
            wysokosc = szerokosc;
          }else{
            szerokosc = 22 + 2*(wartosc-6);
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
// Ale nie ma wartosci od 1 do 10 tylko wartosci od 1 do 7 gdzie kółeczka maja się wyswietlac 
// symetrycznie

export default Pytanie;
