`4) Sobre enums, implemente o seguinte: 
a) Crie uma enum chamada DiasSemana com 
os valores representando os dias  da semana segunda a domingo; 
b) Crie um namespace com mesmo nome e
 dentro dele crie uma função chamada  isDiaUtil 
 recebe um parâmetro do tipo DiasSema e retorna false se for um  sábado 
 ou domingo e retorna true caso contrário; 
c) Escreva também um script que declara uma variável
 do tipo da enum e que  testa a função DiasSemana.isDiaUtil(). 
`

enum DiasSemana {'domingo', 'segunda', 'terça',
                'quarta', 'quinta', 'sexta', 'sábado',
}

namespace DiasSemana{
    export function isDiaUtil(DiasSema){
        return DiasSema != 'domingo' && DiasSema != 'sábado';
    }
}

function mainDia(){
    console.clear();

    let dia = DiasSemana.domingo;

    console.log(DiasSemana[dia]);
    console.log(`É dia útil? ${DiasSemana.isDiaUtil(dia)? "sim": "não"}`);
}