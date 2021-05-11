// DOM SELECTION
// document.getElementsById() -> element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Abd. Salam';

// document.getElementsByTagName() -> HTMLCollection
const p = document.getElementsByTagName('p');
// p[2].style.backgroundColor = 'lightblue';
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementByclassName()
// -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'ini paragraf 1';
