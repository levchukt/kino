
let btn = document.querySelector('.input_btn')
btn.addEventListener('click', function(){

let input = document.querySelector('.input')
let reviews = document.querySelector('.reviews')

if (input.value != ''){
    let text = input.value 
    let tag = 
    `<div class="review">
        <p class="name">Анонімний користувач</p>
        <p class = "text">${text}</p>
        <img class="close" src="img/close.png">
    </div>`
    reviews.innerHTML += tag
    input.value = ''
    let close = document.querySelector('.close')
    close.addEventListener('click',function(){
    let rev=close.closest('.review')
    rev.style.display='none'
})
}


})