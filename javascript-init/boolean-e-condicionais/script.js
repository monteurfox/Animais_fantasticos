if((5-5) && (5+5)) {
  console.log("Verdadeiro")
} 
else {
  console.log("Falso")
}

var condicional = (5-10) && (5+5)
if(condicional) {
  console.log("Verdadeiro")
} 
else {
  console.log("Falso")
}

var time = "nada"

switch(time) {
  case "vermelho":
    console.log("Mengão!!")
  break
  case "verde":
    console.log("Florminense.. ui ui")
  break
  case "preto":
    console.log("Taca Fogo")
  break
  default:
    console.log("Tu nem gosta de futebol!")
}




/* E X E R C I C I O S */


// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 25
var outraIdade = 25

if(minhaIdade > outraIdade) {
  console.log("Você é mais velho!")
}
else if(minhaIdade === outraIdade){
  console.log("Você tem a mesma idade")
}
else{
  console.log("Você é mais novo..")
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
//R: False
console.log(expressao)
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; 
var idade = 28;  
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)
// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
  console.log("Brasil tem mais habitantes")
}
else {
  console.log("Brasil tem menos habitantes")
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

//R: Falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

//R: Cão