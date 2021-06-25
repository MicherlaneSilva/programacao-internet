/*Sobre a COVID, diariamente o noticiário informa
  a população dados importantes sobre a  evolução
   e controle da doença. Neste cenário, usam-se atualmente
    os conceitos de Em  queda, Em Alta e Em Estabilidade
    baseados nos números do dia(média) e dos últimos 14  dias.
     Variações menores que 15% nos números indicam "Em Estabilidade".  
Construa uma implementação que calcule e classifique a 
variação dos dados de acordo com  o explicado. Para isso,
 crie uma implementação em que dois atributos privados sejam
   inicializados no construtor de uma classe: Média de Casos
    há 14 dias e Média de Casos  hoje. Crie um método que faça
     o cálculo da variação em % e retorne o valor. Crie um outro
       método que use o método anterior e retorne a classificação 
       como uma string com os valores  “Em alta”, “Em Estabilidade”
        e “Em queda”*/


class SituacaoCovid{
    private _mediaCasos14: number;
    private _mediaCasosHoje: number;
        
    constructor(mediaCasos14: number, mediaCasosHoje: number){
        this._mediaCasos14 = mediaCasos14;
        this._mediaCasosHoje = mediaCasosHoje;
    }
        
    get mediaCasos14(): number{
        return this._mediaCasos14;
    }
        
    set mediaCasos14(mediaCasos14: number){
        this._mediaCasos14 = mediaCasos14;
    }
        
    get mediaCasosHoje(): number{
        return this._mediaCasosHoje;
    }
        
    set mediaCasosHoje(mediaCasosHoje: number){
        this._mediaCasosHoje = mediaCasosHoje;
    }
        
    calcularVariacao():number{
        let aumentoCasos = this.mediaCasosHoje - this.mediaCasos14;
        let variacao = aumentoCasos / this.mediaCasos14 * 100;
                
        return variacao;
    }
        
        
    getClassificacao():string{
        let variacao = this.calcularVariacao();
        
        if(variacao < 0){
            return "Em Queda";
        }else if(variacao > 15){
            return "Em Alta";
        }else{
            return "Em estabilidade";
        }
    }
}
export {SituacaoCovid};
        