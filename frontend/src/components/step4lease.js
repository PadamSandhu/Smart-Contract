import React, { Component } from 'react'
// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';



class Step4Lease extends Component{

    render() {
      return (
        
        <div id={((this.props.step===3) ?'Step4Lease':'hidden')} >
        
                <div id ='Centeral' className="card w-75">
                <div id="Step4Lease1" className="card-body">
                  <h4 className="card-title">Starting date of the lease</h4>
                  <p className="card-text">Date when tenants Lease start ( It usually start at the beginning of the month )</p>
        
                
                  
                  <form  onSubmit={(event)=>{this.props.leasestartdate(event,this.years,this.months,this.date,this.time)}}>
                    <div id='tnames' className="form-row">
                    <div div="leaselength" className="col">
                        <label htmlFor="inputState"> Length of Lease</label>
                        <input ref={ref=>this.years=ref} type="text" id="idlastname" className="form-control" placeholder="Years"  />
                        <input ref={ref=>this.months=ref} type="text" id="idlastname" className="form-control" placeholder="Months"  />
                    </div>
                    

                      <div className="col">
                      <label htmlFor="inputState">Start Date of Lease</label>
                        <input ref={ref=>this.date=ref} type="date" id="date" className="form-control" placeholder="Start date of lease" />
                      </div>
                      
                      <div className="col">
                        <label htmlFor="inputState"> Lease start time</label>
                        <input ref={ref=>this.time=ref} type="text" id="idlastname" className="form-control" placeholder="12 PM"  />
                      </div>
                     
                    </div>
                    <button  href="#" className="btn btn-primary">Next</button>
                    
        
                  </form>


                </div>
                </div>
        
            </div>
      );
    }
  };


  export default Step4Lease