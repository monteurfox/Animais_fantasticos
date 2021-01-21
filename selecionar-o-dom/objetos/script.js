var calculadora = {
  x2: function (x) {
    y = x * 2
    return `${x} x 2 = ${y}`
  },

  x3: function (x) {
    y = x * 3
    return `${x} x 3 = ${y}`
  },

  x4: function (x) {
    y = x * 4
    return `${x} x 4 = ${y}`
  },

  x5: function (x) {
    y = x * 5
    return `${x} x 5 = ${y}`
  },

  x6: function (x) {
    y = x * 6
    return `${x} x 6 = ${y}`
  },

}


/* E X E R C I C I O S */

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: 'Matheus'
, sobrenome: 'Gonçalves Monteiro'
, idade: 25
, sexo: 'Masculino'

}

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`
}
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raça: "Labrador"
  , cor: "preto"
  , idade: 10
  , latir: function (late) {
    if (late == 'homem') {
      return 'Latindo'
    }
    else {
      return 'Não está latindo'
    }
  }

}
