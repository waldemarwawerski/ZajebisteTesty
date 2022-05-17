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
import { useEffect, useState } from 'react';

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
  const [data, setData] = useState([]);
  const [dataP2, setDataP2] = useState([]);
  const [dataP3, setDataP3] = useState([]);
  const [dataP4, setDataP4] = useState([]);
  const [dataP5, setDataP5] = useState([]);
  const [dataP6, setDataP6] = useState([]);
  const [dataP7, setDataP7] = useState([]);
  const [dataP8, setDataP8] = useState([]);
  const [dataP9, setDataP9] = useState([]);
  const [dataP10, setDataP10] = useState([]);
  const [dataP11, setDataP11] = useState([]);
  const [dataP12, setDataP12] = useState([]);
  const [dataP13, setDataP13] = useState([]);
  const [dataP14, setDataP14] = useState([]);
  const [dataP15, setDataP15] = useState([]);
  const [dataP16, setDataP16] = useState([]);
  const [dataP17, setDataP17] = useState([]);
  const [dataP18, setDataP18] = useState([]);
  const [dataP19, setDataP19] = useState([]);
  const [dataP20, setDataP20] = useState([]);
  const [dataP21, setDataP21] = useState([]);
  const [dataP22, setDataP22] = useState([]);
  const [dataP23, setDataP23] = useState([]);
  const [dataP24, setDataP24] = useState([]);
  const [dataP25, setDataP25] = useState([]);

  // 3 razy program nam to uruchamia, a chcemy tylko raz

  //KIEDY APLIKACJA SIE URUCHOIMI
  useEffect(() => {
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


  // <Pytanie props1={"pierwszy parametr naszego komponentu"} props2={"drugi parametr naszego komponentu"}>children</Pytanie>
  return (
    <div className="App">

      { 
      // Tu sie zaczyna pytanie 1 
      }
      <Pytanie
        scala={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        color='pink'
        zapiszDane={
          (wartosc) => {
            setData([
              ...data, 
              { 
                day: wartosc, 
                download: 1
              }
            ])
          }
        }>
        1.Członkowie zespołu ufają sobie wzajemnie.
      </Pytanie>
      <WykresSlupkowy
        data={data}
        //title={"Pobranie Loriini Tribes na iOS"}
      />
      { 
      // Tu sie kończy pytanie 1 
      }

      <Pytanie
        scala={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        color='green'
        zapiszDane={
          (wartosc) => {
            setDataP2([
              ...dataP2, 
              { 
                day: wartosc, 
                download: 1
              }
            ])
          }
        }>
        2.Wszyscy otwarcie dyskutują na temat własnych słabości, błędów i obaw.
      </Pytanie>
      <WykresSlupkowy
        data={dataP2}
        //title={"Pobranie Loriini Tribes na iOS"}
      />
      
      <Pytanie
        scala={[1, 2, 3, 4, 5, 6, 7]}
        color='green'
        zapiszDane={
          (wartosc) => {
            setDataP3([
              ...dataP3, 
              { 
                day: wartosc, 
                download: 1
              }
            ])
          }
        }>
        3.Są otwarci wobec innych.</Pytanie>
         <WykresSlupkowy
        data={dataP3}
        //title={"Pobranie Loriini Tribes na iOS"}
      />
       <Pytanie
        scala={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        color='green'
        zapiszDane={
          (wartosc) => {
            setDataP4([
              ...dataP4, 
              { 
                day: wartosc, 
                download: 1
              }
            ])
          }
        }>
        4.Nie ukrywają swoich prawdziwych myśli i odczuć.
      </Pytanie>
      <WykresSlupkowy
        data={dataP4}
        //title={"Pobranie Loriini Tribes na iOS"}
      />
      <Pytanie
        scala={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        color='green'
        zapiszDane={
          (wartosc) => {
            setDataP5([
              ...dataP5, 
              { 
                day: wartosc, 
                download: 1
              }
            ])
          }
        }>
        5.Są gotowi sporo zaryzykować próbując nowych rozwiązań.
      </Pytanie>
      <WykresSlupkowy
        data={dataP5}
        //title={"Pobranie Loriini Tribes na iOS"}
      />
      <Pytanie
        scala={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        color='green'
        zapiszDane={
          (wartosc) => {
            setDataP6([
              ...dataP6, 
              { 
                day: wartosc, 
                download: 1
              }
            ])
          }
        }>
        6.Członkowie zespołu nie boją się prowadzić gorących sporów na temat rozwiązań w firmie.

      </Pytanie>
      <WykresSlupkowy
        data={dataP6}
        //title={"Pobranie Loriini Tribes na iOS"}
      />
      <Pytanie
        scala={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        color='green'
        zapiszDane={
          (wartosc) => {
            setDataP7([
              ...dataP7, 
              { 
                day: wartosc, 
                download: 1
              }
            ])
          }
        }>
        7.Potrafią się otwarcie nie zgadzać, kiedy mają inne zdanie.

      </Pytanie>
      <WykresSlupkowy
        data={dataP7}
        //title={"Pobranie Loriini Tribes na iOS"}
      />
      <Pytanie
        scala={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        color='green'
        zapiszDane={
          (wartosc) => {
            setDataP8([
              ...dataP8, 
              { 
                day: wartosc, 
                download: 1
              }
            ])
          }
        }>
        8.Otwarcie poddają w wątpliwość cudzy punkt widzenia aby szukać najlepszych rozwiązań.
      </Pytanie>
      <WykresSlupkowy
        data={dataP8}
        //title={"Pobranie Loriini Tribes na iOS"}
      />
      <Pytanie
        scala={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        color='green'
        zapiszDane={
          (wartosc) => {
            setDataP9([
              ...dataP9, 
              { 
                day: wartosc, 
                download: 1
              }
            ])
          }
        }>
        9.W celu poszukiwania najlepszych rozwiązań są gotowi zaryzykować własny komfort psychiczny.
      </Pytanie>
      <WykresSlupkowy
        data={dataP9}
        //title={"Pobranie Loriini Tribes na iOS"}
      />
      <Pytanie
        scala={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        color='green'
        zapiszDane={
          (wartosc) => {
            setDataP10([
              ...dataP10, 
              { 
                day: wartosc, 
                download: 1
              }
            ])
          }
        }>
        10.Nie chowają głowy w piasek.
      </Pytanie>
      <WykresSlupkowy
        data={dataP10}
        //title={"Pobranie Loriini Tribes na iOS"}
      />
      <Pytanie
        scala={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        color='green'
        zapiszDane={
          (wartosc) => {
            setDataP11([
              ...dataP11, 
              { 
                day: wartosc, 
                download: 1
              }
            ])
          }
        }>
        11.W sytuacji konfliktu dążą do konsensusu i w końcu go osiągają.
      </Pytanie>
      <WykresSlupkowy
        data={dataP11}
        //title={"Pobranie Loriini Tribes na iOS"}
      />
      <Pytanie
        scala={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        color='green'
        zapiszDane={
          (wartosc) => {
            setDataP12([
              ...dataP12, 
              { 
                day: wartosc, 
                download: 1
              }
            ])
          }
        }>
        12.Nie zrażają się łatwo różnicą zdań.
      </Pytanie>
      <WykresSlupkowy
        data={dataP12}
        //title={"Pobranie Loriini Tribes na iOS"}
      />
      <Pytanie
        scala={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        color='green'
        zapiszDane={
          (wartosc) => {
            setDataP13([
              ...dataP13, 
              { 
                day: wartosc, 
                download: 1
              }
            ])
          }
        }>
        13.Każdy chce wspierać zespół swoimi pomysłami i doświadczeniem.
      </Pytanie>
      <WykresSlupkowy
        data={dataP13}
        //title={"Pobranie Loriini Tribes na iOS"}
      />
      <Pytanie
        scala={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        color='green'
        zapiszDane={
          (wartosc) => {
            setDataP14([
              ...dataP14, 
              { 
                day: wartosc, 
                download: 1
              }
            ])
          }
        }>
        14.Żadne problemy nie są zamiatane pod dywan.
      </Pytanie>
      <WykresSlupkowy
        data={dataP14}
        //title={"Pobranie Loriini Tribes na iOS"}
      />
      <Pytanie
        scala={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        color='green'
        zapiszDane={
          (wartosc) => {
            setDataP15([
              ...dataP15, 
              { 
                day: wartosc, 
                download: 1
              }
            ])
          }
        }>
        15.Wszystkie wątpliwości, idee, i pomysły mogą być i są przedstawiane na forum.
      </Pytanie>
      <WykresSlupkowy
        data={dataP15}
        //title={"Pobranie Loriini Tribes na iOS"}
      />
      <Pytanie
        scala={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        color='green'
        zapiszDane={
          (wartosc) => {
            setDataP16([
              ...dataP16, 
              { 
                day: wartosc, 
                download: 1
              }
            ])
          }
        }>
        16.Każdy w zespole dotrzymuje przyjętych ustaleń.
      </Pytanie>
      <WykresSlupkowy
        data={dataP16}
        //title={"Pobranie Loriini Tribes na iOS"}
      />
      <Pytanie
        scala={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        color='green'
        zapiszDane={
          (wartosc) => {
            setDataP17([
              ...dataP17, 
              { 
                day: wartosc, 
                download: 1
              }
            ])
          }
        }>
        17.Członkowie zespołu przestrzegają ustalonych standardów.
      </Pytanie>
      <WykresSlupkowy
        data={dataP17}
        //title={"Pobranie Loriini Tribes na iOS"}
      />
      <Pytanie
        scala={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        color='green'
        zapiszDane={
          (wartosc) => {
            setDataP18([
              ...dataP18, 
              { 
                day: wartosc, 
                download: 1
              }
            ])
          }
        }>
        18.Wszyscy uznają je za swoje własne zasady.
      </Pytanie>
      <WykresSlupkowy
        data={dataP18}
        //title={"Pobranie Loriini Tribes na iOS"}
      />
      <Pytanie
        scala={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        color='green'
        zapiszDane={
          (wartosc) => {
            setDataP19([
              ...dataP19, 
              { 
                day: wartosc, 
                download: 1
              }
            ])
          }
        }>
        19.Uważają, że nie tylko lider jest odpowiedzialny za wyniki, ale cały zespół.
      </Pytanie>
      <WykresSlupkowy
        data={dataP19}
        //title={"Pobranie Loriini Tribes na iOS"}
      />
      <Pytanie
        scala={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        color='green'
        zapiszDane={
          (wartosc) => {
            setDataP20([
              ...dataP20, 
              { 
                day: wartosc, 
                download: 1
              }
            ])
          }
        }>
        20.Chętnie przyjmują prośby o pomoc i zastępstwo bo wiedzą, że mogą liczyć na pełną wzajemność.
      </Pytanie>
      <WykresSlupkowy
        data={dataP20}
        //title={"Pobranie Loriini Tribes na iOS"}
      />
      <Pytanie
        scala={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        color='green'
        zapiszDane={
          (wartosc) => {
            setDataP21([
              ...dataP21, 
              { 
                day: wartosc, 
                download: 1
              }
            ])
          }
        }>
        21.Członkowie zespołu nie unikają przyjmowania odpowiedzialności.
      </Pytanie>
      <WykresSlupkowy
        data={dataP21}
        //title={"Pobranie Loriini Tribes na iOS"}
      />
      <Pytanie
        scala={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        color='green'
        zapiszDane={
          (wartosc) => {
            setDataP22([
              ...dataP22, 
              { 
                day: wartosc, 
                download: 1
              }
            ])
          }
        }>
        22.Chętnie podejmują decyzje i tego samego oczekują od innych.
      </Pytanie>
      <WykresSlupkowy
        data={dataP22}
        //title={"Pobranie Loriini Tribes na iOS"}
      />
      <Pytanie
        scala={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        color='green'
        zapiszDane={
          (wartosc) => {
            setDataP23([
              ...dataP23, 
              { 
                day: wartosc, 
                download: 1
              }
            ])
          }
        }>
        23.Są gotowi poświęcić własne korzyści dla dobra zespołu.
      </Pytanie>
      <WykresSlupkowy
        data={dataP23}
        //title={"Pobranie Loriini Tribes na iOS"}
      />
      <Pytanie
        scala={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        color='green'
        zapiszDane={
          (wartosc) => {
            setDataP24([
              ...dataP24, 
              { 
                day: wartosc, 
                download: 1
              }
            ])
          }
        }>
        24.Nie wysuwają na plan pierwszy interesów własnego działu.
      </Pytanie>
      <WykresSlupkowy
        data={dataP24}
        //title={"Pobranie Loriini Tribes na iOS"}
      />
      <Pytanie
        scala={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        color='green'
        zapiszDane={
          (wartosc) => {
            setDataP25([
              ...dataP25, 
              { 
                day: wartosc, 
                download: 1
              }
            ])
          }
        }>
        25.Własne ego, osobisty rozwój i kariera nie są dla nich ważniejsze od sukcesu całego zespołu.
      </Pytanie>
      <WykresSlupkowy
        data={dataP25}
        //title={"Pobranie Loriini Tribes na iOS"}
      />


    </div>
  );

}

export default App;
