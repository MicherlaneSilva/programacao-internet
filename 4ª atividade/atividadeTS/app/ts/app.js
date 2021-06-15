/*1) Implemente o que se pede:
a) Crie uma interface chamada Iteravel<T>, ou seja, usando generics com os
seguintes métodos com as respectivas semânticas:
i) proximo(): retorna o próximo elemento da coleção do tipo <T>;
ii) atual(): retorna o elemento atual do tipo <T>;
iii) isPrimeiro() e isUltimo(): retornam true se o Iteravel está no primeiro ou
úlltimo elemento . Retornam false caso contrário;
iv) irParaPrimeiro(): retorna o Iteravel para primeira posição
b) Crie uma classe chamada ColecaoArray<T> que um array de <T> implemente a
interface Iterável e tenha um método um método adiciona(<T>) que adiciona um
novo elemento na coleção;
c) Instancie uma ColecaoArray para o tipo number e teste todos os métodos.*/
var ColecaoArray = /** @class */ (function () {
    function ColecaoArray() {
        this._colection = [];
        this.next = 0;
    }
    ColecaoArray.prototype.addT = function (item) {
        this._colection.push(item);
    };
    ColecaoArray.prototype.proximo = function () {
        if (this.next < this._colection.length) {
            this.next++;
        }
        else {
            this.next = 0;
        }
        return this._colection[this.next];
    };
    ColecaoArray.prototype.atual = function () {
        var last = this._colection.length - 1;
        return this._colection[last];
    };
    ColecaoArray.prototype.isPrimeiro = function (value) {
        return value == this._colection[0];
    };
    ColecaoArray.prototype.isUltimo = function (value) {
        return value == this._colection[this._colection.length - 1];
    };
    ColecaoArray.prototype.irParaPrimeiro = function (value) {
        this._colection[0] = value;
        return this._colection[0];
    };
    Object.defineProperty(ColecaoArray.prototype, "colection", {
        get: function () {
            return this._colection;
        },
        enumerable: false,
        configurable: true
    });
    return ColecaoArray;
}());
function main() {
    var colecao = new ColecaoArray();
    colecao.addT(15);
    colecao.proximo();
    colecao.addT(2);
    console.log(colecao.isPrimeiro(2));
    console.log(colecao.isUltimo(2));
    colecao.atual();
    colecao.addT(6);
    colecao.irParaPrimeiro(6);
    console.log(colecao.colection);
}
main();
//# sourceMappingURL=app.js.map