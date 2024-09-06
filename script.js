
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

let buy_btn = document.querySelectorAll('.btn')
console.log(buy_btn)
let form =document.querySelector('form')
buy_btn.forEach((btn)=>{
    btn.addEventListener('click', function(){
        form.style.display= 'flex'
        let close = document.querySelector('.close_form')
        close.addEventListener('click',function(){
        let rev=close.closest('form')
        rev.style.display='none'})

        let rikrol = document.querySelector('.form_btn')
        rikrol.addEventListener('click', ()=>{
            location.assign('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        })
    })
})