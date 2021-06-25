import {SituacaoCovid} from './situacao_covid';

function testeSituacaoCovid(): void{
    // Esses dados são de 07/06/2021 e 21/06/2021
    console.log('Situação da pandemia');
    let situacao = new SituacaoCovid(62666, 73460);
    console.log(`Variação dos casos: ${situacao.calcularVariacao().toFixed(2)}%`);
    console.log(`Situação da pandemia: ${situacao.getClassificacao()}`);
}

testeSituacaoCovid();