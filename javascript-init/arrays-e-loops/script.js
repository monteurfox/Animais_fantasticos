var videoGames = ['Switch', 'PS4', 'XBOX', '3DS']
//for (var numero = 0; numero <= 10; numero++)
//console.log(numero) 

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item])
  if (videoGames[item] === 'PS4') {
    break
  }

}

var clubes = ['Flamengo', 'Botafogo', 'Fluminense', 'Vasco']
for (var time = 0; time < clubes.length; time++) {
  console.log(clubes[time])
  if (clubes[time] === 'Fluminense') {
    break
  }
}


/* E X E R C I C I O S */

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilCampeao = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
console.log('O Brasil ganhou a copa de:')
for (campeao = 0; campeao < brasilCampeao.length; campeao++) {
  console.log(brasilCampeao[campeao])
}
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta])
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length - 1]