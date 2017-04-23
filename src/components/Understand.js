import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory'


const data = [
  {quarter: 1, injures: 13000},
  {quarter: 2, injures: 16500},
  {quarter: 3, injures: 14250},
  {quarter: 4, injures: 19000}
];
const data2 = [
  {quarter: 1, injures: 11000},
  {quarter: 2, injures: 12500},
  {quarter: 3, injures: 19250},
  {quarter: 4, injures: 14000}
];
export default class Understand extends Component {
    render(){
        return (
            <div className="container">
            <Header />
            <div className="row">
            <h2>Injures Per Year:</h2>
                <div className="col-md-6 col-md-offset-3">
                    <VictoryChart
                    // adding the material theme provided with Victory
                    theme={VictoryTheme.material}
                    domainPadding={20}
                    >
                    <VictoryAxis
                      tickValues={[1, 2, 3, 4]}
                      tickFormat={["2002", "2005", "2007", "2010"]}
                    />
                    <VictoryAxis
                      dependentAxis
                      tickFormat={["100", "200", "300", "500+"]}
                    />
                    <VictoryBar
                      data={data}
                      x="quarter"
                      y="injures"
                    />
                    </VictoryChart>
                </div>
            </div>
            <div className="row">
            <h2>Injures Per Country:</h2>
                <div className="col-md-6 col-md-offset-3">
                    <VictoryChart
                    // adding the material theme provided with Victory
                    theme={VictoryTheme.material}
                    domainPadding={20}
                    >
                    <VictoryAxis
                      tickValues={[1, 2, 3, 4]}
                      tickFormat={["Bangladesh", "India", "United States", "Nepal"]}
                    />
                    <VictoryAxis
                      dependentAxis
                      tickFormat={["100", "200", "300", "500+"]}
                    />
                    <VictoryBar
                      data={data2}
                      x="quarter"
                      y="injures"
                    />
                    </VictoryChart>
                </div>
            </div>
            <Footer />
            </div>
        )
    }
}