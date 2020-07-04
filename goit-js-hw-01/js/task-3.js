const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const adminInput = prompt('Введите пароль (jqueryismyjam)');

if (adminInput === null) {
    message = 'Отменено пользователем';
    alert (message);
} else if(adminInput === ADMIN_PASSWORD) {
    message = 'Добро пожаловать';
    alert (message);
} else {
    message = 'Доступ запрещен, неверный пароль!';
    alert (message);
}
