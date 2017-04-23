import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'

export default class Contribute extends Component {
    render(){
        return(
            <div className="container">
                <Header />
                <div className="row">
                   <div className="col-md-6 col-sm-6 col-xs-12">
                    <form method="post">
                     <div className="form-group ">
                      <label className="control-label requiredField" htmlFor="adminname1">
                       Your Name:
                       <span className="asteriskField">
                        *
                       </span>
                      </label>
                      <input className="form-control" id="adminname1" name="adminname1" placeholder="Full Name" type="text"/>
                     </div>
                     <div className="form-group ">
                      <label className="control-label requiredField" htmlFor="text1">
                       Tigger
                       <span className="asteriskField">
                        *
                       </span>
                      </label>
                      <input className="form-control" id="text1" name="text1" type="text"/>
                     </div>
                     <div className="form-group ">
                      <label className="control-label requiredField" htmlFor="text2">
                       Country Name:
                       <span className="asteriskField">
                        *
                       </span>
                      </label>
                      <input className="form-control" id="text2" name="text2" type="text"/>
                     </div>
                     <div className="form-group ">
                      <label className="control-label requiredField" htmlFor="date">
                       Date
                       <span className="asteriskField">
                        *
                       </span>
                      </label>
                      <input className="form-control" id="date" name="date" placeholder="MM/DD/YYYY" type="text"/>
                     </div>
                     <div className="form-group ">
                      <label className="control-label " htmlFor="text3">
                       Hazard Type:
                      </label>
                      <input className="form-control" id="text3" name="text3" type="text"/>
                     </div>
                     <div className="form-group ">
                      <label className="control-label " htmlFor="number">
                       Injury
                      </label>
                      <input className="form-control" id="number" name="number" type="text"/>
                     </div>
                     <div className="form-group ">
                      <label className="control-label " htmlFor="select">
                       Landslide Size:
                      </label>
                      <select className="select form-control" id="select" name="select">
                       <option value="Large">
                        Large
                       </option>
                       <option value="Medium">
                        Medium
                       </option>
                       <option value="Small">
                        Small
                       </option>
                      </select>
                     </div>
                     <div className="form-group ">
                      <label className="control-label " htmlFor="select1">
                       Landslide Type:
                      </label>
                      <select className="select form-control" id="select1" name="select1">
                       <option value="Mudslide">
                        Mudslide
                       </option>
                       <option value="Landslide">
                        Landslide
                       </option>
                       <option value="Rockfall">
                        Rockfall
                       </option>
                       <option value="Other">
                        Other
                       </option>
                       <option value="Complex">
                        Complex
                       </option>
                      </select>
                     </div>
                     <div className="form-group ">
                      <label className="control-label " htmlFor="text4">
                       Near:
                      </label>
                      <input className="form-control" id="text4" name="text4" type="text"/>
                     </div>
                     <div className="form-group ">
                      <label className="control-label " htmlFor="text5">
                       Nearest Place:
                      </label>
                      <input className="form-control" id="text5" name="text5" type="text"/>
                     </div>
                     <div className="form-group ">
                      <label className="control-label " htmlFor="number1">
                       Population
                      </label>
                      <input className="form-control" id="number1" name="number1" type="text"/>
                     </div>
                     <div className="form-group ">
                      <label className="control-label " htmlFor="text6">
                       Source URL:
                      </label>
                      <input className="form-control" id="text6" name="text6" type="text"/>
                     </div>
                     <div className="form-group ">
                      <label className="control-label " htmlFor="text7">
                       Source Name:
                      </label>
                      <input className="form-control" id="text7" name="text7" type="text"/>
                     </div>
                     <div className="form-group ">
                      <label className="control-label " htmlFor="text8">
                       Storm Name:
                      </label>
                      <input className="form-control" id="text8" name="text8" type="text"/>
                     </div>
                     <div className="form-group ">
                      <label className="control-label " htmlFor="select2">
                       Trigger:
                      </label>
                      <select className="select form-control" id="select2" name="select2">
                       <option value="Downpour">
                        Downpour
                       </option>
                       <option value="Rainfall">
                        Rainfall
                       </option>
                       <option value="Earthquake">
                        Earthquake
                       </option>
                       <option value="Volcano">
                        Volcano
                       </option>
                       <option value="Typical Cyclon">
                        Typical Cyclon
                       </option>
                       <option value="Unknown">
                        Unknown
                       </option>
                      </select>
                     </div>
                     <div className="form-group ">
                      <label className="control-label " for="text9">
                       Time:
                      </label>
                      <input className="form-control" id="text9" name="text9" type="text"/>
                     </div>
                     <div className="form-group">
                      <div>
                       <button className="btn btn-primary " name="submit" type="submit">
                        Submit
                       </button>
                      </div>
                     </div>
                    </form>
                   </div>
                  </div>

                <Footer />
            </div>
        )
    }
}