const box = document.querySelectorAll('.box');
const markX = document.querySelector('.mark-x');
const markO = document.querySelector('.mark-o');

let playerX = true;
let playerO = false;
let game = ['', '', '', '', '', '', '', '', ''];

const displayX = function () {
  //   markX.hidden = false;
  console.log('chris');
};

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener('click', console.log('hello'));
  //   displayX;
}

// box.addEventListener('click', function () {
//   console.log('clicked');
//   markO.hidden === true ? (markO.hidden = false) : (markO.hidden = true);
// });
