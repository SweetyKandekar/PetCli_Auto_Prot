import { Given, Then, When } from "cucumber";
import { browser } from "protractor";
import { Home } from "C:/Users/Lenovo/Documents/Proj/ProtraDemo/pageObject/Home";
import { NewOwner } from "C:/Users/Lenovo/Documents/Proj/ProtraDemo/pageObject/NewOwner";



let { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);

let home=new Home();
let newOwner=new NewOwner();


Given('user Navigate to Petclinic Home page and Verify HomePage Title', async ()=> {
//await home.navigateToHomepage();
await home.titleVerification();

});
When('user Clicks on OWNERS dropdown select Add New option from owners dropdown', async ()=> {

    await home.navigateToNewOwnerPage();

  });

  When('verify Title', async ()=> {
    await newOwner.verifyTitle();
  });
    

  When('provide vaild owner details as {string} {string} {string} {string} {string}', async (First_Name: any, Last_Name: any, Address: any, City: any, Telephone: any)=> {
   
    await newOwner.addNewOwnerDetails( { First_Name, Last_Name, Address, City, Telephone } );

  });
  
  Then('click on Add Owner', async ()=>  {

    await newOwner.clickOnAddOwner();
  
  });

  Then('verify whether user is successfull added new owner or not', async ()=>{
    
    await newOwner.verifyOwnersEntry();

  });


  Then('also check Back button in New Owner page', async () => {

    await home.navigateToNewOwnerPage();
    await newOwner.backButton();

  });
