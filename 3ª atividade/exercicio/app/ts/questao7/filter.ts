`usando arrow function que
  filtre todos os elementos pares do array abaixo:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; 
`
function mainFilter(){
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; 

  var isPar = (valor) => valor % 2 == 0? valor: false;

  var pares = array.filter(isPar);
  console.log(pares);
  }
