import React from 'react';
import {isAuthenticated} from './index';
import {Route , Redirect} from 'react-routr-dom';

const  AdminRoute = ({ component : Component, ...rest })=> {
    
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated() && isAuthenticated().user.role===1 ? (
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

export default AdminRoute;