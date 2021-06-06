`9) Crie uma classe chamada Transacao que tenha: 
a) Um atributo chamado valor e um outro chamado desconto, ambos somente  leitura; 
b) Um método que calcule e retorne o valor do desconto 
aplicado ao valor original:  valor * (1-desconto/100). 
c) Crie métodos de acesso get para ambos os atributos. 
d) Instancie uma classe Transacao e teste seus métodos`


class Transacao{
    private valor: number;
    private desconto: number;

    constructor(valor: number, desconto: number){
        this.valor = valor;
        this.desconto = desconto;
    }

    calcularDesconto() {
        return this.valor * (1 - this.desconto/100);
    }

    getValor(){
        return this.valor;
    }

    setValor(valor: number){
        this.valor = valor;
    }

    getDesconto(){
        return this.desconto;
    }

    setDesconto(desconto: number){
        this.desconto = desconto;
    }
}


function main(){
    console.clear();

    var tr = new Transacao(100, 10);
    console.log(`Valor com Desconto ${tr.calcularDesconto()}`);
    console.log(`Valor: ${tr.getValor()}\n Desconto: ${tr.getDesconto()}`);
}