console.log(document);
console.log(document.querySelector('.botao-trailer') );

const botaoTrailer = document.querySelector('.botao-trailer');
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector('.modal');
const linkDoVideo = video.src;

function alterarModal(){
    modal .classList.add("aberto")
}

botaoTrailer .addEventListener('click', ()=>{
    alterarModal()
    video.setAttribute("src", linkDoVideo)
})

botaoFecharModal.addEventListener("click", ()=>{
    console.log('clicou no botao x fechar trailer');

    modal.classList.remove("aberto")
    video.setAttribute("src", "");
});


