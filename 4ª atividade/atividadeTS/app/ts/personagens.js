"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cavaleiro = exports.Soldado = exports.Personagem = void 0;
var Personagem = /** @class */ (function () {
    function Personagem(id, nome, energia) {
        this.id = id;
        this.nome = nome;
        this._energia = energia;
    }
    Object.defineProperty(Personagem.prototype, "energia", {
        get: function () {
            return this._energia;
        },
        set: function (energia) {
            this._energia = energia;
        },
        enumerable: false,
        configurable: true
    });
    // Se a energia for igual a zero, o método retornará como falso e vice-versa.
    Personagem.prototype.estaVivo = function () {
        return this._energia != 0;
    };
    // Caso o valor do ataque for superior ao valor da hearth ponts do personagem a 
    // a energia será zerada, caso contrário; é subtraída da energia o valor do ataque.
    Personagem.prototype.defenderAtaque = function (valorAtaque) {
        valorAtaque > this._energia ? this._energia = 0 : this._energia -= valorAtaque;
    };
    Personagem.prototype.toString = function () {
        return "ID: " + this.id + " \nNome: " + this.nome + " \nEnergia: " + this._energia + " \nEst\u00E1 vivo? " + this.estaVivo() + " \n";
    };
    return Personagem;
}());
exports.Personagem = Personagem;
var Soldado = /** @class */ (function (_super) {
    __extends(Soldado, _super);
    function Soldado(id, nome, energia, forcaDeAtaque) {
        var _this = _super.call(this, id, nome, energia) || this;
        _this.forcaDeAtaque = forcaDeAtaque;
        return _this;
    }
    // O ataque do soldado é equivalente ao valor de sua força de ataque.
    Soldado.prototype.atacar = function (p) {
        p.defenderAtaque(this.forcaDeAtaque);
    };
    // Quando o soldado se defende, o valor do ataque do oponente é dividido
    // pela metade.
    Soldado.prototype.defenderAtaque = function (valorAtaque) {
        valorAtaque = valorAtaque / 2;
        valorAtaque > this.energia ? this.energia = 0 : this.energia -= valorAtaque;
    };
    return Soldado;
}(Personagem));
exports.Soldado = Soldado;
var Cavaleiro = /** @class */ (function (_super) {
    __extends(Cavaleiro, _super);
    function Cavaleiro(id, nome, energia, forcaDeAtaque) {
        return _super.call(this, id, nome, energia, forcaDeAtaque) || this;
    }
    // O cavaleiro é o mais forte, por isso sua força de ataque é duplicada.
    Cavaleiro.prototype.atacar = function (p) {
        p.defenderAtaque(this.forcaDeAtaque * 2);
    };
    // O cavaleiro possui uma defesa melhor, por isso o ataque sofrido é diminuído a um terço da força de ataque.
    Cavaleiro.prototype.defenderAtaque = function (valorAtaque) {
        valorAtaque = valorAtaque / 3;
        valorAtaque > this.energia ? this.energia = 0 : this.energia -= valorAtaque;
    };
    return Cavaleiro;
}(Soldado));
exports.Cavaleiro = Cavaleiro;
//# sourceMappingURL=personagens.js.map