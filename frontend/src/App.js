import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import numberStringRepresentation from 'number-string-representation'
import axios from 'axios'





import Header from './components/Header.js'
import Step1Tean from './components/step1tean.js'
import Step2Land from './components/step2land.js'
import Step3Address from './components/step3address.js'
import Step4Lease from './components/step4lease.js'
import Step5Rent from './components/step5rent.js'
import Step6Keyset from './components/step6keyset.js'
import Step7Cost from './components/step7cost.js'
import Step8Parking from './components/step8parking.js'
import Step9Otherquestion from "./components/step9otherque.js"
import Step10Residence from "./components/step10residence.js"
import Step11Signingcontract from './components/step11signingcontract.js'
import Step12Final from './components/step12final.js'




class App extends Component {

  constructor(){
    super();
    this.state = {
      step:0,
      tenants:[{firstname:'Tenant FirstName1',lastname:'Tenant LastName1'},
               {firstname:'Tenant FirstName2',lastname:'Tenant LastName2'}],

      landlord:[{firstname:'Landlord FirstName1',lastname:'Landlord LastName1'},
                {firstname:'Landlord FirstName2',lastname:'Landlord LastName2'}],

    address:{
      primaryaddress:'',
      unit:"",
      city:'',
      state:'',
      postalcode:''

    },
    leasestart:{
      timestart:"",
      datestart:'',
      lengthmonth:'',
      lengthyear:''
    },
    rentamount:{
      amount:"",
      amountword:"",
      term: ""
    },
    keyset:{
      numkeysets:"",
      depositkey:""
    },
      otherquestions:[],
      personresforuti:"",
      personutipercent:"",
      costcal:[],
      residencepur:"",
      landbuttonclass:'',
      tenantbuttonclass:'',       
      secondname:[],
      tempstorage:[],
      tempobject: {},
      parkingspots:'',
      leasesigndate:""

      }
     
    this.tenantsAdd = this.tenantsAdd.bind(this);
    this.submitNameten = this.submitNameten.bind(this);
    this.submitNameland =  this.submitNameland.bind(this);

    this.submitAddress = this.submitAddress.bind(this);
    this.leasestartdate= this.leasestartdate.bind(this);
    this.submitpayment=this.submitpayment.bind(this);
    this.submitkeysets=this.submitkeysets.bind(this);
    this.submitcost=this.submitcost.bind(this);
    this.submitcostwhennext=this.submitcostwhennext.bind(this);
    this.parkingspots=this.parkingspots.bind(this);
    this.petssmokrepairsubmit=this.petssmokrepairsubmit.bind(this);
    this.submitpetnext=this.submitpetnext.bind(this);
    this.residencesumbit=this.residencesumbit.bind(this);
    this.costclickfun=this.costclickfun.bind(this);
    this.leasesign =this.leasesign.bind(this);
    this.submitAllData=this.submitAllData.bind(this);
       
}



tenantsAdd(event,first,last){
  event.preventDefault();
  
  let firstname = first.value
  let lastname  = last.value
  let newname   = {firstname:firstname,lastname:lastname}

  let Secondname = this.state.secondname;

  Secondname.push(newname)

  this.setState({
    secondname:Secondname,
  })
  event.target.reset();
  
}


submitNameten(input){
  this.tenantsAdd
   let newstep = this.state.step +1;
  this.setState({
    tenants:this.state.secondname,
    step: newstep,
    secondname:[]
  })

}

submitNameland(){
  let newstep = this.state.step +1;    
  this.setState({
    landlord:this.state.secondname,
    step: newstep,
    secondname:[]
  })
  }



submitAddress(event,primaryaddress,unitnumber,city,province,postal){
  event.preventDefault();

  let newaddress = {  primaryaddress:primaryaddress.value,
                      unit:unitnumber.value,
                      city:city.value,
                      state:province.value,
                      postalcode:postal.value}

  let newstep = this.state.step +1;    
  this.setState({
    address: newaddress,
    step:newstep,
    secondname:[]
  })
}

leasestartdate(event,year,month,date,time){
  event.preventDefault();

  let newleasestart={
    timestart:time.value,
    datestart:date.value,
    lengthmonth:month.value,
    lengthyear:year.value}
  
  let newstep = this.state.step +1;    

    this.setState({
      leasestart: newleasestart,
      step:newstep,
      secondname:[]
    })
  }

