//---------Create a keyboard----------------------

const body = document.querySelector(".body");

body.insertAdjacentHTML("afterbegin", '<textarea class="keyboard-area"></textarea>  <section class="keyboard"><ul class="keyboard__container"></ul></section>');

const keyboardContainer = document.querySelector('.keyboard__container');

let massiveButton = [
  '~`', '!1', '@2', '#3', '$4', '%5', '^6', '&7', '*8', '(9', ')0', '_-', '+=', 'Backspace',

  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '/\\', 'Delete',

  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter',

  'Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '/', '&uarr;', 'Shift',

  'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '&#8592;', '&#8595;', '&#8594;',

];

let nameButton = '';

function giveNameButton() {
  for (let i = 0; i < massiveButton.length; i++) {
    if (i < 13 || i === 27) {
      nameButton += '<li class="keyboard__button"><span class ="simbol-1 ">' + massiveButton[i].slice(0, 1) + '</span>' + massiveButton[i].slice(1) + '</li>';
    } else {
      nameButton += '<li class="keyboard__button">' + massiveButton[i] + '</li>';
    }
  }
  keyboardContainer.innerHTML = nameButton;
}

giveNameButton();

keyboardContainer.children[59].style.width = '515px';
keyboardContainer.children[41].style.width = '120px';
keyboardContainer.children[42].style.width = '120px';


//--Interactive--keyboard--------------------
const keyboardButton = keyboardContainer.children;

function ActiveKeyButton(e) {

  // console.log(e);

  Array.from(keyboardButton).forEach(x => x.classList.remove("active"));

  if (keyboardContainer.contains(e.target)) {
    e.target.closest('.keyboard__button').classList.add("active");
    writeKeyButton(e.target.closest('.keyboard__button').textContent.toLowerCase());
  }

  //  console.log(e);

  if (e.classList.contains('keyboard__button')) {

    e.classList.add("active");
    e.classList.add("active-active");
    console.log(e);
    setTimeout(() => e.classList.remove("active-active"), 150);
    writeKeyButton(e.textContent.toLowerCase());
    console.log(e.textContent);
  }
setTimeout((function (e) {
  e.classList.remove("active-active")
}), 1);



}


document.body.addEventListener("click", ActiveKeyButton);

//---Click---Really-keyboard---------------------------
document.body.addEventListener("keydown", function (button) {

  console.log(button);

  for (let i = 0; i < keyboardButton.length; i++) {
    let keysmall = keyboardButton[i].textContent;

    if (
      keysmall === '↑' && button.key === "ArrowUp" ||
      keysmall === '←' && button.key === "ArrowLeft" ||
      keysmall === '↓' && button.key === "ArrowDown" ||
      keysmall === '→' && button.key === "ArrowRight" ||
      keysmall === 'Shift' && button.key === "Shift" && button.code === "ShiftLeft" ||
      keysmall === 'Alt' && button.key === "Alt" && button.code === 'AltLeft' ||
      keysmall === 'Ctrl' && button.key === "Control" && button.code === 'ControlLeft' ||
      keysmall === 'Win' && button.key === "Meta"
    ) {
      return ActiveKeyButton(keyboardButton[i])

    } else if (keysmall === button.key ||
      keysmall.toLowerCase() === button.key ||
      keysmall.slice(1) === button.key ||
      keysmall === 'Ctrl' && button.key === "Control"
    ) {
      ActiveKeyButton(keyboardButton[i]);
    }
  }
});

const keyboardArea = document.querySelector('.keyboard-area');

function writeKeyButton(e) {
  if (e.length === 1) {
    keyboardArea.textContent += e;
  } else if (e.length === 2) {
    keyboardArea.textContent += e.slice(1);
  } else if (e.textContent === ' ') {
    keyboardArea.textContent += ' ';
  }
  else if (e.length === 9) {
    console.log(keyboardArea.textContent.slice(0, -1));
    keyboardArea.textContent = keyboardArea.textContent.slice(0, -1);
  }
}

