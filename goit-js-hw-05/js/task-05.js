class Car {
    static getSpecs(car) {
        console.log(`
        Автомобиль: ${car.name}
        Максимальная скорость: ${car.maxSpeed} км/час
        Текущая скорость: ${car.speed}
        Двигатель вкл/выкл: ${car.isOn}
        Пробег: ${car.distance}
        Цена: ${car.price} $`)
    }

    constructor({name ='car', speed = 0, price = 0, maxSpeed = 0, isOn = false, distance = 0}) {
        this.name = name;
        this._speed = speed;
        this._price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    get speed () {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }

    accelerate(value) {
        if((value+this._speed)<this.maxSpeed) {
            this._speed += value;
        }
    }

    decelerate(value) {
        if((this._speed-value)>0){
            this._speed -= value;
        }
    }

    turnOn() {
        this.isOn = true;
        console.log(`Двигатель включен`);
    }

    turnOff() {
        this.isOn = false;
        this.speed = 0;
        console.log(`Двигатель выключен`);
    }

    drive(hours) {
        this.isOn ? console.log(`Автомобиль проехал ${this.distance+=hours*this._speed} км`) : console.log(`А как же: "Завести машину?"`);
    }

}

const car = new Car ({name: 'Ford', maxSpeed: 200, price: 2000 });

console.log(car);
Car.getSpecs(car);
console.log(`Цена авто: ${car.price} $`);
car.price = 4000;
console.log(`Цена авто: ${car.price} $`);
console.log(`Текущая скорость: ${car.speed}км/час`);
car.turnOn();
car.speed = 100;
console.log(`Текущая скорость: ${car.speed}км/час`);
car.turnOff();
console.log(`Текущая скорость: ${car.speed}км/час`);


const mustang = new Car({name: 'Mustang', maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000