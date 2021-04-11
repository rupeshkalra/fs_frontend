import React, { useState } from 'react';
import { signup } from '../auth/helper';
import Base from '../core/Base';


const Signup=()=>{
    
    const [values,setValues]=useState({
      name:"",
      email:"",
      password:"",
      error:"",
      success:false
    });

    const {name,email,password,error,success} = values

    const handleChange =(name)=>(event)=>{
      setValues({
        ...values,[name]:event.target.value,error:false
      })
    }
    const successMessage = () => {
      return (
        <div className="row">
          <div className="col-md-6 offset-sm-3 text-left">
            <div
              className="alert alert-success"
              style={{ display: success ? "" : "none" }}
            >
              New account was created successfully.
            </div>
          </div>
        </div>
      );
    };
    const errorMessage = () => {
      return (
        <div className="row">
          <div className="col-md-6 offset-sm-3 text-left">
            <div
              className="alert alert-danger"
              style={{ display: error ? "" : "none" }}
            >
              {error}
            </div>
          </div>
        </div>
      );
    };
    const onSubmit =(event)=>{
        event.preventDefault()
        setValues({...values,error:false})
        signup({name,email,password})
        .then(data=>{
          if(data.error){
            setValues({...values,error:data.error,success:false})
          }
          else{
            setValues({...values,error:"",success:true,
          name:"",
          email:"",
          password:""
          });
          }
        })
        .catch(()=>console.log("error in signup"));
    }

    const signUpForm = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <form>
                <div className="form-group">
                  <label className="text-light">Name</label>
                  <input onChange={handleChange("name")} className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label className="text-light">Email</label>
                  <input onChange={handleChange("email")} className="form-control" type="email" />
                </div>
    
                <div className="form-group">
                  <label className="text-light">Password</label>
                  <input onChange={handleChange("password")} className="form-control" type="password" />
                </div>
                <br/>
                <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
              </form>
            </div>
          </div>
        );
      };

    return (
        <Base title="SignUp Page" description="Sign Up Page here.">
            {successMessage()}
            {errorMessage()}
            {signUpForm()}
        </Base>
    )
}

export default Signup; 