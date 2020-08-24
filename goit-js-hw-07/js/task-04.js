/* Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса */


const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');
const showCounterValue = () => {
    valueRef.textContent = counterValue;
}
let counterValue = 0;

const decrement = function () {
    counterValue -= 1;
    showCounterValue ()
}
const increment = function () {
    counterValue += 1;
    showCounterValue ()
}

decrementBtnRef.addEventListener('click', decrement);
incrementBtnRef.addEventListener('click', increment);

