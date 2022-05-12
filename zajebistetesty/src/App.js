import logo from './logo.svg';
import './App.css';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLabel } from "victory"
import WykresSlupkowy from './WykresSlupkowy';
import Pytanie from './Pytanie';
import Pytanie7 from './Pytanie7';
import Pytanie8 from './Pytanie8';
import StackedPolarBars from './StackedPolarBars';
import data0 from './dane/data0';
import data1 from './dane/data1';
import data2 from './dane/data2';
import {useEffect, useState} from 'react';

const App = () => {

  // co chcemy zrobić?
  /*
    1. Domyślnie, animuje po zmianie danych a my chcemy animowac, 
    chcemy obchodzmy go, ze podmieniamy dane. 
    To ma wymusic animacje. 
    2. Domyślnie zasssa pusty dane do wykresu "data0"
    i za pomoca hooka (set - ustaw/umiesc), setData
    najpierw ma mu dac data0 jako domyslne a potem dac mu dane na data1
  */


  // nowa zmienna "data" i przypisuje do niej wartosc domyślną "data0"

  // USTAW WARTOSC ZEROWA DLA WYKRESU I ZDEFINUJ MI DATA I SETDATA
   const [data, setData] = useState(data1);

  // 3 razy program nam to uruchamia, a chcemy tylko raz

  //KIEDY APLIKACJA SIE URUCHOIMI
  useEffect(()=>{
    // uruchom mi ten kod tylko raz kiedy nasza aplikacja się uruchamia.
    // alert('komunikat powinien sie pojawić tylko raz na uruchomieniu nasze aplikacji');

    // // URUCHOM MI KOD PO 10 sekundach
    // setTimeout(()=>{

    //   // USTAW WARTOSC DLA WYKRESU
    //   setData(data1);
    //   // tutaj zrób coś po sekundzie
     
    // }, 2000)

   // URUCHOM MI KOD PO 10 sekundach
   // setTimeout(()=>{

   // USTAW WARTOSC DLA WYKRESU
   //   setData(data2);
   // tutaj zrób coś po sekundzie
     
   // }, 10000)

  }, [])

  
console.log('App');
  return (
    <div className="App">
        <Pytanie />
        <Pytanie7/>
        <Pytanie8/>
        
      <WykresSlupkowy
        data={data}
        title={"Pobranie Loriini Tribes na iOS"}
      />
     
      {/* <WykresSlupkowy
        data={data2}
        title={"Pobranie Loriini Tribes na Androidzie"}
      />
      <StackedPolarBars /> */}
    </div>
  );
  
}

export default App;
