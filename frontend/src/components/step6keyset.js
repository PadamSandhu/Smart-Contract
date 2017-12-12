import React, { Component } from 'react'
// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';



class Step6Keyset extends Component{

    render() {
      return (
        
        <div id={((this.props.step===5) ?'Step6Keyset':'hidden')} >
        
                <div id ='Centeral' className="card w-75">
                <div id="Step6Keyset1" className="card-body">
                  <h4 className="card-title">Keysets & Keydeposit </h4>
                  <p className="card-text">The number of key sets which will be provided to Tendents, and required deposit for the keys </p>
        
                
                  
                  <form id="Step6Keyset1.1" onSubmit={(event)=>{this.props.submitkeysets(event,this.numkeyset,this.keydeposit)}}>
                  <div className="form-row">
                  </div>
                
                    <div id="paddinginputbox" className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputCity">Number of keys sets </label>
                      <select ref={ref=>this.numkeyset=ref} id="inputState" className="form-control">
                      <option value="one">1</option>
                      <option value="two">2</option>
                      <option value="three">3</option>
                      <option value="four">4</option>
                      <option value="five">5</option>
                      <option value="six">6</option>
                      <option value="seven">7</option>
                      <option value="eight">8</option>
                      <option value="nine">9</option>
                    </select> 
                </div>
                    
                    

                    <div className="form-group col-md-4">
                      <label htmlFor="inputState">Deposit Amount</label>
                      <input ref={ref=>this.keydeposit=ref} type="text" className="form-control" id="Paymentamount" placeholder="$200"/>
                    </div>
                 
                  </div>
    
                  <button type="submit" className="btn btn-primary">Next</button>
                </form>


                </div>
                </div>
        
        </div>
      );
    }
  };


  export default Step6Keyset