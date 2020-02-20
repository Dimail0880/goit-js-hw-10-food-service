import './styles.css';
import menu from './data/menu.json';
import menuTemplate from './templates/menu.hbs';

const root = document.querySelector('#root');
const theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const markup = menuTemplate(menu);
const body = document.querySelector('body');
const themeSwitch = document.querySelector('#theme-switch-control');


themeSwitch.addEventListener('change', switchToTheme);

function switchToTheme() {
    if (themeSwitch.checked === true) {
        body.classList.remove(theme.LIGHT);
        body.classList.add(theme.DARK);
        themeSwitch.checked = true
    } else {
        body.classList.remove(theme.DARK);
        body.classList.add(theme.LIGHT);
        themeSwitch.checked = false
    }
    localStorage.setItem('theme', body.classList.value);
    localStorage.setItem('theme-check', themeSwitch.checked);
}

function setTheme() {
    const savedTheme = localStorage.getItem('theme');
    const savedCheck = localStorage.getItem('theme-check');
    body.classList.value = savedTheme;
    themeSwitch.checked = savedCheck
    if (body.classList.value === 'light-theme') {
        themeSwitch.checked = false
    }
}

console.log(themeSwitch.checked)


root.insertAdjacentHTML('afterbegin', markup);
console.log(themeSwitch.checked)

window.addEventListener("DOMContentLoaded", setTheme)