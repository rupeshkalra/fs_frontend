import React, { useState } from "react";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import {Link} from 'react-router-dom';

const AddCategory=()=>{

    const[name,setName]=useState('Initial value');
    const[error,setError]=useState(false);
    const[success,setSuccess]=useState(false);

    const {user,token} =isAuthenticated();

    const goback=()=>{
        return(
            <div className="mt-5">
                <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">Back to Dashboard</Link>
            </div>
        );
    }

    const myCategoryForm=()=>(
        <form>
            <div className="form-group">
                <p className="lead">Enter category</p>
                <input type="text" className="form-control my-3" autoFocus required placeholder="add category"/>
                <button className="btn btn-outline-info">Create Category</button>
            </div>
        </form>
    )

    return(
        <Base title="Create a Category here." description="Add a new Category" className="container bg-info p-4">
            <div className="row bg-white rounded">
                <div className="col-md-8 offset-md-2">
                    {myCategoryForm()}
                    {goback()}
                </div>
            </div>
        </Base>
    );
}

export default AddCategory;