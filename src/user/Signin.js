import React,{useState} from 'react';
import { authenticate, isAuthenticated ,signin} from '../auth/helper';
import Base from '../core/Base';
import {Link,Redirect} from 'react-router-dom';

const Signin=()=>{

    const [values,setValues]=useState({
      email:"",
      password:"",
      error:"",
      didRedirect:false,
      loading:false
    });

    const {email,password,error,didRedirect,loading} = values
    
    const {user} =isAuthenticated();

    const performRedirect=()=>{
        if(didRedirect){
          if(user && user.role===1){
            return <p>redirect to admin</p>
          }
          else{
            return <p>redirect to user dashboard</p>
          }
        }
        if(isAuthenticated()){
          return <p>redirect to home</p>;
        }
    }

    const handleChange =(name)=>(event)=>{
      setValues({
        ...values,[name]:event.target.value,error:false
      })
    }

    const loadingMessage = () => {
      return (
        loading && (
        <div className="alert alert-info">
          Loading...
        </div>
        )
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
        event.preventDefault();
        setValues({...values,error:false,loading:true})
        signin({email,password})
        .then(data=>{
          if(data.error){
            setValues({...values,error:data.error,loading:false})
          }
          else{
            authenticate(data,()=>{
              setValues({
                ...values,didRedirect:true
              })
            });
          }
        })
        .catch(()=>console.log("error in signin"));
    }

    const signInForm = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <form>
                <div className="form-group">
                  <label className="text-light">Email</label>
                  <input className="form-control" value={email} onChange={handleChange("email")} type="email" />
                </div>
    
                <div className="form-group">
                  <label className="text-light">Password</label>
                  <input className="form-control" value={password} onChange={handleChange("password")} type="password" />
                </div>
                <br/>
                <button  onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
              </form>
            </div>
          </div>
        );
      };
    return (
        <Base title="SignIn Page" description="Sign In Page here.">
            {loadingMessage()}
            {errorMessage()}
            {signInForm()}
            {performRedirect()}
        </Base>
    )
}

export default Signin; 