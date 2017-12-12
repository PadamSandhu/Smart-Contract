import React, { Component } from 'react'
// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';



class Header extends Component{

    render() {
      return (
    <div>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a href="http://localhost:3000/" id="tophomebuttonright" className="navbar-brand" >Home</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
            </span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

              <li id="topbuttonright" className="nav-item active">
                {/* <a className="nav-link" href="#"> New Project <span className="sr-only">(current)</span></a> */}
              
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><a target="_blank"  href="http://localhost:3000/">New Project</a></button>

              </li>
            
             
              {/* <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li> */}
            </ul>
            {/* <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}

          </div>
        </nav>
        <div id="jumbotron" className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3">Rental Agreement</h1>
          <p className="lead">This application will auto create a rental agrement, by answering quick questions</p>
        </div>
      </div>
    </div>
          

      );
    }
  };


  export default Header