import itemsTemplate from '../templates/menu-items.hbs';
import dishes from '../menu.json';

const markup = itemsTemplate(dishes);

const menu = document.querySelector('.js-menu');

menu.insertAdjacentHTML('beforeend', markup);
