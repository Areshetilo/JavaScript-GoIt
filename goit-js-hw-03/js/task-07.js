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
    createTransaction(amount, type) {

        return {
            id: this.transactions.length + 1,
            amount: amount,
            type: type,
        }

    },
    deposit(amount) {
        this.balance += amount;
        this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
        return `На счет добавлена сумма ${amount} грн`
    },
    withdraw(amount) {
        if (amount < this.balance) {
            this.balance -= amount;
            this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
            return `Сумма снятия ${amount} грн`;
        }
        return `Недостаточно средств на счету`;
    },
    getBalance() {
        return `На вашем счету ${this.balance} грн`;
    },
    getTransactionDetails(id) {
        return  this.transactions.find(item => item.id === id);
    },
    getTransactionTotal(type) {
        let totalTransaction = 0;
        for (const obj of this.transactions) {
            if (obj.type === type) {
                totalTransaction += obj.amount;
            }
        }
        return `Общая сумма по ${type} составляет ${totalTransaction} грн`;
    },
};

console.log(account.deposit(1000));
console.log(account.deposit(1000));
console.log(account.transactions);
console.log(account.withdraw(543));
console.log(account.withdraw(53));
console.log(account.transactions);
console.log(account.getBalance());
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
