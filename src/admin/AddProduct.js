import React, { useState } from 'react';
import Base from '../core/Base';
import {Link} from 'react-router-dom';

const AddProduct=()=>{

    const [values,setValues] = useState({
        name:"",
        description:"",
        price:"",
        stock:""
    });

    const {name,description,price,stock} = values;


    const handleChange=name => event =>{

    }
    const onSubmit=()=>{

    }

    const createProductForm = () => (
        <form >
          <span>Post photo</span>
          <div className="form-group mb-3">
            <label className="btn btn-block btn-success">
              <input
                onChange={handleChange("photo")}
                type="file"
                name="photo"
                accept="image"
                placeholder="choose a file"
              />
            </label>
          </div>
          <div className="form-group mb-3">
            <input
              onChange={handleChange("name")}
              name="photo"
              className="form-control"
              placeholder="Name"
              value={name}
            />
          </div>
          <div className="form-group mb-3">
            <textarea
              onChange={handleChange("description")}
              name="photo"
              className="form-control"
              placeholder="Description"
              value={description}
            />
          </div>
          <div className="form-group mb-3">
            <input
              onChange={handleChange("price")}
              type="number"
              className="form-control"
              placeholder="Price"
              value={price}
            />
          </div>
          <div className="form-group mb-3">
            <select
              onChange={handleChange("category")}
              className="form-control"
              placeholder="Category"
            >
              <option>Select</option>
              <option value="a">a</option>
              <option value="b">b</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <input
              onChange={handleChange("quantity")}
              type="number"
              className="form-control"
              placeholder="Quantity"
              value={stock}
            />
          </div>
          
          <button type="submit" onClick={onSubmit} className="btn btn-outline-success mb-3">
            Create Product
          </button>
        </form>
      );

    const goBack = () => (
        <Link className="btn btn-md btn-success mb-3" to="/admin/dashboard">
            Admin Home
        </Link>
    );


    return (
        <Base title="Add a new product here." description="create new product." className="container bg-info p-4">
            {goBack()}
            <div className="row bg-dark text-white rounded">
                <div className="col-md-8 offset-md-2">
                    {createProductForm()}
                </div>
            </div>
        </Base>
    );
};

export default AddProduct;

