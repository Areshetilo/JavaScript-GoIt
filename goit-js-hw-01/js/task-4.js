const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let droidAmount;

droidAmount = prompt('Какое количество дроидов желаете купить?');

droidAmount === null ? console.log ('Отменено пользователем') : droidAmount = Number(Math.round(droidAmount));

droidAmount <= 0 ? console.log ('Введите число больше 0') : totalPrice = droidAmount * pricePerDroid;

if (totalPrice > credits) {
    console.log ('Недостаточно средств на счету!');
} else {
    const creditsBalance = credits - totalPrice;
    console.log (`Вы купили ${droidAmount} дроидов, на счету осталось ${creditsBalance} кредитов.`);
}




