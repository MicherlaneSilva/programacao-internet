enum estados {"PI", 'MA', 'CE'};

function imprimirEstados(){
    console.clear();

    for(let i = 0; i < 3; i++){
        console.log(estados[i]);
    }
}
