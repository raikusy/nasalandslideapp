import React, {Component} from 'react'

export default class Search extends Component{
    constructor(props){
        super(props);
        this.updateSearch = this.updateSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
    updateSearch(e) {
        this.setState({
            search: e.target.value
        })
        const url = `https://data.nasa.gov/resource/tfkf-kniw.json?${this.state.value}=${e.target.value}`;
        fetch(url)
        .then(response => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
          }

          // Examine the text in the response
        response.json().then(data => {
            if(data.length==0){
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
        /*
        const url = `https://data.nasa.gov/resource/tfkf-kniw.json?${this.state.value}=${e.target.value}`;
        fetch(url)
            .then(d => d.json())
            .then(d =>{
                this.setState({
                    landslideData: d,
                })
                console.log
            })
        */
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }
    render(){
        return(
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
                            <input
                                type="text"
                                value={this.state.search}
                                onChange={this.updateSearch}
                                className="form-control input-lg"
                                placeholder="e.g: Bangladesh"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}