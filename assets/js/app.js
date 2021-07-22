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
}/*****
2
 * @author: Francisco Zapata
3
 *****/
4
​
5
const nav = document.querySelector('.nav');
6
const hamburMenu = document.querySelector('.hambur-menu');
7
​
8
/* Event Listeners */
9
eventListener();
10
function eventListener() {
11
        hamburMenu.addEventListener('click', desplegarMenu);
12
}
13
​
14
/* Functions */
15
function desplegarMenu() {
16
        nav.classList.toggle('hidden');
17
}
18
