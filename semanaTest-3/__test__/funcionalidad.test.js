const fs = require("fs");
document.body.innerHTML = fs.readFileSync("./calculadora.html");

const {init, resetear, resolver, limpiar } = require('../calculadora_orig/funcionalidad');

describe('Priebas sobre la funcionalidad de init()',() => {
    test('Init', () => {
        console.log(init());;    
    })
});

describe('Priebas sobre la funcionalidad de limpiar()',() => {

});

describe('Priebas sobre la funcionalidad de resetear()',() => {

});

describe('Priebas sobre la funcionalidad de resolver()',() => {

});