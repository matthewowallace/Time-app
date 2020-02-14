import React, { useState,useEffect,useContext } from 'react';
import ReactDOM from 'react-dom';
import { ModalProvider } from "react-modal-hook";
import validate from "./validate";
import useForm from "./useForm";
import MaterialUIPickers from './Multikeyboardpicker'
import ToggleContent from './Modalholder'
import TimesheetTable from './TimesheetTable'
// import { AppContext } from '../App'

const Dashboard = () =>{
    const {handleChange,errors,value,handleSubmit} = useForm(submit,validate);
   
    function submit(){
        console.log("Sucesss");
    }

  return(
      <div>
        <div className="uk-grid-collapse uk-grid-item-match" data-uk-grid>
            <aside className="uk-width-medium uk-position-relative uk-position-z-index uk-visible@m">
                <div className="uk-section-secondary uk-width-medium uk-height-small uk-position-fixed uk-overflow-auto" data-uk-height-viewport="offset-top: true">
                    <div className="uk-tile uk-tile-xsmall">
                        <ul className="uk-nav-default uk-nav-parent-icon" data-uk-nav>
                            <li className="uk-active"><a href="#"><span className="uk-margin-small-right"></span><img className="logo" width="20" height="20" src="assets/stopwatch.png"></img> Dashboard</a></li>
                        
                            <li className="uk-parent">
                                <a href="#"><span className="uk-margin-small-right" data-uk-icon="clock"></span>Time Entry</a>
                        
                            </li>
                            <li className="uk-parent">
                                <a href="#"><span className="uk-margin-small-right" data-uk-icon="thumbnails"></span>Menu</a>
                                <ul className="uk-nav-sub">
                                    <li><a href="#">Sub item</a></li>
                                    <li><a href="#">Sub item</a></li>
                                </ul>
                            </li>
                            <li className="uk-parent">
                                <a href="#"><span className="uk-margin-small-right" data-uk-icon="users"></span>Menu</a>
                                <ul className="uk-nav-sub">
                                    <li><a href="#">Sub item</a></li>
                                    <li><a href="#">Sub item</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <hr className="uk-hr uk-margin-remove"></hr>
                    <div className="uk-tile uk-tile-xsmall">
                        <ul className="uk-nav-default uk-nav-parent-icon" data-uk-nav>
                            <li className="uk-parent">
                                <a href="#"><span className="uk-margin-small-right" data-uk-icon="calendar"></span>Menu</a>
                                <ul className="uk-nav-sub">
                                    <li><a href="#">Sub item</a></li>
                                    <li><a href="#">Sub item</a></li>
                                </ul>
                            </li>
                            <li className="uk-parent">
                                <a href="#"><span className="uk-margin-small-right" data-uk-icon="future"></span>Menu</a>
                                <ul className="uk-nav-sub">
                                    <li><a href="#">Sub item</a></li>
                                    <li><a href="#">Sub item</a></li>
                                </ul>
                            </li>
                            <li className="uk-parent">
                                <a href="#"><span className="uk-margin-small-right" data-uk-icon="mail"></span>Menu</a>
                                <ul className="uk-nav-sub">
                                    <li><a href="#">Sub item</a></li>
                                    <li><a href="#">Sub item</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <hr className="uk-hr uk-margin-remove"></hr>
                    <div className="uk-tile uk-tile-xsmall">
                        <ul className="uk-nav-default" data-uk-nav>
                            <li>
                                <a href="#"><span className="uk-margin-small-right" data-uk-icon="settings"></span>Settings</a>
                            </li>
                            <li>
                                <a href="#"><span className="uk-margin-small-right" data-uk-icon="trash"></span>Trash</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="uk-hr uk-margin-remove"></hr>
                    
                </div>
            </aside>

            <main className="uk-width-expand uk-position-relative">
                <div className="uk-panel uk-section uk-section-small uk-section-muted uk-container uk-container-expand" data-uk-height-viewport="offset-top: true">
                    <h1 className="uk-heading-divider">Dashboard</h1>
                    <div className="uk-child-width-1-1 uk-child-width-1-2@m uk-child-width-1-3@l" data-uk-grid>
                        <div className="uk-width-1-1">


            <ToggleContent
             toggle={show => <a className="uk-button uk-button-default"  onClick={show}>Create Time Sheet</a>}
              content={hide => (
                <ModalProvider>
                                 <div className="modal">
                                    <div className="modalContent">
                                        <button className="uk-modal-close-default" type="button" uk-close="true" onClick={hide}></button>

                                        <div className="uk-modal-header">
                                            <h2 className="uk-modal-title">New Time Sheet</h2>
                                        </div>

                                        <div className="uk-modal-body">

                                            <form onSubmit={handleSubmit} noValidate>
                                                <fieldset className="uk-fieldset"></fieldset>
                                            
                                                    <div id="timeEntry"></div>
                                                    <div className="uk-margin">

                                                        <input className ="uk-input" type="text" placeholder="Title"
                                                            placeholder="Title" 
                                                            name="title" 
                                                            required
                                                            value={value.title} 
                                                            onChange={handleChange}>
                                                        </input>

                                                        {errors.title && <p className="error">{errors.title}</p>}

                                                    </div>
                                            
                                                    <div className="uk-margin">
                                                    <input className ="uk-input" type="text" placeholder="Service"
                                                            placeholder="Service" 
                                                            name="service" 
                                                            required
                                                            value={value.service} 
                                                            onChange={handleChange}>
                                                        </input>

                                                        {errors.service && <p className="error">{errors.service}</p>}

                                                    </div>

                                                    <div className="uk-margin">
                                                    <input className ="uk-input" type="text" placeholder="Client"
                                                            placeholder="Client" 
                                                            name="client"
                                                            required 
                                                            value={value.client} 
                                                            onChange={handleChange}>
                                                        </input>

                                                        {errors.client && <p className="error">{errors.client}</p>}

                                                    </div>
                                                    <div>
                                                         <MaterialUIPickers />
                                                    </div>
                                          
                                                    <div className="uk-margin">
                                                        <textarea className="uk-textarea" name="message" value={value.message} rows="5" placeholder="Address"></textarea>
                                                    </div>

                                                    <div>
                                                        <button className="cancelBtn" type="button" onClick={hide}>CANCEL</button>
                                                        <button className="saveBtn" type="submit">SAVE</button>
                                                    </div>
                                                </form>
                                        </div>
                                      </div>
                                    </div>   
                            </ModalProvider>
                            )}
                        />
                                <TimesheetTable/>
                         </div>
                    </div>
                </div>
            </main>
        </div>

        <div id="js-offcanvas" data-uk-offcanvas="overlay: true">
            <div className="uk-offcanvas-bar">
                <div className="uk-panel">
                    <ul className="uk-nav-default uk-nav-parent-icon" data-uk-nav>
                        <li className="uk-active"><a href="#"><span className="uk-margin-small-right" data-uk-icon="grid"></span>Dashboard</a></li>
                        <li className="uk-parent">
                            <a href="#"><span className="uk-margin-small-right" data-uk-icon="table"></span>Menu</a>
                            <ul className="uk-nav-sub">
                                <li><a href="#">Sub item</a></li>
                                <li><a href="#">Sub item</a></li>
                            </ul>
                        </li>
                        <li className="uk-parent">
                            <a href="#"><span className="uk-margin-small-right" data-uk-icon="thumbnails"></span>Menu</a>
                            <ul className="uk-nav-sub">
                                <li><a href="#">Sub item</a></li>
                                <li><a href="#">Sub item</a></li>
                            </ul>
                        </li>
                        <li className="uk-parent">
                            <a href="#"><span className="uk-margin-small-right" data-uk-icon="users"></span>Menu</a>
                            <ul className="uk-nav-sub">
                                <li><a href="#">Sub item</a></li>
                                <li><a href="#">Sub item</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <hr></hr>
                <div className="uk-panel">
                    <ul className="uk-nav-default uk-nav-parent-icon" data-uk-nav>
                        <li className="uk-parent">
                            <a href="#"><span className="uk-margin-small-right" data-uk-icon="calendar"></span>Menu</a>
                            <ul className="uk-nav-sub">
                                <li><a href="#">Sub item</a></li>
                                <li><a href="#">Sub item</a></li>
                            </ul>
                        </li>
                        <li className="uk-parent">
                            <a href="#"><span className="uk-margin-small-right" data-uk-icon="future"></span>Menu</a>
                            <ul className="uk-nav-sub">
                                <li><a href="#">Sub item</a></li>
                                <li><a href="#">Sub item</a></li>
                            </ul>
                        </li>
                        <li className="uk-parent">
                            <a href="#"><span className="uk-margin-small-right" data-uk-icon="mail"></span>Почта</a>
                            <ul className="uk-nav-sub">
                                <li><a href="#">Sub item</a></li>
                                <li><a href="#">Sub item</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <hr></hr>
                <div className="uk-panel">
                    <ul className="uk-nav-default uk-nav-parent-icon" data-uk-nav>
                        <li className="uk-parent">
                            <a href="#"><span className="uk-margin-small-right" data-uk-icon="settings"></span>Settings</a>
                            <ul className="uk-nav-sub">
                                <li><a href="#">Sub item</a></li>
                                <li><a href="#">Sub item</a></li>
                            </ul>
                        </li>
                        <li className="uk-parent">
                            <a href="#"><span className="uk-margin-small-right" data-uk-icon="trash"></span>Trash</a>
                            <ul className="uk-nav-sub">
                                <li><a href="#">Sub item</a></li>
                                <li><a href="#">Sub item</a></li>
                            </ul>
                        </li>
                        <li className="uk-parent">
                        <div ><button type="submit" className="log" onClick={submit}>Login</button></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
  )

};
export default Dashboard;