// const img = document.querySelector('img')

// function callback() {
//   console.log('Clicou')
// }

// img.addEventListener('click', callback)

// const listaDeAnimais = document.querySelector('.animais-lista');

// function callbackTarget(event) {
//   console.log(event.target)
// };

// listaDeAnimais.addEventListener('click', callbackTarget)


// const linkExterno = document.querySelector('a[href^="http"]');

// function previneSaida(event) {
//   event.preventDefault()
//    console.log(this)
  
// };

// linkExterno.addEventListener('click', previneSaida);


// function capturaTecla(event) {
//   console.log(event.key)
// }

// window.addEventListener('keydown', capturaTecla)

// const fundo = document.querySelector('body')

// function mudarDeCor(event) {
//   if(event.key == 'a') {
//     fundo.classList.toggle('azul')
//   } 
// };

// window.addEventListener('keydown', mudarDeCor)


// const imgs = document.querySelectorAll('img')

// function caminhoDaImagem(event) {
//   console.log(event.currentTarget.getAttribute('src'))
// }

// imgs.forEach((img) => {
//   img.addEventListener('click', caminhoDaImagem)
// });



/* E X E R C I C I O S */

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
  // const linksInternos = document.querySelectorAll('a[href^="#"]')

  // function adicionaAtivo(event) {
  //   event.preventDefault()
    
  //   linksInternos.forEach((link) => {
  //     link.classList.remove('ativo')
  //   })

  //   this.classList.add('ativo')
  // };


  // linksInternos.forEach((link) => {
  //   link.addEventListener('click', adicionaAtivo)
  // });


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
  // const todosElementos1 = document.querySelectorAll('body *')

  // function ondeClicou(clique) {
  //   console.log(clique.currentTarget)
  // };

  // todosElementos1.forEach((element) => {
  //   element.addEventListener('click', ondeClicou)
  // });


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
  // const todosElementos2 = document.querySelectorAll('body *')

  // function ondeClicou(clique) {
  //   //clique.target.remove()
  // };

  // todosElementos2.forEach((element) => {
  //   element.addEventListener('click', ondeClicou)
  // });



// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
  
  function aumentaTexto(texto) {
    if(texto.key === 't') {
      document.documentElement.classList.toggle('texto-maior')
    }
  };

    window.addEventListener('keydown', aumentaTexto)
 
