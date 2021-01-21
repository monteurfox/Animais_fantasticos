const animais = document.getElementById('animais')

const gridSection = document.getElementsByClassName('grid-section')

//console.log(gridSection[0])

const animaisImg = document.querySelectorAll('.animais img')

//console.log(animaisImg)


/* E X E R C I C I O S */

// Retorne no console todas as imagens do site
const todasAsImagens = document.querySelectorAll('.animais img')
console.log(todasAsImagens)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem = document.querySelectorAll('img[src^= "img/imagem"]')
console.log(imagem)

// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]')
console.log(links)

// Selecione o primeiro h2 dentro de .animais-descricao
const h2AnimaisDescricao = document.querySelector('.animais-descricao h2')
console.log(h2AnimaisDescricao)

// Selecione o último p do site
const ultimoP = document.querySelectorAll('p')
console.log(ultimoP[ultimoP.length - 1])












