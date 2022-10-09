const rolagem = document.querySelector('#rolagem')

rolagem.addEventListener('click', () => {
    window.scroll({top: window.innerHeight, behavior: "smooth"})
    rolagem.getElementsByClassName.display = 'none'
})