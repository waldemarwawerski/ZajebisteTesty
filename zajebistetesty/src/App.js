import logo from './logo.svg';
import './App.css';
import {VictoryBar, VictoryChart, VictoryTheme, VictoryLabel} from "victory"
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
  return (
    <div className="App">
      <h1>Zajebiste Wyniki</h1>
      <h2>Pobrania Loriini Tribes na iOS</h2>
      <VictoryChart
  theme={VictoryTheme.material}
  domainPadding={10}
>
    <VictoryBar 
    style={
      {
         data: {
            fill: "#1378c6" 
          },
          labels: {
            fill: "#75c63c" 
          },
        }
      }
     data={data} 
     x="day" 
     y="download"
     categories={{
       x: [15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
     }}
     labels={({ datum }) => datum.download}
     labelComponent={<VictoryLabel dy={-5}/>}
     >
     </VictoryBar>
     </VictoryChart>
    </div>
  );
}

export default App;
