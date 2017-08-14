const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');

/*

p.textContent was another viable solution
button.addEventListener('click', () => {

p.textContent = input.value + ':'


})
*/


button.addEventListener('click', () => {

p.innerHTML = input.value + ':'


})
