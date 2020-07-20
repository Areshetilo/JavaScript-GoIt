/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
    balance: 0,
    transactions: [],
    createTransaction(amount, type) {},
    deposit(amount) {},
    withdraw(amount) {},
    getBalance() {},
    getTransactionDetails(id) {},
    getTransactionTotal(type) {},
};