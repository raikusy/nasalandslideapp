import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <header>
                <div className="row">
                    <h1 className="text-center title"><Link to="/">Landslide App</Link></h1>
                </div>
                <div className="row">
                    <ul className="list-inline menu">
                        <li>
                            <Link to="/discover">Discover</Link>
                        </li>
                        <li>
                            <Link to="/understand">Understand</Link>
                        </li>
                        <li>
                            <Link to="/contribute">Contribute</Link>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header

