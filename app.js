
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');

	/* Added new a description prefix to three new constants */
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

document.textContent

/*

p.textContent was another viable solution
button.addEventListener('click', () => {

p.textContent = input.value + ':'


})
*/
toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
});

addItemButton.addEventListener('click', () => {
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
});
  
  
  
  
  


 addItemButton.addEventListener('click', () => {

 	let li = document.createElement('li');
 	li.textContent = addItemInput.value;


 });







/*p.title = "list description";*/