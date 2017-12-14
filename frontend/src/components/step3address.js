import React, { Component } from 'react'



class Step3Address extends Component{

    render() {
      return (
        
        <div id={((this.props.step===2) ?'Step3Address':'hidden')} >
        
                <div id ='Centeral' className="card w-75">
                <div id="Step3Address1" className="card-body">
                  <h4 className="card-title">Address of the Property</h4>
                  <p className="card-text">This is the address of the Property which is being rented</p>

                <form id="paddinginputbox" onSubmit={(event)=>{this.props.submitAddress(event,this.primaryaddress,this.unitnumber,this.city,this.province,this.postal)}}>
                <div className="form-row">
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress">Address</label>
                  <input ref={ref=>this.primaryaddress=ref} type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress2">Unit Address if above adress has more than one units</label>
                  <input ref={ref=>this.unitnumber=ref} type="text" className="form-control" id="inputAddress2" placeholder="Apartment #, studio, unit #, or Basement" />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputCity">City</label>
                    <input ref={ref=>this.city=ref} placeholder="Toronto" type="text" className="form-control" id="inputCity" />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputState">Province</label>
                    <select ref={ref=>this.province=ref} id="inputState" className="form-control">
                      <option selected>Choose...</option>
                      <option value="AB">Alberta</option>
                      <option value="BC">British Columbia</option>
                      <option value="MB">Manitoba</option>
                      <option value="NB">New Brunswick</option>
                      <option value="NL">Newfoundland and Labrador</option>
                      <option value="NS">Nova Scotia</option>
                      <option value="ON">Ontario</option>
                      <option value="PE">Prince Edward Island</option>
                      <option value="QC">Quebec</option>
                      <option value="SK">Saskatchewan</option>
                      <option value="NT">Northwest Territories</option>
                      <option value="NU">Nunavut</option>
                      <option value="YT">Yukon</option>
                    </select>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Postal-Code</label>
                    <input placeholder="L4K-2N1" ref={ref=>this.postal=ref} type="text" className="form-control" id="inputZip" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
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


  export default Step3Address