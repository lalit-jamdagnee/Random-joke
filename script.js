// DOM Elements

const joke = document.querySelector('.main__content p')
const btn = document.querySelector('.main__button button');

let url = "https://official-joke-api.appspot.com/random_joke";
// Fetching the data

const RandomJokes = async ()=>{
    try{
        const response = await fetch(url, {
            method : "GET",
            redirect : "follow"
        });

        const obj = await response.json();
        const a = obj.setup;
        const b = obj.punchline;

        joke.innerHTML = `${a}<br>"${b}"`;
    }
    catch(error){
        console.log(error);
    }
};
RandomJokes();
btn.addEventListener('click', (event)=>{
    RandomJokes();
});