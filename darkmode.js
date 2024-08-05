let theme = localStorage.getItem('theme') || 'light';
let mode = document.querySelector('.nav__mode');

const enableDarkMode = ()=>{
    document.body.classList.add('darkmode');
    localStorage.setItem('theme', 'dark');
}

const disableDarkMode = ()=>{
    document.body.classList.remove('darkmode');
    localStorage.setItem('theme', 'light');
}

if(theme == 'light'){
    disableDarkMode();
}
else{
    enableDarkMode();
}

mode.addEventListener('click', ()=>{
    theme = localStorage.getItem('theme');
    (theme == 'light')? enableDarkMode(): disableDarkMode();
});