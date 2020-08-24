const inputRef = document.querySelector('#validation-input');

const inputValidCheck = function (event) {
    if (event.target.value.length > event.target.dataset.length ||
        event.target.value.length < event.target.dataset.length) {
        event.target.classList.remove('valid');
        event.target.classList.add('invalid');
    } else {
    event.target.classList.remove('invalid');
    event.target.classList.add('valid');
    }
}

inputRef.addEventListener('blur', inputValidCheck);