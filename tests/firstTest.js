require('chromedriver');
const {Builder, By, Key} = require('selenium-webdriver');
const assert = require('assert');


async function example(){
    // launch browser
    let driver = await new Builder().forBrowser('chrome').build();
    // navigate to application
    await driver.get('https://lambdatest.github.io/sample-todo-app')
    
    // add a todo
    await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium', Key.RETURN);

    // assert
    // finds last element in ul of li via its xpath '//li[last()]', grabs value and then returns into todoText variable
    // actual xpath = /html/body/div/div/div/ul/li[INDEX GOES HERE]
    let todoText = await driver.findElement(By.xpath('//li[last()]')).getText().then((value) => {
        return value;
    });

    assert.strictEqual(todoText, 'Learn Selenium')

    // close browser ---- COULD ALSO RUN AS 'AFTERALL()' function??
    // await driver.quit();
}
example();