
import { VictoryChart, VictoryTheme, VictoryScatter, VictoryTooltip } from "victory"

function WykresPunktowy(props) {

    return (
        <div className="App" style={{...props.style}}>
        <VictoryChart
            theme={VictoryTheme.material}
            domain={{ x: [-800, 800], y: [-800, 800] }}
            width="500"
            height={500}
        >
            <VictoryScatter
                style={{ data: { fill: "#c43a31" } }}
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
