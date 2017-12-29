import React, { Component } from 'react'



class Step7Cost extends Component{

    render() {
      return (
        
        <div id={((this.props.step===6) ?'Step7Cost':'hidden')} >
        
        <div id ='Centeral' className="card w-75">
        <div id ='Step7Cost1' className="card-body">
          <h4 className="card-title">{this.props.utilityshow}</h4>

          <ul className="listed-group">
            {this.props.Namelist}
          </ul>
          
          <form>
          <button onClick={(event)=>{this.props.submitcost(event,this.props.utility,"Landlord",this.props.personutipercent)}} type="button" id={this.props.landbuttonclass}  className=" costbutton btn btn-primary btn-lg">LandLord</button>
          <button onClick={(event)=>{this.props.submitcost(event,this.props.utility,"Tenant",this.props.personutipercent)}} type="button" id={this.props.tenantbuttonclass}  className="costbutton btn btn-primary btn-lg">Tenant</button>
          
          <div>
          <label htmlFor="inputPercent">Percent of Utility you are responsible for</label>
          <input onChange={this.props.costclickfun }  type="text" className="form-control" id="Paymentamount"   placeholder="100"/>  
          </div>

          </form>
          <div id='utilityobligation'> 
          {this.props.answercost}
          </div>

          <button onClick={(event)=>{this.props.submitcostwhennext(event,this.props.utilityid)}} type="submit" className="btn btn-primary">Next</button>

        </div>
        </div>
        
        </div>
      );
    }
  };


  export default Step7Cost