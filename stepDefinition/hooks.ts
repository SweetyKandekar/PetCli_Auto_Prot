  
import { Before, After, BeforeAll } from "cucumber";

import { browser } from "protractor";
import testdata from "C:/Users/Lenovo/Documents/Proj/ProtraDemo/testData/Properties";


BeforeAll( async function () {
  
  await browser.get(testdata.appUrl);
  await browser.manage().window().maximize();

});

After(async function (scenario) {


if(scenario.result.status==="failed")
{
  const prtscrn=await browser.takeScreenshot();

// await this.attach(prtscrn, "image/png");
}
  
  });