let tg = window.Telegram.WebApp;

const user_cart = document.querySelector('.user_cart');

let first_name = tg.initDataUnsafe.first_name
let last_name = tg.initDataUnsafe.last_name

user_cart.insertAdjacentHTML('afterbegin', `
<p id="user_name">${first_name} ${last_name}</p>
`)