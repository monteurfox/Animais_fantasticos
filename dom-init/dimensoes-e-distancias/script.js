// Verifique a distância da primeira imagem
// em relação ao topo da página
  const firstImage = document.querySelector('img')
  const imgParaTop = firstImage.offsetTop

// Retorne a soma da largura de todas as imagens
// P E G A D I N H A (PRECISA DE WINDOW.ONLOAD)
  //const totalImagens = document.querySelectorAll('img')
  //const tamanhoImagem = totalImagens[0].clientWidth
  //const TamTodasImg = tamanhoImagem * totalImagens.length

//Segunda forma de fazer (## F O R M A  C O R R E T A ##)
  function somaImagem() {
  const imagens = document.querySelectorAll('img')
  let soma = 0
  imagens.forEach((imagem) => {
    soma += imagem.offsetWidth
  });
  console.log(soma)
  }

  window.onload = function() {
    somaImagem()
  }

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a')

links.forEach((item) => {
  const tamAlt = item.clientHeight
  //console.log(item, tamAlt)
}); 

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const small = window.matchMedia('(max-width: 720px)')

const menu = document.querySelector('.menu')

if(small.matches) {
  menu.classList.add('menu-mobile')

}