"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogo = void 0;
var personagens_1 = require("./personagens");
var Jogo = /** @class */ (function () {
    function Jogo() {
        this.todosPersonagens = [];
    }
    Jogo.prototype.incluir = function (personagem) {
        if (this.consultar(personagem.id) == null) {
            this.todosPersonagens.push(personagem);
            return "Personagem adicionado com sucesso!";
        }
        else {
            return "O personagem não foi adicionado porque tem outro com o mesmo ID.";
        }
    };
    // Retornar -1 Se o personagem não estiver no array
    Jogo.prototype.consultar = function (id) {
        for (var i = 0; i < this.todosPersonagens.length; i++) {
            if (id == this.todosPersonagens[i].id) {
                return this.todosPersonagens[i];
            }
        }
    };
    Jogo.prototype.atacar = function (idAtacante, idAtacado) {
        var atacante = this.consultar(idAtacante);
        var atacado = this.consultar(idAtacado);
        if (atacante instanceof personagens_1.Cavaleiro || atacante instanceof personagens_1.Soldado) {
            if (atacante.id != atacado.id) {
                atacante.atacar(atacado);
            }
        }
        else {
            return "Ataque não realizado.";
        }
    };
    Jogo.prototype.avaliarBatalha = function () {
        var result = "AVALIAÇÃO DA BATALHA\n\n";
        for (var i = 0; i < this.todosPersonagens.length; i++) {
            result += '\n' + this.todosPersonagens[i];
        }
        return result;
    };
    return Jogo;
}());
exports.Jogo = Jogo;
//# sourceMappingURL=jogo.js.map