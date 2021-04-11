import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import {signout,isAuthenticated} from '../auth/helper';

const currentTab=(history,path)=>{
    if(history.location.pathname === path){
        return {color:"#2ecc72"}
    }
    else{
        return {color:"#FFFFFF"}
    }
}

const Menu=(history)=>(
    <div>
        <ul className="nav nav-tabs bg-dark">
            <li className="nav-item">
                <Link style={currentTab(history,"/")} className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history,"/dashboard")} className="nav-link" to="/dashboard">DashBoard</Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history,"/cart")} className="nav-link" to="/cart">Cart</Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history,"/admin/dashboard")} className="nav-link" to="/admin/dashboard">Admin Dash</Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history,"/signup")} className="nav-link" to="/signup">SignUp</Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history,"/signin")} className="nav-link" to="/signin">SignIn</Link>
            </li>
            {isAuthenticated() &&
            (<li className="nav-item">
            <span onClick={()=>{
                signout(()=>{
                    history.push("/");
                })
            }} className="nav-link text-warning">SignOut</span>
            </li>)} 
        </ul>
    </div>
)

export default withRouter(Menu);