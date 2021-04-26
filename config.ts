import {Config, browser} from 'protractor';
let reporter = require('cucumber-html-reporter');
export let config: Config = {

    //seleniumAddress: 'http://localhost:4444/wd/hub',
   directConnect: true,
   SELENIUM_PROMISE_MANAGER: false,
    framework: 'custom',
  
   
    frameworkPath: require.resolve('protractor-cucumber-framework'),
  
    
    
   capabilities: {
     browserName: 'chrome',
    //  'args': ['--safe-mode'],
    // 'moz:firefoxOptions': {
      //args: [ "--headless" ]
  },
   
 

    
    specs: [
       'C:/Users/Lenovo/Documents/Proj/ProtraDemo/feature/AddOwner.feature',
       //'../Features/AddVeterinary.feature',
       //'../Features/AddDeletePet.feature'

    ],
  
    cucumberOpts: {
      
      strict: true,
      // tags:"@Ownervalidation",
      format:'json:./cucumberReports.json',
      
      require: [
          'C:/Users/Lenovo/Documents/Proj/ProtraDemo/Ts2JsConvert/stepDefinition/*.js',
      ]
    },
    onPrepare: async() => {

       
       browser.ignoreSynchronization = false;
  
        browser.driver.manage().window().maximize();
  
        await browser.waitForAngularEnabled(false);
  
        
  
      },
    onComplete: () =>
    {
      var options = {
        theme: 'bootstrap',
        jsonFile: './cucumberReports.json',
        output: './cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "chrome 90.0.4430.85",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };

    reporter.generate(options);
    }
  };
