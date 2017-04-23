import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'

export default class Home extends Component {
    render(){
        return(
            <div className="container">
                <Header />
                <h2>What is Landslide</h2>
                <div className="panel panel-default">
                  <div className="panel-body">
                    A landslide is mass wasting that includes a wide range of ground movements, such as rock falls, deep failure of slopes, and shallow debris flows. Landslides can occur underwater, called a submarine landslide, coastal and onshore environments. Although the action of gravity is the primary driving force for a landslide to occur, there are other contributing factors affecting the original slope stability.

                  </div>
                </div>

                <h2>Why it happenes</h2>
                <h3>Naturally</h3>
                <ul>
                    <li>groundwater</li>
                    <li>soil structure (e.g. after a wildfire – a fire in forests lasting for 3–4 days)</li>
                    <li>erosion of rivers or ocean waves</li>
                    <li>snow melting, glaciers melting, or heavy rain</li>
                    <li>earthquakes</li>
                    <li>Volcanic eruptions</li>
                </ul>
                <h3>Aggravated by human activities</h3>
                <ul>
                    <li>deforestation, cultivation and construction,</li>
                    <li>vibrations from machinery or traffic</li>
                    <li>blasting</li>
                    <li>construction</li>
                </ul>
                <Footer />
            </div>
        )
    }
}