import React from "react";
import "../styles.css";
import {API} from "../backend";

const Home=()=>{
    console.log("API is ",API);
    return(
        <div>
            <h1 className="text-white">It's Home</h1>
        </div>
    );
}

export default Home