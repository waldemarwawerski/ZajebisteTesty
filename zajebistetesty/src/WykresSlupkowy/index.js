
import '../App.css';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLabel } from "victory"

function WykresSlupkowy(props) {

  // " <--- Ciapki
  // < <--- dziubek
  return (
    <div className="App" style={{...props.style}}>
      
      <VictoryChart
      // motywy
      // {VictoryTheme.material} lub {VictoryTheme.grayscale}
         theme={VictoryTheme.material}
        domainPadding={30}

        //Pamietac aby nie przesadzić z proporcjami

        // szerokosc 
        width={400}

        // wysokosc
        height={300}
      >
        <VictoryBar
          // ustawienie względem lini siatki gdzie powinien pojawić się słupek
          // 'middle', 'start', 'end
          alignment='middle'

          // Grubość słupka
          // 1 - 0.1
          barRatio={1}

          // Gubość słupka w px
          // 1 - 10
          barWidth={10}

          // przekazujemy dane z kategoriami
          categories={{
            x: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
          }}
          
          // zaaokrąglenie słupka wykresu
          // 0 - 5, { top: 5, bottom: 2, topLeft, topRight, bottomLeft, bottomRight }
          cornerRadius={{ topRight: 5, bottomLeft: 5 }}
          
          // dane przekazywane do wykresu
          data={props.data}

          // pozycja wykresu poziomo lub pionowo
          // {false} {true}
          horizontal={false}
          
          // etykiety
          //{({ datum }) => `${datum.download}`}
          labels={({ datum }) => `${datum.download}`}
          
          style={
            {
              data: {
                // kolor słupka
                fill: "gray", 

                // przezroczystość dla słupka
                fillOpacity: 1,
                
                // kolor obramowania
                stroke: "#c43a31",

                // grubośc obramowania 
                strokeWidth: 0,
              },
              labels: {
                fontSize: 7,
                fill: "black"
              },
            }
          }
         
          x="day"
          y="download"
          
        >
        </VictoryBar>
      </VictoryChart>
    </div>
  );
}

export default WykresSlupkowy;
