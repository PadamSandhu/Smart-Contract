import React, { Component } from 'react'



class Step8Parking extends Component{

    render() {
      return (
        
        <div id={((this.props.step===7) ?'Step8Parking':'hidden')} >
        
                <div id ='Centeral' className="card w-75">
                <div className="card-body">
                  <h4 className="card-title">Number of Parking spots for tenants</h4>
                  <p className="card-text"> Parking spot for  cars, SUV's, and Trucks </p>
        
                  <ul className="listed-group">
                    {this.props.Namelist}
                  </ul>
                  
                  <form ref={ref=>this.form=ref} onSubmit={(event)=>{this.props.parkingspots(event,this.parkingspots)}}>
                    <div id='tnames' className="form-row">
                        
                      <div className="col">
                      <select ref={ref=>this.parkingspots=ref} id="inputState" className="form-control">
                      <option value="zero">0</option>
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
                    
                    </div>
        
                    <button  className="btn btn-primary">Next</button>
        
                  </form>
                </div>
                </div>
        
            </div>
      );
    }
  };


  export default Step8Parking