const  { Builder, By, Key,}  = require("selenium-webdriver");
const  { describe, it } = require("mocha");
const { should } = require("chai");
should();


describe("Test drone placement and movement", () => {
    const driver = new Builder().forBrowser("chrome").build();

    it("adds drone into our world", async () => {
        await driver.get("http://localhost:3000");

        await driver.findElement(By.id("input-place-x")).clear();
        await driver.findElement(By.id("input-place-x")).sendKeys('2');
        await driver.findElement(By.id("input-place-y")).clear()
        await driver.findElement(By.id("input-place-y")).sendKeys("9")
        await driver.findElement(By.xpath('//*[@id="input-place-direction"]/option[4]')).click();

        await driver.findElement(By.id("btn-set-place")).click();

        const elemDrone = await driver.findElement(By.id("drone"));
        const x = await elemDrone.getCssValue("grid-row-start");
        const y = await elemDrone.getCssValue("grid-column-start");
        const direction = await elemDrone.getCssValue("rotate");

        const invertedY= 11-9;

        x.should.equal(`2`);
        y.should.equal(`${ invertedY }`);
        direction.should.equal("270deg");



    });
});
async function Main(){

  
}

Main();