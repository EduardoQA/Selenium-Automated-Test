import { Builder, By, Key } from "selenium-webdriver";
import { should } from "chai";
should();

describe("Regression Test", function () {
  //Checkout valid & invalid Test Cases
  it("1) Verify checkout with one product in the cart", async function () {
    // **Prerequisite
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();
    await driver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click();
    await driver.findElement(By.className("shopping_cart_link")).click();

    // *checkout
    await driver.findElement(By.id("checkout")).click();

    // *Enter valid data in all fields
    await driver.findElement(By.id("first-name")).sendKeys("Jhon");
    await driver.findElement(By.id("last-name")).sendKeys("Smith");
    await driver.findElement(By.id("postal-code")).sendKeys("00000");
    await driver.findElement(By.id("continue")).click();
    await driver.findElement(By.id("finish")).click();

    // **Verify
    let sucessCheckout = await driver
      .findElement(By.className("title"))
      .getText()
      .then((value) => value);

    // **Assertion using should from the chai library
    sucessCheckout.should.equal("Checkout: Complete!");

    // *Close the website
    await driver.close();
  });
  it("2) Verify checkout with three product in the cart", async function () {
    // **Prerequisite
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();
    await driver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click();
    await driver
      .findElement(By.id("add-to-cart-sauce-labs-bike-light"))
      .click();
    await driver
      .findElement(By.id("add-to-cart-sauce-labs-bolt-t-shirt"))
      .click();
    await driver.findElement(By.className("shopping_cart_link")).click();

    // *checkout
    await driver.findElement(By.id("checkout")).click();

    // *Enter valid data in all fields
    await driver.findElement(By.id("first-name")).sendKeys("Jhon");
    await driver.findElement(By.id("last-name")).sendKeys("Smith");
    await driver.findElement(By.id("postal-code")).sendKeys("00000");
    await driver.findElement(By.id("continue")).click();
    await driver.findElement(By.id("finish")).click();

    // **Verify
    let sucessCheckout = await driver
      .findElement(By.className("title"))
      .getText()
      .then((value) => value);

    // **Assertion using should from the chai library
    sucessCheckout.should.equal("Checkout: Complete!");

    // *Close the website
    await driver.close();
  });
  it("3) Verify checkout with empty cart", async function () {
    // **Prerequisite
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();
    await driver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click();
    await driver.findElement(By.className("shopping_cart_link")).click();

    // *checkout
    await driver.findElement(By.id("checkout")).click();

    // *Enter valid data in all fields
    await driver.findElement(By.id("first-name")).sendKeys("Jhon");
    await driver.findElement(By.id("last-name")).sendKeys("Smith");
    await driver.findElement(By.id("postal-code")).sendKeys("00000");
    await driver.findElement(By.id("continue")).click();
    await driver.findElement(By.id("finish")).click();

    // **Verify
    let sucessCheckout = await driver
      .findElement(By.className("title"))
      .getText()
      .then((value) => value);

    // **Assertion using should from the chai library
    sucessCheckout.should.equal("Checkout: Complete!");

    // *Close the website
    await driver.close();
  });
  it("4) Verify checkout with first name field empty'", async function () {
    // **Prerequisite
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();
    await driver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click();
    await driver
      .findElement(By.id("add-to-cart-sauce-labs-bike-light"))
      .click();
    await driver.findElement(By.className("shopping_cart_link")).click();

    // *checkout
    await driver.findElement(By.id("checkout")).click();

    // *Enter valid data in all fields
    await driver.findElement(By.id("last-name")).sendKeys("Smith");
    await driver.findElement(By.id("postal-code")).sendKeys("00000");
    await driver.findElement(By.id("continue")).click();

    // **Verify
    let errorCheckout = await driver
      .findElement(
        By.xpath('//*[@id="checkout_info_container"]/div/form/div[1]/div[4]')
      )
      .getText()
      .then((value) => value);

    // **Assertion using should from the chai library
    errorCheckout.should.equal("Error: First Name is required");

    // *Close the website
    await driver.close();
  });
  it("5) Verify checkout with last name field empty", async function () {
    // **Prerequisite
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();
    await driver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click();
    await driver
      .findElement(By.id("add-to-cart-sauce-labs-bike-light"))
      .click();
    await driver.findElement(By.className("shopping_cart_link")).click();

    // *checkout
    await driver.findElement(By.id("checkout")).click();

    // *Enter valid data in all fields
    await driver.findElement(By.id("first-name")).sendKeys("Jhon");
    await driver.findElement(By.id("postal-code")).sendKeys("00000");
    await driver.findElement(By.id("continue")).click();

    // **Verify
    let errorCheckout = await driver
      .findElement(
        By.xpath('//*[@id="checkout_info_container"]/div/form/div[1]/div[4]')
      )
      .getText()
      .then((value) => value);

    // **Assertion using should from the chai library
    errorCheckout.should.equal("Error: Last Name is required");

    // *Close the website
    await driver.close();
  });
  it("6) Verify checkout with postal code field empty", async function () {
   // **Prerequisite
   let driver = await new Builder().forBrowser("firefox").build();
   await driver.get("https://www.saucedemo.com/");
   await driver.findElement(By.id("user-name")).sendKeys("standard_user");
   await driver.findElement(By.id("password")).sendKeys("secret_sauce");
   await driver.findElement(By.id("login-button")).click();
   await driver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click();
   await driver
     .findElement(By.id("add-to-cart-sauce-labs-bike-light"))
     .click();
   await driver.findElement(By.className("shopping_cart_link")).click();

   // *checkout
   await driver.findElement(By.id("checkout")).click();

   // *Enter valid data in all fields
   await driver.findElement(By.id("first-name")).sendKeys("Jhon");
   await driver.findElement(By.id("last-name")).sendKeys("Smith");
   await driver.findElement(By.id("continue")).click();

   // **Verify
   let errorCheckout = await driver
     .findElement(
       By.xpath('//*[@id="checkout_info_container"]/div/form/div[1]/div[4]')
     )
     .getText()
     .then((value) => value);

   // **Assertion using should from the chai library
   errorCheckout.should.equal("Error: Postal Code is required");

   // *Close the website
   await driver.close();
  });
});
