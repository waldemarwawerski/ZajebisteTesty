
import { VictoryPie } from "victory"

function WykresKołowyKolor(props) {
    // console.log('zzz',props);
  return (
    <VictoryPie
    
        data={[
            {x: "czerwony", y: props.result.R},
            {x: "żółty", y: props.result.Y},
            {x: "zielony", y: props.result.G},
            {x: "niebieski", y: props.result.B},
        ]}

        labels={({ datum }) => `${Math.round((datum.y/(props.result.R+props.result.Y+props.result.G+props.result.B))*100,2)}%`}

        animate={{
            duration: 2000
        }}

        colorScale={
            [
                props.colorsBackground.RED, 
                props.colorsBackground.YELLOW,
                props.colorsBackground.GREEN, 
                props.colorsBackground.BLUE,
            ]
        }
    />
  );
}

export default WykresKołowyKolor;
