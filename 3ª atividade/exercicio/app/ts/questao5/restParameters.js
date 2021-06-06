function mainExibir() {
    console.clear();
    function exibir() {
        var entradas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            entradas[_i] = arguments[_i];
        }
        for (var i = 0; i < entradas.length; i++) {
            console.log(entradas[i]);
        }
    }
    exibir('a', 'b');
    exibir('a', 'b', 'c');
    exibir('a', 'b', 'c', 'd');
}
//# sourceMappingURL=restParameters.js.map