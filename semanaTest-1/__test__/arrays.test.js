const { resta, multiplicacion, isTrue, isUndefined, isNull, isFalse} = require('../calculadora');

describe('Common Matchers', () => {
    const dato1 = {
        nombre: 'Stephanie',
        edad: 20
    }

    const dato2 = {
        nombre: 'Stephanie',
        edad: 20
    }

    test('Comprobamos que los objetos son iguales', () =>{
        expect(dato1).toEqual(dato2);
    });
    test('Resultados menor que...', () =>{
        expect(resta(5,3)).toBeLessThan(3);
    });
    test('Resultado menor o igual que ...', () =>{
        expect(resta(5,3)).toBeLessThanOrEqual(2);
    });
    test('Resultado mayor o igual que ...', () =>{
        expect(multiplicacion(2,5)).toBeGreaterThanOrEqual(10);
    });
    test('Resultado True...', () => {
        expect(isTrue).toBeTruthy();
    });
    test('Resultado False...', () => {
        expect(isFalse).toBeFalsy();
    });
    test('Resultado Undefined', () => {
        expect(isUndefined).toBeUndefined();
    });
    test('Resultado Null', () => {
        expect(isNull).toBeNull();
    });
});

describe('Pruebas con Arrays...',() =>{
    test('Madrid existe en el array',() => {
        expect(provincias).toContain('Madrid');
    });
    test('El array dias tiene 7 elementos', () => {
        expect(dias).toHaveLength(7);
    });
    test('Longitud de un String', () =>{
        expect(expRg.responseFail).toHaveLength(13);
    })
    test('Comprobar formato con email', () => {
        expect(expRg.email).toMatch(/\S+@\S+\.\S+/);
    })
});

const {provincias, dias, expRg} = require('../arrays');