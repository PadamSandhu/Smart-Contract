import React, { Component } from 'react'



class Step1Tean extends Component{

    render() {
      return (
        
            <div id={((this.props.step===0) ?'Step1Tean':'hidden')}>
        
                <div  id ='Centeral' className="card w-75">
                <div id="Step1Tean1" className="card-body">
                  <h4 className="card-title">Full legal names of all Tenants</h4>
                  <p className="card-text">Name of Tenants who are signing the lease</p>
        
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
                  <button onClick={this.props.submitNameten} className="btn btn-primary">Next</button>
                </div>
                </div>
        
            </div>
      );
    }
  };


  export default Step1Tean