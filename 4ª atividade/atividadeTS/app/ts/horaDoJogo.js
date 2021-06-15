"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var personagens_1 = require("./personagens");
var jogo_1 = require("./jogo");
function main() {
    var personagem = new personagens_1.Personagem(1, 'Anônimo', 100);
    var soldado = new personagens_1.Soldado(2, 'Sniper', 100, 8);
    var soldado2 = new personagens_1.Soldado(3, 'Fuzileiro', 100, 8);
    var cavaleiro = new personagens_1.Cavaleiro(4, 'Cavaleiro-Sem-Cabeça', 100, 100);
    var jogo = new jogo_1.Jogo();
    jogo.incluir(personagem);
    jogo.incluir(soldado);
    jogo.incluir(soldado2);
    jogo.incluir(cavaleiro);
    console.log(jogo.incluir(soldado));
    console.log(jogo.consultar(2));
    console.log(jogo.todosPersonagens);
    console.log(jogo.avaliarBatalha());
    console.log(jogo.atacar(1, 2));
    console.log(jogo.atacar(2, 2));
    jogo.atacar(2, 1);
    console.log(jogo.avaliarBatalha());
    jogo.atacar(3, 2);
    console.log(jogo.avaliarBatalha());
    jogo.atacar(4, 1);
    console.log(jogo.avaliarBatalha());
    jogo.atacar(2, 4);
    console.log(jogo.avaliarBatalha());
}
main();
//# sourceMappingURL=horaDoJogo.js.map