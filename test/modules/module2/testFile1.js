
const assert = require('assert');
const { Builder, By, Key, until } = require('selenium-webdriver');
const [createDriver,closeDriver,baseUrl] = require('../../shared/config'); 


describe('Modulo 2, archivo 1,prueba1', function () {
    let  driver;
    this.timeout(5000); 

    before(async function () {
        driver = createDriver();
        await driver.get(baseUrl);
    });

    it('Verificar título de Google', async function () {
        const title = await driver.getTitle();
        assert.strictEqual(title, 'Google'); 
    });

    it('Insertar texto en el campo de búsqueda de Google', async function () {
        const input = await driver.findElement(By.name('q'));
        await input.sendKeys('Ejemplo de búsqueda', Key.RETURN); 

        await driver.wait(until.titleIs('Ejemplo de búsqueda - Buscar con Google'), 5000);
    });

    after(async function () {
        await closeDriver(driver); 
    });
});

describe('Modulo 2, archivo 1,prueba2', function () {
    let driver;
    this.timeout(5000); 

    before(async function () {
        driver = createDriver();
        await driver.get(baseUrl);
    });

    it('Verificar título de Google', async function () {
        const title = await driver.getTitle();
        assert.strictEqual(title, 'Google'); 
    });

    it('Insertar texto en el campo de búsqueda de Google', async function () {
        const input = await driver.findElement(By.name('q')); 
        await input.sendKeys('Ejemplo de búsqueda', Key.RETURN); 

        await driver.wait(until.titleIs('Ejemplo de búsqueda - Buscar con Google'), 5000);
    });

    after(async function () {
        await closeDriver(driver); 
    });
});


