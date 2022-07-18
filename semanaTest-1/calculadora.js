const isNull = null;

const isFalse = false;

const isTrue = true;

const isUndefined = undefined;

function suma(a, b) {
    return isNaN(a) || isNaN(b) ? 0 : a + b;
}

function resta(a, b) {
    return isNaN(a) || isNaN(b) ? 0 : a - b;
}
function division(a, b) {
    return isNaN(a) || isNaN(b) ? 0 : a / b;
}
function multiplicacion(a, b) {
    return isNaN(a) || isNaN(b) ? 0 : a * b;
}
module.exports = {
    suma,
    resta,
    multiplicacion,
    division,
    isNull,
    isFalse,
    isTrue,
    isUndefined
};

//console.assert(suma(1,2) == 3, 'ERROR: El resultado esperado de 1 + 2 es 3');
//console.assert(suma(0,0) == 0, 'ERROR: El resultado esperado de 0 + 0 es 0');