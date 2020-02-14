import React, { useState,useContext } from "react";
import useForm from "./useForm";
import validate from "./validate";
import Dashboard from "./Dashboard";
import {BrowserRouter as Router,Switch,Route,Link,Redirect,useHistory,useLocation} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
// import { AppContext } from '../App'

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));
  

 const Login = () =>{
    const {handleSubmit, handleChange , value, errors}= useForm(submit, validate);
    const classes = useStyles();

    function submit(){   
        console.log("success")
    }

    return(
            <div className="login-menu">
                <div className="uk-card uk-card-default uk-width-3-2@m">
                    <div className="uk-card-header">
                        <div className="uk-grid-small uk-flex-middle">
                            
                            <div className="uk-width-expand">
                                <h3 className="uk-card-title uk-margin-remove-bottom h">Time Application Login</h3>
                            </div>
                            
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} noValidate>
                    <div id="log" className="uk-card-body inp">
                        <div className="loginput">
                        <label>Username</label>
                        <br></br>
                    <input className ="uk-input" type="text"  
                            name="username" 
                            required
                            type="text"
                            placeholder="Username"
                            value={value.username} 
                            onChange={handleChange}
                      />
                      {errors.username && <p className="error">{errors.username}</p>}
                        </div>
                         <div>
                        <label>Password</label>
                        <br></br>
                            <input className ="uk-input" 
                                name="password" 
                                placeholder="Password"
                                required
                                type="password"
                                value={value.password} 
                                onChange={handleChange}
                            />
                             {errors.password && <p className="error">{errors.password}</p>}
                       </div> 
                        <br></br>
                        <div ><button type="submit" className="log" onClick={submit}>Login</button></div>
                        <br></br>
                        <a href="#" className="uk-button uk-button-text forgot">Forgot Password </a>
                    </div>
                    </form>
                    <div className="uk-card-footer inp">
                        <p>We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.</p>
                        <div className="uk-flex uk-flex-center link">
                            <div><a>privacy policy</a></div>
                            <div className="uk-margin-left"><a>Term of Use</a></div>
                            <div className="uk-margin-left"><a>Support</a></div>
                        </div> 
                    </div>
                </div>
            </div>
    )
  
} 
export default Login;
