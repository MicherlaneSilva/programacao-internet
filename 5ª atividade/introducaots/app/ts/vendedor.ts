/*2. O Varejo nacional vive uma nova fase com movimento de 
compras online, sendo que varejo  físico ainda sobrevive
 com bons percentuais de vendas. Assim os lojistas incentivam seus
   vendedores com políticas de comissão, onde além do salário base,
    seus rendimentos são  compostos de comissões sobre as vendas efetuadas.
     Escreva um programa para computar  comissão baseada no valor de venda
      informado no mês. As comissões são escalonadas da  seguinte forma: 
a. Valores das vendas até R$ 5 mil não geram comissão. 
b. Valores acima de R$ 5 mil até 10 mil geram comissão
 de 5% sobre as vendas (apenas  sobre a fatia específica
  - ou seja, se vender R$ 7 mil ganha 5% sobre R$ 2 mil, que é  o valor dentro da faixa). 
c. Valores acima de R$ 10 mil até R$ 30 mil geral comissão
 de 10% (apenas sobre essa  fatia, ou seja, se vender R$ 13 mil, 
 ganha 5% sobre a faixa anterior e 10% sobre os  R$ 3 mil da faixa corrente.) 
d. E a super comissão de 20% sobre o total de todas as vendas é 
aplicado apenas a  quem vender mais de R$ 30 mil mês. 
(Neste caso, é 20% sobre todo o valor vendido  e não apenas sobre a faixa específica) 
Diante da explicação acima, construa uma implementação que receba
 o nome do vendedor  e valor total de vendas dele no mês e calcule
  o valor do seu salário com comissão. Salário  fixo R$ 1100,00.
   Implemente de forma orientada a objetos usando uma classe com atributos  e métodos. 
Apresente os valores de comissão que ele ganhou em cada um das faixas
 de  comissionamento e o valor total da comissão e o seu salário final (fixo + comissão)
 */

class Vendedor{
    readonly nome:string;
    private _salario: number = 1100;
    private _totalVendasMes: number = 0;
    private _comissao: number = 0;

    constructor(nome: string, totalVendasMes: number){
        this.nome = nome;
        this._totalVendasMes = totalVendasMes;
    }

    get salario(): number{
        return this._salario;
    }

    set salario(salario: number){
        this._salario = salario;
    }

    get totalVendasMes(): number{
        return this._totalVendasMes;
    }

    set totalVendasMes(totalVendasMes: number){
        this.totalVendasMes = totalVendasMes;
    }

    get comissao(): number{
        return this._comissao;
    }
    set comissao(comissao: number){
        this._comissao = comissao;
    }

    _calcularComissao(valorBase: number, porcentagem: number): number{
        return (this.totalVendasMes - valorBase) * porcentagem / 100;
    }

    calcularComissaoTotal(){
        if(this.totalVendasMes > 5000 && this.totalVendasMes <= 10000){
            this._comissao = this._calcularComissao(5000, 5);

        }else if(this.totalVendasMes > 10000 && this.totalVendasMes <= 30000){
            this.comissao = this._calcularComissao(5000,5) + this._calcularComissao(10000,10);

        }else if(this.totalVendasMes > 30000){
            this.comissao = 20/100 * this.totalVendasMes;
        }
       
    }

    calcularSalarioMes(): number{
        return this.salario + this.comissao;
    }

    toString(){
        return `
            Nome: ${this.nome}
            Salário: ${this.salario.toFixed(2)}
            Total de vendas no mês(R\$): ${this.totalVendasMes}
            Valor da comissão(R\$): ${this.comissao}
            Salário no mês(R\$): ${this.calcularSalarioMes().toFixed(2)}`;
    }

}

export{Vendedor};