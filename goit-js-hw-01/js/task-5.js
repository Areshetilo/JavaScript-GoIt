const userInput = prompt ('Укажите страну доставки');
let country;

if (userInput === null) {
    alert ('Отменено пользователем');
} else {
    country = userInput.toLowerCase();
    checkCountry (country);
}

function checkCountry (currentCountry) {
   let deliveryCountry = currentCountry[0].toUpperCase() + currentCountry.slice(1);

    switch (currentCountry) {
        case 'китай':
            console.log(`Доставка в ${deliveryCountry} будет стоить 100 кредитов`);
            break;
        case 'чили':
            console.log(`Доставка в ${deliveryCountry} будет стоить 250 кредитов`);
            break;
        case 'австралия':
            console.log(`Доставка в ${deliveryCountry} будет стоить 170 кредитов`);
            break;
        case 'индия':
            console.log(`Доставка в ${deliveryCountry} будет стоить 80 кредитов`);
            break;
        case 'ямайка':
            console.log(`Доставка в ${deliveryCountry} будет стоить 120 кредитов`);
            break;
        default:
            console.log(`В вашей стране доставка не доступна`);
    }
}