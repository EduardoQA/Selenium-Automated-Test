import { Builder, By, Key } from "selenium-webdriver";
import { should } from "chai";
should();


describe("Regression Test", function () {
  //**Login valid & invalid Test Cases
  it("1) Verify login with valid username", async function () {
    // **Open browser
    let driver = await new Builder().forBrowser("firefox").build();

    // **Navigate to webpage
    await driver.get("https://www.saucedemo.com/");

    // **login with valid user
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();

    // **Verify if the user is on the "Products" page (invetory.html)
    let sucessLogin = await driver
      .findElement(By.xpath('//*[@id="header_container"]/div[2]/span'))
      .getText()
      .then((value) => value);

    // **Assertion using should from the chai library
    sucessLogin.should.equal("Products");

    // **Close the website
    await driver.quit();
  });

  it("2) Verify login with invalid username", async function () {
    // **Open browser
    let driver = await new Builder().forBrowser("firefox").build();

    // **Navigate to webpage
    await driver.get("https://www.saucedemo.com/");

    // **login with valid user
    await driver.findElement(By.id("user-name")).sendKeys("jhon");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();

    // **Verify if a error shows up
    let invalidUsername = await driver
      .findElement(
        By.xpath('//*[@id="login_button_container"]/div/form/div[3]/h3')
      )
      .getText()
      .then((value) => value);

    // **Assertion using should from the chai library
    invalidUsername.should.equal(
      "Epic sadface: Username and password do not match any user in this service"
    );

    // **Close the website
    await driver.quit();
  });

  it("3) Verify login with username in capital letters", async function () {
    // **Open browser
    let driver = await new Builder().forBrowser("firefox").build();

    // **Navigate to webpage
    await driver.get("https://www.saucedemo.com/");

    // **login with valid user
    await driver.findElement(By.id("user-name")).sendKeys("STANDARD_USER");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();

    // **Verify if a error shows up
    let invalidUsername = await driver
      .findElement(
        By.xpath('//*[@id="login_button_container"]/div/form/div[3]/h3')
      )
      .getText()
      .then((value) => value);

    // **Assertion using should from the chai library
    invalidUsername.should.equal(
      "Epic sadface: Username and password do not match any user in this service"
    );

    // **Close the website
    await driver.quit();
  });

  it("4) Verify login with space before username", async function () {
    // **Open browser
    let driver = await new Builder().forBrowser("firefox").build();

    // **Navigate to webpage
    await driver.get("https://www.saucedemo.com/");

    // **login with valid user
    await driver.findElement(By.id("user-name")).sendKeys(" standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();

    // **Verify if a error shows up
    let invalidUsername = await driver
      .findElement(
        By.xpath('//*[@id="login_button_container"]/div/form/div[3]/h3')
      )
      .getText()
      .then((value) => value);

    // **Assertion using should from the chai library
    invalidUsername.should.equal(
      "Epic sadface: Username and password do not match any user in this service"
    );

    // **Close the website
    await driver.quit();
  });

  it("5) Verify login with username empty", async function () {
    // **Open browser
    let driver = await new Builder().forBrowser("firefox").build();

    // **Navigate to webpage
    await driver.get("https://www.saucedemo.com/");

    // **login with valid user
    await driver.findElement(By.id("user-name")).sendKeys("");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();

    // **Verify if a error shows up
    let invalidUsername = await driver
      .findElement(
        By.xpath('//*[@id="login_button_container"]/div/form/div[3]/h3')
      )
      .getText()
      .then((value) => value);

    // **Assertion using should from the chai library
    invalidUsername.should.equal("Epic sadface: Username is required");

    // **Close the website
    await driver.quit();
  });

  it("6) Verify login leaving password empty", async function () {
    // **Open browser
    let driver = await new Builder().forBrowser("firefox").build();

    // **Navigate to webpage
    await driver.get("https://www.saucedemo.com/");

    // **login with valid user
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("");
    await driver.findElement(By.id("login-button")).click();

    // **Verify if a error shows up
    let invalidUsername = await driver
      .findElement(
        By.xpath('//*[@id="login_button_container"]/div/form/div[3]/h3')
      )
      .getText()
      .then((value) => value);

    // **Assertion using should from the chai library
    invalidUsername.should.equal("Epic sadface: Password is required");

    // **Close the website
    await driver.quit();
  });

  it("7) Verify login leaving both fields empty", async function () {
    // **Open browser
    let driver = await new Builder().forBrowser("firefox").build();

    // **Navigate to webpage
    await driver.get("https://www.saucedemo.com/");

    // **login with valid user
    await driver.findElement(By.id("user-name")).sendKeys("");
    await driver.findElement(By.id("password")).sendKeys("");
    await driver.findElement(By.id("login-button")).click();

    // **Verify if a error shows up
    let invalidUsername = await driver
      .findElement(
        By.xpath('//*[@id="login_button_container"]/div/form/div[3]/h3')
      )
      .getText()
      .then((value) => value);

    // **Assertion using should from the chai library
    invalidUsername.should.equal("Epic sadface: Username is required");

    // **Close the website
    await driver.quit();
  });

  it("8) Verify login with password in capital letters", async function () {
    // **Open browser
    let driver = await new Builder().forBrowser("firefox").build();

    // **Navigate to webpage
    await driver.get("https://www.saucedemo.com/");

    // **login with valid user
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("SECRET_SAUCE");
    await driver.findElement(By.id("login-button")).click();

    // **Verify if a error shows up
    let invalidUsername = await driver
      .findElement(
        By.xpath('//*[@id="login_button_container"]/div/form/div[3]/h3')
      )
      .getText()
      .then((value) => value);

    // **Assertion using should from the chai library
    invalidUsername.should.equal(
      "Epic sadface: Username and password do not match any user in this service"
    );

    // **Close the website
    await driver.quit();
  });

  it("9) Verify login without the (_) from (standard_user) username", async function () {
    // **Open browser
    let driver = await new Builder().forBrowser("firefox").build();

    // **Navigate to webpage
    await driver.get("https://www.saucedemo.com/");

    // **login with valid user
    await driver.findElement(By.id("user-name")).sendKeys("standarduser");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();

    // **Verify if a error shows up
    let invalidUsername = await driver
      .findElement(
        By.xpath('//*[@id="login_button_container"]/div/form/div[3]/h3')
      )
      .getText()
      .then((value) => value);

    // **Assertion using should from the chai library
    invalidUsername.should.equal(
      "Epic sadface: Username and password do not match any user in this service"
    );

    // **Close the website
    await driver.quit();
  });
});
