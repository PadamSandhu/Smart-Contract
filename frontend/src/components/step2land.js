import React, { Component } from 'react'
// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';



class Step2Land extends Component{

    render() {
      return (
        
        <div id={((this.props.step===1) ?'Step2Land':'hidden')} >
        
                <div id ='Centeral' className="card w-75">
                <div id="Step1Tean1" className="card-body">
                  <h4 className="card-title">Full legal names of all LandLords</h4>
                  <p className="card-text">Person who has authority to sign this lease</p>
        
                  <ul className="listed-group">
                    {this.props.Namelist}
                  </ul>
                  
                  <form ref={ref=>this.form=ref} onSubmit={(event)=>{this.props.tenantsAdd(event,this.firstname,this.lastname)}}>
                    <div id='tnames' className="form-row">
                      <div className="col">
                        <input ref={ref=>this.firstname=ref} type="text" id="idfirstname" className="form-control" placeholder="First name" />
                      </div>
                      <div className="col">
                        <input ref={ref=>this.lastname=ref} type="text" id="idlastname" className="form-control" placeholder="Last name" />
                      </div>
                      <div id='tnamesaddmore'>
                      <button  href="#" className="btn btn-primary">Add</button>
                      </div>
                    </div>        
                  </form>
                  <button onClick={this.props.submitNameland} href="#" className="btn btn-primary">Next</button>

                </div>
                </div>
        
            </div>
      );
    }
  };


  export default Step2Land