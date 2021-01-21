// Por qual motivo o código abaixo retorna com erros?

{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
console.log(var, marca, portas);
//Está usando var ao invés do nome da variável e cons e let não vazam escopo devendo assim, utilizar o console.log dentro do escopo para que funcione.


// Como corrigir o erro abaixo?
function somarDois(x) {
  const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  //const dois = 2;
  return x + dois;
}
somarDois(4);
dividirDois(6);
// informando const dois novamente no bloco abaixo pois, o mesmo não existe por não vazar bloco. Como segunda opção, utilizar const fora dos blocos para se tornar utilizável para os dois blocos "Global".

// O que fazer para total retornar 500?
var numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
// alterando var numero = 0 para let, pois let não vaza bloco. Se possível, mudar var numero = 50 para const numero = 50.