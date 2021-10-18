// Replace Element

// Create Element
const newHeading = document.createElement('h2');
//Add id
newHeading.id = 'task-title';
//New text node
newHeading.appendChild(document.createTextNode('Task list'));

// Get the old heading
const oldHeading = document.getElementById('task-title');

//parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// Removed Element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');
// Remove list item
lis[0].remove()

//Remove child element
list.removeChild(lis[3])

// Classes & Attribute
const firstLi = document.querySelector('li:first-child');
// console.log(firstLi.children[0]);
const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val= link.hasAttribute('title');
link.removeAttribute('title')
val = link;


console.log(val);


