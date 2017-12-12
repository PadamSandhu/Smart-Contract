import React, { Component } from 'react'
// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';



class Step10Residence extends Component{

    render() {
      return (
        
        <div id={((this.props.step===9) ?'Step10Residence':'hidden')} >
        
                <div id ='Centeral' className="card w-75">
                <div className="card-body">
                  <h4 className="card-title">Premises is to be used for </h4>
                  <p className="card-text">  </p>
        
                  <ul className="listed-group">
                    {this.props.Namelist}
                  </ul>
                  
                  <form onSubmit={(event)=>{this.props.residencesumbit(event,this.residence)}}>
                    <div id='tnames' className="form-row">
                        
                      <div className="col">
                      <select ref={ref=>this.residence=ref} id="inputState" className="form-control">
                      <option value="Residential purposes">Residential purposes</option>
                      <option value="Commercial purposes">Commercial purposes</option>
                      <option value="Other">Other</option>
            
                    </select>
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


  export default Step10Residence