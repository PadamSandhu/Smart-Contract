// initialize Express in project
const express = require('express');
const app = express();
const request = require("request");


app.set('view engine', 'ejs');



let NewUser = {
    TenantsNames:[
        {firstname: "Ten First", lastname: "Sandhu las"},
        {firstname: "Tend", lastname: "HelloLast"},
        {firstname: "Tesadnd", lastname: "Helst"}],
    LandlordNamesss:[
        {firstname: "TeFirst", lastname: "Sanlas"},
        {firstname: "Tends", lastname: "HellsaoLast"},
        {firstname: "Tesadsand", lastname: "Helsast"}],
    PropertyPrimaryAddress:{
        primaryaddress:'123 Main Street',
        unit:"Unit 23",
        city:'Mississauga',
        state:'Ontario',
        postalcode:'L4T-2S4'
    },
    LeaseStartDate:{
        timestart:"12 PM",
        datestart:'2017-12-01',
        lengthmonth:'0',
        lengthyear:'1'
    },
    PaymentTerm:'monthaly',
    PaymentAmount:"1600",
    PaymentAmountWords:"2 thousant five hundard",
    KeySet:{
        depositkey:"200",
        numkeysets:"three"
    },
    UtilityResponsiblity:[{utility: "Gas/Oil", user: "Landlord", percentutility: "100"},
        {utility: "Electricity", user: "Tenant", percentutility: "100"},
        {utility: "Hot water heater rental", user: "Landlord", percentutility: "100"},
        {utility: "Water and Sewerage Charges", user: "Tenant", percentutility: "100"},
        {utility: "Cable TV", user: "Landlord", percentutility: "100"},
        {utility: "Internet", user: "Tenant", percentutility: "100"},
        {utility: "Phone", user: "Landlord", percentutility: "100"},
        {utility: "Condominium/Cooperative fees", user: "Tenant", percentutility: "100"},
        {utility: "Garbage Removal", user: "Landlord", percentutility: "100"}
    ],
    ParkingSpots:"three",
    PetsAllowence:{question:'pet',
                   answer:"No" 
},
    SmokeAllowence:{
        answer:"Yes",
        question:"smoking"
    },
    Repair:"Landlord",
    PurposeofResidence:"Commercial",
    SigningDateofLease:"2017-11-29"  
    }




    app.get('/', (req, res) => {
      
        
      
        res.render('./Form400',NewUser);    
    })











app.use(express.static('public'));
    
    // start Express on port 8080
app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});
        