const body = document.querySelector(".body");

body.insertAdjacentHTML("afterbegin", '<textarea class="keyboard-area"></textarea>  <section class="keyboard"><ul class="keyboard__container"></ul></section>');

const keyboardContainer = document.querySelector('.keyboard__container');

console.log(keyboardContainer);

let massiveButton = [
  '`~', '!1', '@2', '#3', '$4', '%5', '^6', '&7','*8', '(9', ')0', '_-', '+=', 'Backspace',

  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '/\\', 'DEL',

  'Caps Lock', 'A', 'S',' D', 'F', 'G', 'H', 'J', 'K',' L', ';', '\'', 'ENTER',

  'Shift ', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '/', '&uarr;', 'Shift',

 'Ctrl',' Win', 'Alt', '', 'Alt', 'Ctrl', '&#8592;', '&#8595;', '&#8594;',

];
let nameButton = '';

function giveNameButton() {
  for (let i = 0; i < massiveButton.length; i++) {
    if(i < 13 || i === 27) {
      nameButton += '<li class="keyboard__button"><span class ="simbol-1 ">'+ massiveButton[i].slice(0,1) + '</span>' + massiveButton[i].slice(1) + '</li>';
    } else {
       nameButton += '<li class="keyboard__button">' + massiveButton[i] + '</li>';
    }
  }
  keyboardContainer.innerHTML = nameButton;
}

giveNameButton();


console.log(massiveButton);
console.log(keyboardContainer.children[59].style.width );
keyboardContainer.children[59].style.width = '515px';