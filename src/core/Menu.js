import React from 'react';
import {Link,withRouter} from 'react-router-dom';

const Menu=()=>(
    <div>
        <ul className="nav nav-tabs bg-dark">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">DashBoard</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">Cart</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">Admin Dash</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">SignUp</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">SignIn</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">SignOut</Link>
            </li>  
        </ul>
    </div>
)

export default withRouter(Menu);