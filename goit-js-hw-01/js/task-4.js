const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let droidAmount;

droidAmount = prompt('Какое количество дроидов желаете купить?');

if (droidAmount === null) {
    alert ('Отменено пользователем');
} else if (isNaN(droidAmount)) {
    alert ('ВВедите число');
} else {
    droidAmount = Number(Math.round(droidAmount));
    checkDroid (droidAmount);
}

function checkDroid (droidAmount) {
    if (droidAmount <= 0) {
        console.log('Введите число больше 0');
    } else {
        totalPrice = droidAmount * pricePerDroid;
    }

    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
    } else {
        const creditsBalance = credits - totalPrice;
        console.log(`Вы купили ${droidAmount} дроидов, на счету осталось ${creditsBalance} кредитов.`);
    }
}



