import React, { Component } from 'react'
// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';



class Step5Rent extends Component{

    render() {
      return (
        
        <div id={((this.props.step===4) ?'Step5Rent':'hidden')} >
        
                <div id ='Centeral' className="card w-75">
                <div id ='Step5Rent1' className="card-body">
                  <h4 className="card-title">Payment Amount</h4>
                  <p className="card-text">The amount of rent that Tenant will pay for each period </p>
        
                
                  
                  <form id="paddinginputbox" onSubmit={(event)=>{this.props.submitpayment(event,this.paymentamount,this.payterm)}}>
                  <div className="form-row">
                  </div>
                
                    <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputCity">Amount</label>
                      <input ref={ref=>this.paymentamount=ref} type="text" className="form-control" id="Paymentamount" placeholder="$1600"/>
                    </div>
                    
                    

                    <div className="form-group col-md-4">
                      <label htmlFor="inputState">Term</label>
                      <select ref={ref=>this.payterm=ref} id="inputState" className="form-control">
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                        <option value="yearly">Yearly</option>
                      </select>
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


  export default Step5Rent