
import '../App.css';
import {VictoryBar, VictoryChart, VictoryTheme, VictoryLabel} from "victory"
function WykresSlupkowy(props) {
 
  return (
    <div className="App">
      <h1>Zajebiste Wyniki</h1>
      <h2>{props.title}</h2>
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
     data={props.data} 
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

export default WykresSlupkowy;
