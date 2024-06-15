const button = document.querySelector('#button');
const text = document.querySelector('#text');
const img = document.querySelector('#img');

button.addEventListener('click',()=>api());

const api = ()=>{
    fetch("https://api.chucknorris.io/jokes/random").then(response => response.json()
).then(responsejson =>{
    text.innerHTML = responsejson.value;
    
})
}
