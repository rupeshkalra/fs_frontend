import React, { useEffect, useState } from 'react';
import Base from '../core/Base';
import {Link} from 'react-router-dom';
import {createaProduct, getCategories} from './helper/adminapicall';
import { isAuthenticated } from '../auth/helper';

const AddProduct=()=>{

    const [values,setValues] = useState({
        name:"",
        description:"",
        price:"",
        stock:"",
        photo:"",
        categories:[],
        category:"",
        loading:false,
        error:"",
        createdProduct:"",
        getaRedirect:false,
        formData:""
    });
    const {user,token}=isAuthenticated();
    const {name,description,price,stock,error,categories,formData,category,loading,createdProduct,getaRedirect} = values;

    const preload =()=>{
      getCategories().then(data=>{
        console.log(data);
        if(data.error){
          setValues({...values,error:data.error});
        }
        else{
          setValues({...values,categories:data , formData: new FormData()})
        }
      });
    };

    useEffect(()=>{
      preload();
    },[])


    const handleChange=name => event =>{
        let value = name==="photo" ? event.target.files[0] : event.target.value;
        if(name==="category"){
          value =categories[event.target.value]._id;
        }
        formData.set(name,value);
        setValues({...values,[name]:value});
    }

    const successMessage=()=>(
      <div className="alert alert-success mt-3" style={{display:createdProduct ? "block" :"none"}}>
        <h4>{createdProduct} created successfully!</h4>
      </div>
    );

    const errorMessage=()=>(
      <div className="alert alert-danger mt-3" style={{display:error ? "block" :"none"}}>
        <h4>{error} not created!</h4>
      </div>
    );

    const onSubmit=(event)=>{
        event.preventDefault();
        setValues({...values,error:"",loading:true});
        createaProduct(user._id,token,formData).then((data)=>{
          if(data.error){
            setValues({...values,error:data.error})
          }
          else{
            setValues({...values,error:"",loading:false,photo:"",description:"",name:"",price:"",stock:"",
          createdProduct:data.name});
          }
        })
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
              {categories && categories.map((cate,index)=>(
                  <option key={cate._id} value={index}>{cate.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group mb-3">
            <input
              onChange={handleChange("stock")}
              type="number"
              className="form-control"
              placeholder="Stock"
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
                    {successMessage()}
                    {errorMessage()}
                    {createProductForm()}
                </div>
            </div>
        </Base>
    );
};

export default AddProduct;

