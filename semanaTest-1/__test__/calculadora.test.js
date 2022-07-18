
const {suma, resta, division, multiplicacion, isTrue, isUndefined, isNull} = require('../calculadora');

describe('Pruebas de sumas', () => {
    test('Suma de 2 numeros', () => {
        expect(suma(1,2)).toBe(3);
    });

    test('Suma de 0', () => {
        expect(suma(0,0)).toBe(0);
    });

    test('Suma de Nulos', () => {
        expect(suma(null,null)).toBe(0);
    });

    test('Suma de texto', () => {
        expect(suma('a','b')).toBe(0);
    });
})

describe('Pruebas de restas',() => {
    test('Resta de 2 numeros', () => {
        expect(resta(1,2)).toBe(-1);
    });

    test('Resta de 0', () => {
        expect(resta(0,0)).toBe(0);
    });

    test('Resta de Nulos', () => {
        expect(resta(null,null)).toBe(0);
    });

    test('Resta de texto', () => {
        expect(resta('a','b')).toBe(0);
    });
});

describe('Pruebas de Division',() => {
    test('Division de 2 numeros', () => {
        expect(division(2,2)).toBe(1);
    });

    test('Division de texto', () => {
        expect(division('a','b')).toBe(0);
    });
});

describe('Pruebas de Multiplicacion',() => {
    test('Multiplicacion de 2 numeros', () => {
        expect(multiplicacion(1,2)).toBe(2);
    });

    test('Multiplicacion de 0', () => {
        expect(multiplicacion(0,0)).toBe(0);
    });

    test('Multiplicacion de Nulos', () => {
        expect(multiplicacion(null,null)).toBe(0);
    });

    test('Multiplicacion de texto', () => {
        expect(multiplicacion('a','b')).toBe(0);
    });
});

