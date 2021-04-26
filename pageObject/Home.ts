import { by, element } from "protractor";
const expect = require( 'chai' ).expect;
//const log=require('../Logs/Log4JS').file;

export class Home
{
      private homebtn = element(by.css("a[href='/petclinic/welcome']"));

      private title = element(by.css("app-welcome h1"));

      private owners = element(by.css("ul.navbar-nav li.dropdown:nth-child(2)"));
        
      private addnewOwner=  element(by.css("a[href='/petclinic/owners/add']"));

      private veterinar= element(by.css("ul.navbar-nav li:nth-child(3)"));

      private allVeter= element(by.css("a[href='/petclinic/vets/add']"));

      private petTypesBtn= element(by.css("a[href='/petclinic/pettypes']"));

       

       public async navigateToHomepage()
        {
          await this.homebtn.click();
        } 

        public async titleVerification()
        {
          await this.title.getText().then(async(text)=>{
           // log.debug(text);
          // await log.debug( text );
           await expect(text).to.equal("Welcome to Petclinic");

              
          })
        }

       public async navigateToNewOwnerPage()
       {

          let name=await this.owners.getText();
          expect(name).to.equal("OWNERS");
           await this.owners.click();
           await this.addnewOwner.click();
       }

       public async navigateToVeterinaryPage()
       {
        let name=await this.veterinar.getText();
        expect(name).to.equal("VETERINARIANS");
            await this.veterinar.click();
            await this.allVeter.click();
       }

       public async navigateToPetTypesPage()
       {
         let name=await this.petTypesBtn.getText();
         expect(name).to.equal("PET TYPES");
         await this.petTypesBtn.click();
       }
}