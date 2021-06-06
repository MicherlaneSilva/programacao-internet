var estados;
(function (estados) {
    estados[estados["PI"] = 0] = "PI";
    estados[estados["MA"] = 1] = "MA";
    estados[estados["CE"] = 2] = "CE";
})(estados || (estados = {}));
;
function imprimirEstados() {
    console.clear();
    for (var i = 0; i < 3; i++) {
        console.log(estados[i]);
    }
}
//# sourceMappingURL=enuns.js.map