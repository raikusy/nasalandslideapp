import React, { Component } from 'react';

class Landslide extends Component{
    constructor(props){
        super(props);
        this.updateSearch = this.updateSearch.bind(this);
        this.state = {
            search:''
        };
    }

    updateSearch(e) {
        this.setState({
            search: e.target.value
        })
        const url = `https://data.nasa.gov/resource/tfkf-kniw.json?countryname=${e.target.value}`;
        fetch(url)
            .then(d => d.json())
            .then(d =>{
                this.setState({
                    landslideData: d,
                })
            })
    }

    componentDidMount(){
        const url = `https://data.nasa.gov/resource/tfkf-kniw.json?countryname=${this.state.search}`;
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
            var data = this.state.landslideData.map(data => {
                return(
                    <div key={data.id} className="alert alert-success col-md-4">
                        <ul className="landslide-list">
                            <li>Country: {data.countryname}</li>
                            <li>Near: {data.near}</li>
                            <li>Landslide size: {data.landslide_size}</li>
                            <li>Population: {data.population}</li>
                            <li>Trigger: {data.trigger}</li>
                        </ul>
                        <button type="button" className="btn btn-success pull-right">Details..</button>
                    </div>
                )
            });
        }
        if(!this.state.landslideData) {
            return(
                <div className="alert alert-success col-md-4">
                    <h1>Loading...</h1>
                </div>
            )
        }
        return(
            <div className="container">
                <div className="row ls-details">
                    <h2>Landslide Details:</h2>
                    <div className="row">
                        <input
                            type="text"
                            value={this.state.search}
                            onChange={this.updateSearch}
                            className="form-control input-lg"

                        />
                    </div>

                    <div className="row">
                        {data}
                    </div>

                </div>
            </div>
        )
    }
}
export default Landslide

