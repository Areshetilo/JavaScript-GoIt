const logItems = function(array) {
    for (let i = 0; i < array.length; i += 1) {
        console.log(`#${i + 1} это ${array[i]}`)
    }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

logItems([10, 9, 8, 7, 6, 5, 4, 3]);

//  Проверка работает
