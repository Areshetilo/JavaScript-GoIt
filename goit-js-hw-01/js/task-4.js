const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let droidAmount;
let message;

droidAmount = prompt('Какое количество дроидов желаете купить?');

if (droidAmount === null) {
    message = 'Отменено пользователем';
    alert (message);
} else {
    droidAmount = Number(Math.round(droidAmount));
}

if (droidAmount <= 0) {
    message = 'Введите число больше 0';
    alert (message);
} else {
    totalPrice = droidAmount * pricePerDroid;
}

if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
    alert (message);
} else {
    const creditsBalance = credits - totalPrice;
    message = `Вы купили ${droidAmount} дроидов, на счету осталось ${creditsBalance} кредитов.`;
    console.log (message);
}




