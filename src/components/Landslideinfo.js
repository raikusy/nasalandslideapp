import React, { Component } from 'react';

class Landslideinfo extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        const url = "https://data.nasa.gov/resource/tfkf-kniw.json";
        fetch(url)
            .then(d => d.json())
            .then(d =>{
                this.setState({
                    landslideData: d,
                })
            })
    }

    render(){
        if(this.state.landslideData){
            var data = this.state.landslideData[0]
            return(
                <div className="container">
                    <div className="row ls-details">
                        <h2>Landslide Details:</h2>
                        <div key={data.id} className="col-md-12">
                            <ul className="landslide-list">
                                <li>Country: {data.countryname}</li>
                                <li>Near: {data.near}</li>
                                <li>Landslide size: {data.landslide_size}</li>
                                <li>Population: {data.population}</li>
                                <li>Trigger: {data.trigger}</li>
                            </ul>
                        </div>
                    </div>
                </div>

            )
        }
        return(
            <h1>Loading...</h1>
        )
    }
}
export default Landslideinfo