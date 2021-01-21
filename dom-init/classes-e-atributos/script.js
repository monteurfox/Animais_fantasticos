//    const menu = document.querySelector('.menu')
//    
//      menu.classList.add('ativo')
//      menu.classList.remove('azul')
//      menu.classList.toggle('azul')
//    
//      if(menu.classList.contains('azul')) {
//        menu.classList.add('tem-azul')
//      }
//      
//      console.log(menu.classList)






/* E X E R C I C I O S */

    // // Adicione a classe ativo a todos os itens do menu
    //   const itensMenu = document.querySelectorAll('.menu a')
        
    
    // itensMenu.forEach((item) => {
    //   item.classList.add('ativo')
    // });
    
      
    // // Remove a classe ativo de todos os itens do menu e    mantenha apenas no primeiro
    // itensMenu.forEach((item) => {
    //   item.classList.remove('ativo')
    // });
    
    // itensMenu[0].classList.add('ativo')
    
    // // Verifique se as imagens possuem o atributo alt
    // const imagens = document.querySelectorAll('img')
    
    // imagens.forEach((item) => {
    //   const possuiAtributo = item.hasAttribute('alt')
    //   //console.log(item, possuiAtributo)
    // })
    
    // // Modifique o href do link externo no menu
    // const link = document.querySelector('a[href^= "http"]')
    // link.setAttribute('href', 'https://www.animalsff.com')










/* S E G U N D A   T E N T A T I V A   P/  F I X A R */


// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a')

itensMenu.forEach((item) => {
  item.setAttribute('class', 'ativo')
})


// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
  item.removeAttribute('class', 'ativo')
})

itensMenu[0].setAttribute('class', 'ativo')

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img')

imagens.forEach((item) => {
  const possuiAlt = item.hasAttribute('alt')
  console.log(item, possuiAlt)
});
// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="https"]')


link.setAttribute('href', 'www.matheus.com')











