import {Vendedor} from './vendedor';

function testeVendedor(): void{
    var v1 = new Vendedor('July', 100000);
    var v2 = new Vendedor('Carlos', 10000);
    var v3 = new Vendedor('Leandro', 5000);

    console.log('Folha de Pagamento');

    v1.calcularComissaoTotal();
    console.log(v1.toString());

    v2.calcularComissaoTotal();
    console.log(v2.toString());

    v3.calcularComissaoTotal();
    console.log(v3.toString());
}

testeVendedor();
