class Landslide extends Component{
    render(){
        const {data} = this.props;
        const dataList = data.map(landslide => {
            return(
                <div className="alert alert-success col-md-4">
                <ul>
                    <li>Country: {landslide.countryname}</li>
                    <li>Near: {landslide.near}</li>
                    <li>Landslide size: {landslide.landslide_size}</li>
                    <li>Population: {landslide.population}</li>
                    <li>Trigger: {landslide.trigger}</li>
                    <button type="button" class="btn btn-default">Details..</button>
                </ul>
                </div>
            )
        })
        return(
            <div className="container">
                <div className="row">
                    <h2>Landslide Details:</h2>
                    {dataList}
                </div>
            </div>
        )
    }
}