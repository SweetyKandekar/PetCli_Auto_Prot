import { element, by, browser, ExpectedConditions } from "protractor";
let ec = ExpectedConditions;
const expect = require( 'chai' ).expect;
import testdata from "C:/Users/Lenovo/Documents/Proj/ProtraDemo/testData/Properties"
//const log=require('../Logs/Log4JS').file;

export class NewOwner {

    private title= element(by.css("div.xd-container h2"));

    private firstName = element( by.id( "firstName" ) );

    private lastName = element( by.id( "lastName" ) );

    private address = element( by.id( "address" ) );

    private city = element( by.id( "city" ) );

    private telePhone = element( by.id( "telephone" ) );

    private addOwnerButton = element( by.buttonText( "Add Owner" ) );

    private backBtn= element( by.cssContainingText('.btn-default','Back'));

    private ownerListTbl = element( by.css( 'table.table-striped tbody' ) );

    
    public async verifyTitle()
    {

        await this.title.getText().then(async(txt)=>{
                expect(txt).to.equal("New Owner");
                
        })

    }
    public async addNewOwnerDetails( { First_Name, Last_Name, Address, City, Telephone }: { First_Name: any; Last_Name: any; Address: any; City: any; Telephone: any; } ) {

        const status=await this.addOwnerButton.isEnabled();
         expect(status).to.equal(false);
       // log.debug("AddOwner Button Disabled");


        await this.firstName.sendKeys( First_Name );
         expect(First_Name).to.have.lengthOf.above(2);
        //log.debug("First Name length is greater than 2 ");


        await this.lastName.sendKeys( Last_Name );
         expect(Last_Name).to.have.lengthOf.above(2);
        //log.debug("Last Name length is greater than 2 ");

    
        await this.address.sendKeys( Address );
         expect(Address).to.have.lengthOf.above(2);
        //log.debug("Address length is greater than 2 ");


        await this.city.sendKeys( City );
         expect(City).to.have.lengthOf.above(2);
         //log.debug("City length is greater than 2");

        
        await this.telePhone.sendKeys( Telephone );
         expect(Telephone).to.have.lengthOf.above(2);
        // log.debug("Telephone length is greater than 2")
    }

    public async backButton()
    {
        
        await this.backBtn.click();
         //log.debug("Clicked on Back button");
    }


    public async clickOnAddOwner() {

        const status=await this.addOwnerButton.isEnabled();
          expect(status).to.equal(true);
          //log.debug("AddOwner Button is Enabled");

        await this.addOwnerButton.click();
    }


    public async verifyOwnersEntry() {
        await browser.wait( ec.visibilityOf( this.ownerListTbl ), 20000, 'Taking too long to load' );
        let ownerDetails = this.ownerListTbl.all( by.tagName( "tr" ) ).last();
        // await browser.actions().mouseMove( ownerDetails ).perform();
        let ownerName = await ownerDetails.getText();
        await browser.wait( ec.elementToBeClickable( ownerDetails ), 20000, 'Element taking too long to appear in the DOM' );
         //log.debug( "Owner details are :- " + ownerName );
        await expect( testdata.userData.OwnerData.ownerDetails ).to.equal( ownerName );
    }
}

