import {Personagem, Soldado, Cavaleiro} from "./personagens";

class Jogo{
    todosPersonagens: Personagem[] = [];

    incluir(personagem: Personagem){
        if(this.consultar(personagem.id) == null){
            this.todosPersonagens.push(personagem);
            return "Personagem adicionado com sucesso!";
        }else{
            return "O personagem não foi adicionado porque tem outro com o mesmo ID.";
        }
        
    }

    // Retornar -1 Se o personagem não estiver no array
    consultar(id: number){
        for(let i  = 0; i < this.todosPersonagens.length; i++){
            if(id == this.todosPersonagens[i].id){
                return this.todosPersonagens[i];
            }
        }
    }

    atacar(idAtacante: number, idAtacado: number){
        let atacante = this.consultar(idAtacante);        
        let atacado = this.consultar(idAtacado);

        if(atacante instanceof Cavaleiro || atacante instanceof Soldado){
            if(atacante.id != atacado.id){
                atacante.atacar(atacado);
            }
        }else{
            return "Ataque não realizado.";
        }
    }
    
    

    avaliarBatalha(){
        let result = "AVALIAÇÃO DA BATALHA\n\n";
        for(let i = 0; i < this.todosPersonagens.length; i++){
           result += '\n' + this.todosPersonagens[i];
        }

        return result;
    }
}

export {Jogo};