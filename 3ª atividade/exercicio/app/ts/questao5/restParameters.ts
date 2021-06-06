function mainExibir(){
    console.clear();

    function exibir(...entradas: string[]){
        for(let i = 0; i < entradas.length; i++){
            console.log(entradas[i]);
        }
    }
    
    exibir('a', 'b'); 
    exibir('a', 'b', 'c'); 
    exibir('a', 'b', 'c', 'd'); 
}
