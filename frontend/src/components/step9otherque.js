import React, { Component } from 'react'



class Step9Otherquestion extends Component{

    render() {
      return (
        
        <div id={((this.props.step===8) ?'Step9Otherquestion':'hidden')} >
        
        <div id ='Centeral' className="card w-75">
        <div className="card-body">
          <h4 className="card-title">{this.props.questionother}</h4>

          <ul className="listed-group">
            {this.props.Namelist}
          </ul>
          
          <form>
          <button onClick={(event)=>{this.props.petssmokrepairsubmit(event,this.props.questionid,"allowed")}} type="button" id={this.props.landbuttonclass} class=" costbutton btn btn-primary btn-lg">Yes</button>
          <button onClick={(event)=>{this.props.petssmokrepairsubmit(event,this.props.questionid,"not allowed")}} type="button" id={this.props.tenantbuttonclass}  class="costbutton btn btn-primary btn-lg">No</button>

          </form>
          <button onClick={(event)=>{this.props.submitpetnext(event,this.props.questionid)}} type="submit" className="btn btn-primary">Next</button>

        </div>
        </div>
        
        </div>
      );
    }
  };


  export default Step9Otherquestion