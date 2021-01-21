function areaQuadrado(lado) {
  return lado * lado
}

console.log(areaQuadrado(4))

function pi() {
  return 3.14;
}
var total = 5 * pi();

console.log(pi())

function imc(peso, altura) {
  return peso / (altura * altura)
}

console.log(imc(78, 1.77))

addEventListener('click', function(){
console.log("Oi")
  }
)

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc
}

function terceiraIdade(idade) {
  if(typeof idade !== 'number'){
    return "Digite uma idade válida!"
  }
  else if(idade >= 60) {
    return "É idoso"
  }
  else {
    return "Não é idoso"
  }
}



/* E X E R C I C I O S */

// Crie uma função para verificar se um valor é Truthy
function verificaValor(x) {
  if(!!x === true) {
    return "É um valor Truthy"
  } else {
    return "É um valor False"
  }
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perQuadrado(x) {
  return x * 4
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeSobrenome(nome, sobrenome) {
  return `${nome} ${sobrenome}`
}

// Crie uma função que verifica se um número é par
function verificaPar(x) {
  if(x % 2 === 0) {
    return "é par"
  } else {
    return "É impar"
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(x) {
  return typeof x
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
  console.log("Matheus Monteiroo")
})

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
