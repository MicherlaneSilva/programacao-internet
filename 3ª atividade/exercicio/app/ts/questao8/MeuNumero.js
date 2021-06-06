var MeuNumero = /** @class */ (function () {
    function MeuNumero(numero) {
        this.numero = numero;
    }
    MeuNumero.prototype.getInteiro = function () {
        return Math.floor(this.numero);
    };
    MeuNumero.prototype.getDecimal = function () {
        return this.numero % 10;
    };
    MeuNumero.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    return MeuNumero;
}());
function mainMeuNumero() {
    console.clear();
    var numero = new MeuNumero(10.5);
    console.log(numero.getInteiro());
    console.log(numero.getDecimal());
    numero.setNumero(0.5);
    console.log(numero.getInteiro());
    console.log(numero.getDecimal());
}
//# sourceMappingURL=MeuNumero.js.map