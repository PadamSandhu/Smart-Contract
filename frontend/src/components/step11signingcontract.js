import React, { Component } from 'react'



class Step11Signingcontract extends Component{

    render() {
      return (
        
        <div id={((this.props.step===10) ?'Step11Signingcontract':'hidden')} >
        
                <div id ='Centeral' className="card w-75">
                <div className="card-body">
                  <h4 className="card-title"> When will you sign this agreement  </h4>
                  <p className="card-text"> The expected date when you will sign this contract with required parties </p>
        
                  
                  <form onSubmit={(event)=>{this.props.leasesign(event,this.date)}}>
                    <div id='tnames' className="form-row">
                        
                      <div className="col">
                      <label htmlFor="inputState">Signing date of lease</label>
                        <input onChange ref={ref=>this.date=ref} type="date" id="date" className="form-control" placeholder="Start date of lease" />
                      </div>
                    
                    </div>
        
                    <button   className="btn btn-primary">Submit</button>
        
                  </form>
                </div>
                </div>
        
            </div>
      );
    }
  };


  export default Step11Signingcontract