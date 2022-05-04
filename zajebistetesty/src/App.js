import logo from './logo.svg';
import './App.css';
import {VictoryBar, VictoryChart, VictoryTheme, VictoryLabel} from "victory"
import WykresSlupkowy from './WykresSlupkowy';
import StackedPolarBars from './StackedPolarBars';
function App() {
  const data = [
    {day: 15, download: 5},
    {day: 16, download: 38},
    {day: 17, download: 31},
    {day: 18, download: 5},
    {day: 19, download: 7},
    {day: 20, download: 4},
    {day: 21, download: 4},
    {day: 22, download: 3},
    {day: 23, download: 1},
    {day: 24, download: 1},
    {day: 25, download: 0},
    {day: 26, download: 2},
    {day: 27, download: 5},
    {day: 28, download: 2},
    {day: 29, download: 0},
    {day: 30, download: 0},
  ];
  const data2 = [
    {day: 15, download: 50},
    {day: 16, download: 380},
    {day: 17, download: 150},
    {day: 18, download: 50},
    {day: 19, download: 70},
    {day: 20, download: 4},
    {day: 21, download: 4},
    {day: 22, download: 3},
    {day: 23, download: 1},
    {day: 24, download: 1},
    {day: 25, download: 0},
    {day: 26, download: 2},
    {day: 27, download: 5},
    {day: 28, download: 2},
    {day: 29, download: 0},
    {day: 30, download: 0},
  ];
  return (
    <div className="App">
     <WykresSlupkowy
      data={data}
      title={"Pobranie Loriini Tribes na iOS"}
      />
     <WykresSlupkowy
      data={data2}
      title={"Pobranie Loriini Tribes na Androidzie"}
      />
      <StackedPolarBars />
    </div>
  );
}

export default App;
