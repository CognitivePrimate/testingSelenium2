require("chromedriver");
const { Builder, By, Key } = require("selenium-webdriver");
// const assert = require('assert');
let should = require("chai").should();

// describe block
describe("add another todo tests", () => {

    // beforeEach(() => {
    //     // building new driver instance using an external server instead of chromedriver (from lambdatest)
    //     // don't use yet
    //     driver = new Builder().usingServer().withCapabilities().build();
    // })

    afterEach(async () => {
        await driver.quit();
    })

  // it block
  it("successfully adds another todo to the application", async () => {
    // launch browser
    let driver = await new Builder().forBrowser("chrome").build();
    // navigate to application
    await driver.get("https://lambdatest.github.io/sample-todo-app");

    // add a todo
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("Learn Selenium", Key.RETURN);

    // assert
    // finds last element in ul of li via its xpath '//li[last()]', grabs value and then returns into todoText variable
    // actual xpath = /html/body/div/div/div/ul/li[INDEX GOES HERE]
    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then((value) => {
        return value;
      });

    // assert using chai
    todoText.should.equal("Learn Selenium");

    
  });

  it("successfully adds a THIRD todo to the application", async () => {
    // launch browser
    let driver = await new Builder().forBrowser("chrome").build();
    // navigate to application
    await driver.get("https://lambdatest.github.io/sample-todo-app");

    // add a todo
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("Learn Selenium", Key.RETURN);

    // assert
    // finds last element in ul of li via its xpath '//li[last()]', grabs value and then returns into todoText variable
    // actual xpath = /html/body/div/div/div/ul/li[INDEX GOES HERE]
    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then((value) => {
        return value;
      });

    // assert using chai
    todoText.should.equal("Learn your job");

  });

  
});
