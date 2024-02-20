import { Builder, By, Key } from "selenium-webdriver";
import { should } from "chai";
should();

describe("Regression Test", function () {
  //Filter Test Cases
  it("1) Verify filter A to Z", async function () {
    // **Open browser
    let driver = await new Builder().forBrowser("firefox").build();

    // **Pre-requisite
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();

    // **Select the filter A to Z
    await driver
      .findElement(
        By.xpath('//*[@id="header_container"]/div[2]/div/span/select')
      )
      .click();
    await driver
      .findElement(
        By.xpath('//*[@id="header_container"]/div[2]/div/span/select/option[1]')
      )
      .click();

    // **Close the website
    await driver.close();
  });

  it("2) Verify filter Z to A", async function () {
    // **Pre-requisite
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();

    // **Select the filter A to Z
    await driver
      .findElement(
        By.xpath('//*[@id="header_container"]/div[2]/div/span/select')
      )
      .click();
    await driver
      .findElement(
        By.xpath('//*[@id="header_container"]/div[2]/div/span/select/option[2]')
      )
      .click();

    // **Close the website
    await driver.close();
  });

  it("3) Verify filter low to high", async function () {
    // **Open browser
    let driver = await new Builder().forBrowser("firefox").build();

    // **Pre-requisite
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();

    // **Select the filter Low to High
    await driver
      .findElement(
        By.xpath('//*[@id="header_container"]/div[2]/div/span/select')
      )
      .click();
    await driver
      .findElement(
        By.xpath('//*[@id="header_container"]/div[2]/div/span/select/option[3]')
      )
      .click();

    // **Close the website
    await driver.close();
  });

  it("4) Verify filter high to low", async function () {
    // **Open browser
    let driver = await new Builder().forBrowser("firefox").build();

    // **Pre-requisite
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();

    // **Select the filter Low to High
    await driver
      .findElement(
        By.xpath('//*[@id="header_container"]/div[2]/div/span/select')
      )
      .click();
    await driver
      .findElement(
        By.xpath('//*[@id="header_container"]/div[2]/div/span/select/option[4]')
      )
      .click();

    // **Close the website
    await driver.close();
  });
});
