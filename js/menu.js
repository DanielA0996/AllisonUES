const menu= document.querySelector('.menu');
const inicio =document.querySelector('.menu-navegacion');

console.log(inicio)
console.log(menu)

menu.addEventListener('click', ()=>{
    inicio.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(inicio.classList.contains('spread') && e.target !=inicio && e.target !=menu ){

        inicio.classList.toggle("spread")

    }

})