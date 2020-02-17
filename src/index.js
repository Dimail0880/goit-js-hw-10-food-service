import './styles.css';
import menu from "./data/menu.json"
import menuTemplate from './templates/menu.hbs';


const root = document.querySelector('#root')
const theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const markup = menuTemplate(menu);
const body = document.querySelector("body")
const themeSwitch = document.querySelector('#theme-switch-control')
themeSwitch.addEventListener("change", switchToTheme)

function switchToTheme() {
    if (themeSwitch.checked === true) {
        body.classList.remove(theme.LIGHT)
        body.classList.add(theme.DARK)
    } else {
        body.classList.remove(theme.DARK)
        body.classList.add(theme.LIGHT)
    }


}

// const settings = {
//     theme: body.className,
// };

// localStorage.setItem('settings', JSON.stringify(settings));

// const savedSettings = localStorage.getItem('settings');
// const parsedSettings = JSON.parse(savedSettings);

// console.log(parsedSettings);

// Принимает ключ `key` по которому будет произведена выборка.
// const load = settings => {
//     try {
//         const serializedState = localStorage.getItem(settings);

//         return serializedState === null ? undefined : JSON.parse(serializedState);
//     } catch (err) {
//         console.error('Get state error: ', err);
//     }
// };

// // Принимает ключ `key` и значение `value`.
// const save = (key, value) => {
//     try {
//         const serializedState = JSON.stringify(value);
//         localStorage.setItem(key, serializedState);
//     } catch (err) {
//         console.error('Set state error: ', err);
//     }
// };



root.insertAdjacentHTML('afterbegin', markup)