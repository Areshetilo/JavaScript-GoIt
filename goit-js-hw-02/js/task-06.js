let input;
const numbers = [];
let total = 0;

do {
    input = prompt ('Введите число!');

    if (input === null) {
        alert('Отменено пользователем');
        break;
    } else if (isNaN(+input)) {
        alert('Введите ЧИСЛО!!!');
        break;
    } else {
        numbers.push(+input);
    }

} while (input !== null);

for (const number of numbers) {
    total += number;
}

if (numbers.length > 0) {
    console.log(`Общая сумма чисел равна ${total}`);
} else {
    console.log('Нужно ввести число для подсчета');
}
