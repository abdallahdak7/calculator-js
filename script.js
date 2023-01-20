/** elements */
const keyboard = document.getElementById('keyboard');
const input = document.getElementById('input');
const operation = document.getElementById('operation');

/** event Listeners */
keyboard.addEventListener('click', handleButtonClick);

/**disable zoom feature in iOS by handling the touchmove event, and prevent the default behavior. */
document.addEventListener(
  'touchmove',
  function (event) {
    event.preventDefault();
  },
  { passive: false },
);

function handleButtonClick(event) {
  const btnValue = event.target.value;

  /** handle validations */
  validateInput(btnValue);

  /** handle back button */
  if (event.target.closest('#btn-back')) {
    input.innerText = input.innerText.slice(0, -1);
  }

  /** handle AC button */
  if (btnValue == 'clear') {
    operation.innerText = '';
    input.innerText = '';
  }

  /** handle operations */
  if ('%+-*/'.includes(btnValue)) {
    operation.innerText = btnValue;
  }

  /** max allowed numbers is 9 */
  if (input.innerText.length == 9) {
    return;
  }

  /** allow numbers only to the input */
  if ('.00123456789'.includes(btnValue)) {
    input.innerText += btnValue;
  }
}

function validateInput(value) {
  // if (value.split('.').length > 2) return;
}
