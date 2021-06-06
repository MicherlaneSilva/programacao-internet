"4) Sobre enums, implemente o seguinte: \na) Crie uma enum chamada DiasSemana com \nos valores representando os dias  da semana segunda a domingo; \nb) Crie um namespace com mesmo nome e\n dentro dele crie uma fun\u00E7\u00E3o chamada  isDiaUtil \n recebe um par\u00E2metro do tipo DiasSema e retorna false se for um  s\u00E1bado \n ou domingo e retorna true caso contr\u00E1rio; \nc) Escreva tamb\u00E9m um script que declara uma vari\u00E1vel\n do tipo da enum e que  testa a fun\u00E7\u00E3o DiasSemana.isDiaUtil(). \n";
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["domingo"] = 0] = "domingo";
    DiasSemana[DiasSemana["segunda"] = 1] = "segunda";
    DiasSemana[DiasSemana["ter\u00E7a"] = 2] = "ter\u00E7a";
    DiasSemana[DiasSemana["quarta"] = 3] = "quarta";
    DiasSemana[DiasSemana["quinta"] = 4] = "quinta";
    DiasSemana[DiasSemana["sexta"] = 5] = "sexta";
    DiasSemana[DiasSemana["s\u00E1bado"] = 6] = "s\u00E1bado";
})(DiasSemana || (DiasSemana = {}));
(function (DiasSemana) {
    function isDiaUtil(DiasSema) {
        return DiasSema != 'domingo' && DiasSema != 'sábado';
    }
    DiasSemana.isDiaUtil = isDiaUtil;
})(DiasSemana || (DiasSemana = {}));
function mainDia() {
    console.clear();
    var dia = DiasSemana.domingo;
    console.log(DiasSemana[dia]);
    console.log("\u00C9 dia \u00FAtil? " + (DiasSemana.isDiaUtil(dia) ? "sim" : "não"));
}
//# sourceMappingURL=diasSemana.js.map