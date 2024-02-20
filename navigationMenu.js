import { Builder, By, Key } from "selenium-webdriver";
import { should } from "chai";
should();

describe("Regression Test", function () {
  it("1) Verify 'All Items' function from navigation menu", async function () {
    // **Prerequisite
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();

    // * Click on menu navigation (three dashs) button
    await driver.findElement(By.id("react-burger-menu-btn")).click();
    await driver.findElement(By.id("inventory_sidebar_link")).click();

    // *Verify if the user is on the all items page
    let sucessAllItems = await driver
      .findElement(By.className("title"))
      .getText()
      .then((value) => value);

    // *Assertion
    sucessAllItems.should.equal("Products");

    // *Close the website
    await driver.close();
  });

  it("2) Verify 'About' function from navigation menu", async function () {
    // **Prerequisite
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();

    // * Click on menu navigation (three dashs) button
    await driver.findElement(By.id("react-burger-menu-btn")).click();
    await driver.findElement(By.id("about_sidebar_link")).click();

    // *Verify if the user is on the all items page
    let sucessAbout = await driver
      .findElement(
        By.xpath(
          '//*[@id="__next"]/div[2]/div[1]/div/div[1]/div[1]/div/div[4]/div[1]/a/button'
        )
      )
      .getText()
      .then((value) => value);

    // *Assertion
    sucessAbout.should.equal("Try it free");

    // *Close the website
    await driver.close();
  });

  it("3) Verify 'Logout' function from navigation menu", async function () {
    // **Prerequisite
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();

    // * Click on menu navigation (three dashs) button
    await driver.findElement(By.id("react-burger-menu-btn")).click();
    await driver.findElement(By.id("logout_sidebar_link")).click();

    // *Verify if the user is on the all items page
    let sucessLogout = await driver
      .findElement(By.className("login_logo"))
      .getText()
      .then((value) => value);

    // *Assertion
    sucessLogout.should.equal("Swag Labs");

    // *Close the website
    await driver.close();
  });
  it("4) Verify 'Reset App State' function from navigation menu", async function () {
    // **Prerequisite
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();

    // * Click on menu navigation (three dashs) button
    await driver.findElement(By.id("react-burger-menu-btn")).click();
    await driver.findElement(By.id("reset_sidebar_link")).click();

    // *Verify if the user is on the all items page
    let sucessResetApp = await driver
      .findElement(By.id("add-to-cart-sauce-labs-backpack"))
      .getText()
      .then((value) => value);

    // *Assertion
    sucessResetApp.should.equal("Add to cart");

    // *Close the website
    await driver.close();
  });
});
