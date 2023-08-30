const assert = require('assert');
const { Builder, By, Key, until } = require('selenium-webdriver');
const [createDriver,closeDriver] = require('../../shared/config'); 

describe('Modulo 1, archivo 2,prueba1', function () {
    let  driver;
    this.timeout(5000); // Aumentar el tiempo de espera a 5 segundos

    // Navegación al principio del describe
    before(async function () {
        driver = createDriver();
        await driver.get('https://www.google.com');
        
    });

    it('Verificar título de Google', async function () {
        const title = await driver.getTitle();
        assert.strictEqual(title, 'Google'); // Verificar que el título es 'Google'
    });

    it('Insertar texto en el campo de búsqueda de Google', async function () {
        const input = await driver.findElement(By.name('q')); // Encuentra el elemento de entrada por su atributo name
        await input.sendKeys('Ejemplo de búsqueda', Key.RETURN); // Inserta texto y presiona Enter

        await driver.wait(until.titleIs('Ejemplo de búsqueda - Buscar con Google'), 5000);
    });

    after(async function () {
        await closeDriver(driver); 
    });
});

describe('Modulo 1, archivo 2,prueba2', function () {
    let driver;
    this.timeout(5000); // Aumentar el tiempo de espera a 5 segundos

    // Navegación al principio del describe
    before(async function () {
        driver = createDriver();
        await driver.get('https://www.google.com');
    });

    it('Verificar título de Google', async function () {
        const title = await driver.getTitle();
        assert.strictEqual(title, 'Google'); // Verificar que el título es 'Google'
    });

    it('Insertar texto en el campo de búsqueda de Google', async function () {
        const input = await driver.findElement(By.name('q')); // Encuentra el elemento de entrada por su atributo name
        await input.sendKeys('Ejemplo de búsqueda', Key.RETURN); // Inserta texto y presiona Enter

        await driver.wait(until.titleIs('Ejemplo de búsqueda - Buscar con Google'), 5000);
    });

    after(async function () {
        await closeDriver(driver); 
    });
});


