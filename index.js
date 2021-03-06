document.addEventListener('DOMContentLoaded', ()=>{
    fetch('http://hp-api.herokuapp.com/api/characters')
    .then(res => res.json())
    .then(data => displayHarryPotter(data)) 
})

function displayHarryPotter(data){

    let body             = document.querySelector('body')
    let card             = document.createElement('div')
    let name             = document.createElement('p')
    let img              = document.createElement('img')

    img.setAttribute('src', data[0].image)
    img.setAttribute('alt', "image")
    img.setAttribute("id", "image")
    card.setAttribute("id", "card")
    name.setAttribute("id", "name")

    name.innerText = data[0].name

    card.appendChild(name)
    card.appendChild(img)
    body.appendChild(card)
 
}


