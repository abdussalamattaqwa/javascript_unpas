// DOM SELECTION
// document.getElementsById()
// document.getElementsByTagName() -> HTMLCollection
// document.getElementByclassName()

// // document.querySelector() - > mengembalikan satu elements
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';
//
// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';
// // const p = document.querySelector('p'); // yang dipilih adalah element p yang pertama saja
// // p.innerHTML = 'ini diubah melalui javascript';
//
// // document.querySelectorAll
// const p = document.querySelectorAll('p');
// // p[2].style.backgroundColor = 'lightblue'; // harus pakai index
// for (var i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = 'lightblue';
// }

// const p4 = document.getElementsByTagName('p');
// const p4 = document.querySelectorAll('p');
// p4[3].style.backgroundColor = 'lightblue';

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';
