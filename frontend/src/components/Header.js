import React, { Component } from 'react'



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
              
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><a   href="http://localhost:3000/">New Project</a></button>

              </li>
            
            </ul>

          </div>
        </nav>
        <div id="jumbotron" className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3">Rental Agreement</h1>
          <p className="lead">This application will auto create a rental agreement, by answering quick questions</p>
        </div>
      </div>
    </div>
          

      );
    }
  };


  export default Header