class StringBuilder {
    constructor(str) {
        this._value = str;
    }
    get value() {
        return this._value;
    }
    append(str) {
        return (this._value += str);
        // this._value = `${this._value}${str}`; 2 вариант
    }
    prepend(str) {
        return (this._value = str + this._value);
        // this._value = `${str}${this._value}`; 2 вариант
    }
    pad(str) {
        return (this._value = str + this.value + str);
        // this._value = `${str}${this._value}${str}`; 2 вариант
    }
}


const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='