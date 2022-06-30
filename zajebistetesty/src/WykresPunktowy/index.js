
import { VictoryChart, VictoryTheme, VictoryScatter, VictoryTooltip, VictoryBar,VictoryAxis  } from "victory"
import background from './wykrestlo.png'
function WykresPunktowy(props) {

    return (
        <div className="App" style={{...props.style, backgroundImage: `url("${background}")`}} >
        <VictoryChart
        
            domain={{ x: [-800, 800], y: [-800, 800] }}
            width="500"
            height={500}
        >
             <VictoryAxis crossAxis
    width={400}
    height={400}
    theme={VictoryTheme.material}
    standalone={false}
    tickFormat={[]}
  />
  <VictoryAxis dependentAxis crossAxis
    width={400}
    height={400}
    theme={VictoryTheme.material}
    standalone={false}
    tickFormat={[]}
  />
            <VictoryScatter
                style={
                    { 
                        data: 
                        { 
                            fill: "#000"
                        },
                        grid: 
                        { 
                            stroke: "none" 
                        } 
                    }
                } 
                size={3}
                data={props.coordinates}
                labels={({ datum }) => datum.id}
                labelComponent={<VictoryTooltip/>}

            />
        </VictoryChart>
        </div>
    );
}

export default WykresPunktowy;
