class MeuNumero{
    private numero:number;

    constructor(numero:number){
        this.numero = numero;
    }

    getInteiro(){
        return Math.floor(this.numero);
    }
    getDecimal(){
        return this.numero % 10;
    }
    setNumero(numero:number){
        this.numero = numero;
    }
}

function mainMeuNumero(){
    console.clear();

    var numero = new MeuNumero(10.5);

    console.log(numero.getInteiro());
    console.log(numero.getDecimal());

    numero.setNumero(0.5);
    console.log(numero.getInteiro());
    console.log(numero.getDecimal());
}

