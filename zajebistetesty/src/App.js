import logo from './logo.svg';
import './App.css';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLabel } from "victory"
import WykresSlupkowy from './WykresSlupkowy';
import StackedPolarBars from './StackedPolarBars';
import data1 from './dane/data1';
import data2 from './dane/data2';

function App() {
  return (
    <div className="App">
      <WykresSlupkowy
        data={data1}
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
