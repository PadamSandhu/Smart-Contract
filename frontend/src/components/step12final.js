import React, { Component } from 'react'
// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';



class Step12Final extends Component{

    render() {
      return (
        
        <div id={((this.props.step===11) ?'Step12Final':'hidden')} >
        
                <div id ='Centeral' className="card w-75">
                <div className="card-body">
                  <h4 className="card-title"> You are done !!  </h4>
                  <p className="card-text"> The lease is based on the accuracy and completeness of the data you have entered.
                       The information is intended for illustrative
                       and general information purposes only, and we are not responsible for any mishap or lawsuits.  </p>
        
                </div>
                </div>
        
            </div>
      );
    }
  };


  export default Step12Final