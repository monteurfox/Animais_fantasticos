// Duplique o menu e adicione ele em copy
// const menu = document.querySelector('.menu')
// const menuClone = menu.cloneNode(true)
// const copy = document.querySelector('.copy')

// copy.appendChild(menuClone)

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq')
const primeiroDt = faq.querySelector('dt')


// Selecione o DD referente ao primeiro DT
const primeiroDd = primeiroDt.nextElementSibling

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML