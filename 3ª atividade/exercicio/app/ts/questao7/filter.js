"usando arrow function que\n  filtre todos os elementos pares do array abaixo:\nconst array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; \n";
function mainFilter() {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    var isPar = function (valor) { return valor % 2 == 0 ? valor : false; };
    var pares = array.filter(isPar);
    console.log(pares);
}
//# sourceMappingURL=filter.js.map