  submitpayment(event,paymentamount,payterm){
    event.preventDefault();

    let payment = Math.abs(paymentamount.value)
    let numword = numberStringRepresentation(payment)
    
    let newrentamount = {
      amount:paymentamount.value,
      amountword:numword,
      term:payterm.value
    }
  let newstep = this.state.step +1;      
    this.setState({
      rentamount:newrentamount,
      step:newstep,
      secondname:[]
    })

  }

  submitkeysets(event,numkeyset,depositforkeys){
    event.preventDefault();

    let newkeyset= {
      numkeysets:numkeyset.value,
      depositkey:depositforkeys.value
    }
    let newstep = this.state.step +1;        
    this.setState({
      keyset:newkeyset,
      step:newstep
    })

  }

  submitcost(event,utility,user,percentutilityyy){
    event.preventDefault();
    
    let newutility = utility
    let newuser  = user
    let perutility = percentutilityyy;

    if(newuser==='Landlord'){
    this.setState({
      landbuttonclass:'successgreen',
      tenantbuttonclass:'',
      personresforuti:"Landord" 
      
    })}else{
      this.setState({
        tenantbuttonclass:'successgreen',
        landbuttonclass:'',
        personresforuti:'Tenant'
        
      })
    }

    let newobject   = {utility:newutility,user:newuser,percentutility:perutility}

    this.setState({
      tempobject:newobject,
    })
  }

  costclickfun(event){
    event.preventDefault();

    this.setState({
      personutipercent:event.target.value      
    })    
  }

  submitcostwhennext(event,id){
    event.preventDefault();    
    
    let costutility = this.state.secondname;
    
    costutility.push(this.state.tempobject)
    this.setState({
      secondname:costutility,
      costcal:costutility,
      landbuttonclass:"",
      tenantbuttonclass:'',
      personutipercent:'100',
      personresforuti:'Nobody'
    })
    if(id==='garbage'){
      let newstep = this.state.step +1;
      this.setState({
        step:newstep,
        secondname:[],
        landbuttonclass:"",
        tenantbuttonclass:'',
        personresforuti:"Nobody",
        personutipercent:'100'
        
      })
    }
  }

  parkingspots(event,spots){
    event.preventDefault();
    let newstep = this.state.step +1;
    this.setState({
      step:newstep,
      parkingspots:spots.value
    })
    
  }

  petssmokrepairsubmit(event,type,answer){
    event.preventDefault();
    
    let newanswer = answer
    let newtype  = type

    if(newanswer==='allowed'){
    this.setState({
      landbuttonclass:'successgreen',
      tenantbuttonclass:'' 
      
    })}else{
      this.setState({
        tenantbuttonclass:'successgreen',
        landbuttonclass:''
        
      })
    }

    let newobject   = {question:newtype,answer:newanswer}

    this.setState({
      tempobject:newobject,
    })
  }

  submitpetnext(event,id){
    event.preventDefault();    

    let costutility = this.state.tempstorage;
    
    costutility.push(this.state.tempobject)
    this.setState({
      tempstorage:costutility,
      otherquestions:costutility,
      landbuttonclass:"",
      tenantbuttonclass:''
    })
    if(id==='repairs'){
      let newstep = this.state.step +1;
      this.setState({
        step:newstep,
        landbuttonclass:"",
        tenantbuttonclass:'',
        tempstorage:[]
        
      })
    }
  }

  residencesumbit(event,data){
    event.preventDefault();

    let newstep = this.state.step +1;    
    this.setState({
      residencepur:data.value,
      step:newstep
    }
    )}


