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
  


  return (
    <div className="App">
     Członkowie zespołu ufają sobie wzajemnie 
     <div>
      <button style={{ borderRadius: 100, width: 30, height: 30}} onClick={()=>przekazWartosc(1)}>1</button>
      <button style={{ borderRadius: 100, width: 28, height: 28}} onClick={()=>przekazWartosc(2)}>2</button>
      <button style={{ borderRadius: 100, width: 26, height: 26}} onClick={()=>przekazWartosc(3)}>3</button>
      <button style={{ borderRadius: 100, width: 24, height: 24}} onClick={()=>przekazWartosc(4)}>4</button>
      <button style={{ borderRadius: 100, width: 22, height: 22}} onClick={()=>przekazWartosc(5)}>5</button>
      <button style={{ borderRadius: 100, width: 22, height: 22}} onClick={()=>przekazWartosc(6)}>6</button>
      <button style={{ borderRadius: 100, width: 24, height: 24}} onClick={()=>przekazWartosc(7)}>7</button>
      <button style={{ borderRadius: 100, width: 26, height: 26}} onClick={()=>przekazWartosc(8)}>8</button>
      <button style={{ borderRadius: 100, width: 28, height: 28}} onClick={()=>przekazWartosc(9)}>9</button>
      <button style={{ borderRadius: 100, width: 30, height: 30}} onClick={()=>przekazWartosc(10)}>10</button>
     </div>
    </div>
  );
}

export default Pytanie;
