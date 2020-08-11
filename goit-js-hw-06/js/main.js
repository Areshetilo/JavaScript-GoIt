'use strict';
import users from './users.js';
console.table(users);

console.group('\t💥 TASK-01 \t💥');

/* ===task-01=== */
// Получить массив имен всех пользователей (поле name).

const getUserNames = users => {
    return users.map(user => user.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
console.groupEnd();

console.group('\t💥 TASK-02 \t💥');

/* ===task-02=== */
//Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color); // вернет 3 объекта
};

console.table(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
console.groupEnd();

console.group('\t💥 TASK-03 \t💥');

/* ===task-03=== */
//Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
    return users.filter(user => user.gender === gender).map(user => user.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
console.groupEnd();

console.group('\t💥 TASK-04 \t💥');

/* ===task-04=== */
//Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => {
    return users.filter(user => user.isActive)
};

console.table(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
console.groupEnd();

console.group('\t💥 TASK-05 \t💥');

/* ===task-05=== */
//Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) => {
    return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
console.groupEnd();

console.group('\t💥 TASK-06 \t💥');

/* ===task-06=== */
//Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) => {
    return users.filter(user => user.age > min && user.age < max);
};

console.table(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.table(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

console.groupEnd();

console.group('\t💥 TASK-07 \t💥');

/* ===task-07=== */
//Получить общую сумму баланса (поле balance) всех пользователей.
const calculateTotalBalance = users => {
    return users.reduce((acc, user) => acc + user.balance, 0);
};

console.log(`Сумма баланса всех пользовотелей = ${calculateTotalBalance(users)}`); // 20916

console.groupEnd();

console.group('\t💥 TASK-08 \t💥');

/* ===task-08=== */
//Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName)).map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

console.groupEnd();

console.group('\t💥 TASK-09 \t💥');

/* ===task-09=== */


console.groupEnd();

console.group('\t💥 TASK-10 \t💥');

/* ===task-10=== */


console.groupEnd();