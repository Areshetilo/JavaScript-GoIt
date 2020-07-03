const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const adminInput = prompt('Введите пароль');
// console.log(adminInput);
if (adminInput === null) {
    message = 'Отменено пользователем';
    confirm (message);
} else if(adminInput === ADMIN_PASSWORD) {
    message = 'Добро пожаловать';
    confirm (message);
} else {
    message = 'Доступ запрещен, неверный пароль!';
    confirm (message);
}
