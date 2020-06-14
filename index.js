document.addEventListener('DOMContentLoaded', ()=>{
    fetch('http://hp-api.herokuapp.com/api/characters')
    .then(res => res.json())
    .then(data => console.log(data)) 
})

