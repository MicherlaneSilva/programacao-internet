class Personagem{
    readonly id: number;
    readonly nome: string;
    private _energia: number;

    constructor(id: number, nome: string, energia: number){
        this.id = id;
        this.nome = nome;
        this._energia = energia;
    }


    get energia(): number{
        return this._energia;
    }

    set energia(energia: number){
        this._energia = energia;
    }

    // Se a energia for igual a zero, o método retornará como falso e vice-versa.
    estaVivo(){
        return this._energia != 0;
    }

    // Caso o valor do ataque for superior ao valor da hearth ponts do personagem a 
    // a energia será zerada, caso contrário; é subtraída da energia o valor do ataque.
    defenderAtaque(valorAtaque: number){
        valorAtaque > this._energia ? this._energia = 0: this._energia -= valorAtaque; 
    }

    toString(){
        return `ID: ${this.id} \nNome: ${this.nome} \nEnergia: ${this._energia} \nEstá vivo? ${this.estaVivo()} \n`;
    }
    
}

class Soldado extends Personagem{
    readonly forcaDeAtaque: number;

    constructor(id: number, nome: string, energia: number, forcaDeAtaque: number){
        super(id, nome, energia);
        this.forcaDeAtaque = forcaDeAtaque;
    }

    // O ataque do soldado é equivalente ao valor de sua força de ataque.
    atacar(p: Personagem){
        p.defenderAtaque(this.forcaDeAtaque);
    }

    // Quando o soldado se defende, o valor do ataque do oponente é dividido
    // pela metade.
    defenderAtaque(valorAtaque: number){
        valorAtaque = valorAtaque/2;
        valorAtaque > this.energia ? this.energia = 0: this.energia -= valorAtaque;         
    }
}

class Cavaleiro extends Soldado{
    constructor(id: number, nome: string, energia: number, forcaDeAtaque: number){
        super(id, nome, energia, forcaDeAtaque);
    }

    // O cavaleiro é o mais forte, por isso sua força de ataque é duplicada.
    atacar(p: Personagem){
        p.defenderAtaque(this.forcaDeAtaque * 2);
    }

    // O cavaleiro possui uma defesa melhor, por isso o ataque sofrido é diminuído a um terço da força de ataque.
    defenderAtaque(valorAtaque: number){
        valorAtaque = valorAtaque/3;
        valorAtaque > this.energia ? this.energia = 0: this.energia -= valorAtaque; 
    }
}

export {Personagem, Soldado, Cavaleiro};

  