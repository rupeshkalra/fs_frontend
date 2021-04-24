import React from "react";
import "../styles.css";
import {API} from "../backend";
import Base from "./Base";
import Card from "./Card";

const Home=()=>{
    return(
        <Base title="Home" description="Welcome To The Store.">
            <div className="row">
                <div className="col-4">
                <Card/>
                </div>
                <div className="col-4">
                    <button className="btn btn-success">Button</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-success">Button</button>
                </div>
            </div>
        </Base>
    );
}

export default Home;