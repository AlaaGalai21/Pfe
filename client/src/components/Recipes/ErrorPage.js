import React, {Component} from 'react';
import { Link } from "react-router-dom"
import BaseLayout from '../BaseLayout';

class ErrorPage extends Component {
    render() {
        return (
            <div>
                <BaseLayout />
                Please Login or Register!
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/loginprivilege" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
            </ul>
            </div>
            
            
        );
    }
}

export default ErrorPage ;
