import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'

export default class Discover extends Component {
    constructor(props){
        super(props);
        this.updateSearch = this.updateSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.doSearch = this.doSearch.bind(this);
        this.state = {
            search:'',
            value: 'countryname'
        };
    }

    placeHolder() {
        if(this.state.value==='countryname'){
            return "e.g: Bangladesh"
        }
        if(this.state.value==='date'){
            return "e.g: YYYY-MM-DD"
        }
        if(this.state.value==='landslide_size'){
            return "e.g: Small/Medium/Large"
        }
    }
    doSearch(e){
        e.preventDefault();
        this.setState({
            search: this.state.search
        })
        const url = `https://data.nasa.gov/resource/tfkf-kniw.json?${this.state.value}=${this.state.search}`;
        fetch(url)
        .then(response => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
          }

          // Examine the text in the response
        response.json().then(data => {
            if(data.length===0){
                console.log("No data")
            }
            this.setState({
                landslideData: data
            })
        });
        }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    }
    updateSearch(e) {
        this.setState({
            search: e.target.value
        })
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }
    componentDidMount(){

    }

    render(){
        if(this.state.landslideData){
            if(this.state.landslideData.length!==0){
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

        }
        return(
            <div className="container">
                <Header />
                <div className="row ls-details">
                    <div className="row searchBox">
                    <h2>Search for landslide:</h2>
                    <div className="col-md-3">
                        <div className="form-group">
                            <select className="form-control input-lg" id="sel1" value={this.state.value} onChange={this.handleChange}>
                                <option value="countryname">Country</option>
                                <option value="date">Date</option>
                                <option value="landslide_size">Landslide size</option>
                            </select>
                        </div>

                    </div>
                    <div className="col-md-9">
                        <div className="form-group">
                            <div className="input-group">
                                <input
                                    type="text"
                                    value={this.state.search}
                                    onChange={this.updateSearch}
                                    className="form-control input-lg"
                                    placeholder={this.placeHolder()}
                                />
                                <span className="input-group-btn">
                                    <button className="btn btn-default input-lg" type="button" onClick={this.doSearch}>Search</button>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
                    <h2>Search Result:</h2>
                    <div className="row">
                        {data}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}