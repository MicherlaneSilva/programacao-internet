import {Personagem, Soldado, Cavaleiro} from './personagens';
import {Jogo} from './jogo';
import { isConstructorDeclaration } from 'typescript';
function main(){

    let personagem = new Personagem(1, 'Anônimo', 100);
    let soldado = new Soldado(2, 'Sniper', 100, 8);
    let soldado2 = new Soldado(3, 'Fuzileiro', 100, 8);
    let cavaleiro = new Cavaleiro(4, 'Cavaleiro-Sem-Cabeça', 100, 100);

    let jogo = new Jogo();

    jogo.incluir(personagem);
    jogo.incluir(soldado);
    jogo.incluir(soldado2);
    jogo.incluir(cavaleiro);

    console.log(jogo.incluir(soldado));
    console.log(jogo.consultar(2));
    console.log(jogo.todosPersonagens);
    console.log(jogo.avaliarBatalha());

    console.log(jogo.atacar(1, 2));
    console.log(jogo.atacar(2,2));

    jogo.atacar(2, 1);
    console.log(jogo.avaliarBatalha());

    jogo.atacar(3, 2);
    console.log(jogo.avaliarBatalha());

    jogo.atacar(4,1);
    console.log(jogo.avaliarBatalha());

    jogo.atacar(2, 4);
    console.log(jogo.avaliarBatalha());


}
main();