import React from "react";
import "../styles.css";
import {API} from "../backend";
import Base from "./Base";

const Home=()=>{
    console.log("API is ",API);
    return(
        <Base title="Home" description="Welcome To The Store.">
            <div className="row">
                <div className="col-4">
                    <button className="btn btn-success">Button</button>
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