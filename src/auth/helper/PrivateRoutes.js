import React from 'react';
import {isAuthenticated} from './index';
import {Route , Redirect} from 'react-routr-dom';

const  PrivateRoute = ({ component : Component, ...rest })=> {
    
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated() ? (
            <Component {...props}/>
          ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute;