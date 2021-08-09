const paletaID = document.getElementById('color-palette');
const tableID = document.getElementById('pixel-board');

function createBoard(number = 7) {
  if (number > 15) {
    window.alert('Favor inserir um numero menor que 15');
    number = 7;
  }
  for (let i = 0; i < Number(number); i += 1) {
    const createLines = document.createElement('tr');
    tableID.appendChild(createLines);
    for (let j = 0; j < Number(number); j += 1) {
      const createPixel = document.createElement('td');
      createLines.appendChild(createPixel);
      createPixel.className = 'pixel';
    }
  }
}
createBoard();

function changeClass() {
  const blackClass = document.getElementsByClassName('color')[0];
  blackClass.className = 'color selected';
}

changeClass();

//

function inAndOutSelected() {
  const getFatherColor = document.querySelector('#color-palette');
  const getColorSelected = document.querySelectorAll('.color');
  getFatherColor.addEventListener('click', (event) => {
    for (let i = 0; i < getColorSelected.length; i += 1) {
      getColorSelected[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}
inAndOutSelected();

// referencia para gerar cor aleatória https://thisinterestsme.com/random-color-javascript/

function pixelClick() {
  const pixelClass = document.querySelectorAll('.pixel');

  const r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  const g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  const b = Math.floor(Math.random() * (255 - 0 + 1) + 0);

  const r2 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  const g2 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  const b2 = Math.floor(Math.random() * (255 - 0 + 1) + 0);

  const r3 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  const g3 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  const b3 = Math.floor(Math.random() * (255 - 0 + 1) + 0);

  const rgbString = r + ", " + g + ", " + b;
  const rgbString2 = r2 + ", " + g2 + ", " + b2;
  const rgbString3 = r3 + ", " + g3 + ", " + b3;

  const color = document.getElementsByClassName('color');
  color[0].style.backgroundColor = 'black';
  color[1].style.backgroundColor = 'rgb(' + rgbString + ')';
  color[2].style.backgroundColor = 'rgb(' + rgbString2 + ')';
  color[3].style.backgroundColor = 'rgb(' + rgbString3 + ')';

  for (let i = 0; i < pixelClass.length; i += 1) {
    pixelClass[i].addEventListener('click', (event) => {
      const pintar = document.querySelector('.selected');
      const evento = event.target;
      evento.style.backgroundColor = pintar.style.backgroundColor;
    });
  }
}

pixelClick();

//

function clear() {
  const btn = document.querySelector('#clear-board');
  const pixelClass = document.querySelectorAll('.pixel');

  btn.addEventListener('click', () => {
    for (let i = 0; i < pixelClass.length; i += 1) {
      pixelClass[i].style.backgroundColor = 'white';
    }
  });
}
clear();

//

function criaTamanho() {
  const buttonGenerateSize = document.getElementById('generate-board');
  const inputNumberTamanho = document.getElementById('board-size');
  buttonGenerateSize.addEventListener('click', () => {
    tableID.innerHTML = '';
    createBoard(inputNumberTamanho.value);
    pixelClick();
    clear();
  });
}

changeClass();
inAndOutSelected();
pixelClick();
clear();
criaTamanho();