    leasesign(event,data){
      event.preventDefault();
      let newstartdate = data.value
      let newstep = this.state.step +1;          
      this.setState({
        leasesigndate:newstartdate,
        step:newstep        
      })
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (this.state.step == 11) {
        this.submitAllData()
      }
    }

  
  submitAllData(){

    let NewUser = {
    TenantsNames:this.state.tenants,
    LandlordNamesss:this.state.landlord,
    PropertyPrimaryAddress:this.state.address,
    LeaseStartDate:this.state.leasestart,
    PaymentTerm:this.state.rentamount.term,
    PaymentAmount:this.state.rentamount.amount,
    PaymentAmountWords:this.state.rentamount.amountword,
    KeySet:this.state.keyset,
    UtilityResponsiblity:this.state.costcal,
    ParkingSpots:this.state.parkingspots,
    PetsAllowence:this.state.otherquestions[0],
    SmokeAllowence:this.state.otherquestions[1],
    Repair:this.state.otherquestions[3],
    PurposeofResidence:this.state.residencepur,
    SigningDateofLease:this.state.leasesigndate  
    }

    axios.post('http://localhost:8080/newitem',
      NewUser
    ).then(res=>{
      let data =res.data
      window.open('http://localhost:8080/')
    })

  }  



  render() {
    let Content = this.state.secondname;
    
    let Namelist = Content.map((eachCard, index)=>{
      return <li  className="namelist">
                 <h4>{eachCard.firstname} {eachCard.lastname}</h4>
             </li>
  })


  let costquestions = [{Question:'Gas/Oil',id:'gas'},
                       {Question:'Electricity',id:'elec'},
                       {Question:'Hot water heater rental',id:'water-heater'},
                       {Question:'Water and Sewerage Charges',id:'sewerage'},
                       {Question:'Cable TV',id:'cable-tv'},
                       {Question:'Internet',id:'internet'},
                       {Question:'Phone',id:'phone'},
                       {Question:'Condominium/Cooperative fees',id:'condo'},
                       {Question:'Garbage Removal',id:'garbage'}]

  let otherquestion = [{Question:"Are tendants allowed to have PET",id:"pet"},
                       {Question:"Are tendants allowed to smoke on Property",id:"smoking"},
                       {Question:"Is landlord responsible for repaire of appliances after the first month ",id:"repairs"}]



      let newidno =    costquestions[this.state.secondname.length]
      let   utilityshow = <h4> Who is responsible for {newidno.Question} </h4>

      let answercost  = <h5>{this.state.personresforuti} is responsible to pay {this.state.personutipercent}% for {newidno.Question} </h5>
      


      let questlen = otherquestion[this.state.tempstorage.length]

      let questionother = <h4> {questlen.Question}  </h4>

  let step = this.state.step

    return (
      <div className="App">
        
        <Header submitAllData={this.submitAllData}/>
    
        
        <Step1Tean Namelist={Namelist} tenantsAdd={this.tenantsAdd} submitNameten={this.submitNameten} step={step} />
        <Step2Land Namelist={Namelist} tenantsAdd={this.tenantsAdd} submitNameland={this.submitNameland} step={step}  />
        <Step3Address submitAddress={this.submitAddress} step={step} />
        <Step4Lease leasestartdate={this.leasestartdate} step={step} />
        <Step5Rent submitpayment={this.submitpayment} step={step} />
        <Step6Keyset submitkeysets={this.submitkeysets} step={step} />
        <Step7Cost tenantbuttonclass={this.state.tenantbuttonclass} landbuttonclass={this.state.landbuttonclass} 
                   utility={newidno.Question} costclassrem={this.state.costclassrem} utilityid={newidno.id} utilityshow={utilityshow}
                   answercost={answercost} personutipercent={this.state.personutipercent}
                   submitcost={this.submitcost} submitcostwhennext={this.submitcostwhennext} costclickfun={this.costclickfun} step={step} />
        <Step8Parking parkingspots={this.parkingspots} step={step}/>
        <Step9Otherquestion tenantbuttonclass={this.state.tenantbuttonclass} landbuttonclass={this.state.landbuttonclass}
                            petssmokrepairsubmit={this.petssmokrepairsubmit} submitpetnext={this.submitpetnext} 
                            questionother={questionother} questionid={questlen.id} step={step} />
        
        <Step10Residence residencesumbit={this.residencesumbit} step={step} />

        <Step11Signingcontract leasesign={this.leasesign} submitAllData={this.submitAllData} step={step} />
        <Step12Final step={this.state.step}/>

        


      </div>
    );
  }
}

export default App;
