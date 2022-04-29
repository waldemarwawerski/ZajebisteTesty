import logo from './logo.svg';
import './App.css';
import {VictoryBar} from "victory"
function App() {
  const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 24250},
    {quarter: 4, earnings: 19000}
  ];
  return (
    <div className="App">
      <h1>Zajebiste Testy</h1>
      <h2>Wykres z wynikami</h2>
<VictoryBar data={data} x="quarter" y="earnings"></VictoryBar>
    </div>
  );
}

export default App;
