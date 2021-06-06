"9) Crie uma classe chamada Transacao que tenha: \na) Um atributo chamado valor e um outro chamado desconto, ambos somente  leitura; \nb) Um m\u00E9todo que calcule e retorne o valor do desconto \naplicado ao valor original:  valor * (1-desconto/100). \nc) Crie m\u00E9todos de acesso get para ambos os atributos. \nd) Instancie uma classe Transacao e teste seus m\u00E9todos";
var Transacao = /** @class */ (function () {
    function Transacao(valor, desconto) {
        this.valor = valor;
        this.desconto = desconto;
    }
    Transacao.prototype.calcularDesconto = function () {
        return this.valor * (1 - this.desconto / 100);
    };
    Transacao.prototype.getValor = function () {
        return this.valor;
    };
    Transacao.prototype.setValor = function (valor) {
        this.valor = valor;
    };
    Transacao.prototype.getDesconto = function () {
        return this.desconto;
    };
    Transacao.prototype.setDesconto = function (desconto) {
        this.desconto = desconto;
    };
    return Transacao;
}());
function main() {
    console.clear();
    var tr = new Transacao(100, 10);
    console.log("Valor com Desconto " + tr.calcularDesconto());
    console.log("Valor: " + tr.getValor() + "\n Desconto: " + tr.getDesconto());
}
//# sourceMappingURL=Transacao.js.map