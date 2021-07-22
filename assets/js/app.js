/*****
 * @author: Francisco Zapata
 *****/

const nav = document.querySelector('.nav');
const hamburMenu = document.querySelector('.hambur-menu');

/* Event Listeners */
eventListener();
function eventListener() {
	hamburMenu.addEventListener('click', desplegarMenu);
}

/* Functions */
function desplegarMenu() {
	nav.classList.toggle('hidden');
}
