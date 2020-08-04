class Car {
    constructor({name ='car', speed = 0, price = 0, maxSpeed = 0, isOn = false, distance = 0}) {
        this.name = name;
        this.speed = speed;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;
    }

    static getSpecs(car) {
        console.log(`
        Car: ${car.name}
        Max Speed: ${car.maxSpeed}
        Speed: ${car.speed}
        Engine is On: ${car.isOn}
        Distance: ${car.distance}
        Price: ${car.price}`)
    }
}

const car = new Car ({name: 'Ford', maxSpeed: 200, price: 2000 });

console.log(car);
Car.getSpecs(car);


// Напиши класс Car с указанными свойствами и методами.
//
//     class Car {
//     /*
//      * Добавь статический метод `getSpecs(car)`,
//      * который принимает объект-машину как параметр и выводит
//      * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//      */
//
//     /*
//      * Конструктор получает объект настроек.
//      *
//      * Добавь свойства будущеего экземпляра класса:
//      *  speed - текущая скорость, изначально 0
//      *  price - цена автомобиля
//      *  maxSpeed - максимальная скорость
//      *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//      *  distance - общий киллометраж, изначально 0
//      */
//     constructor() {}
//
//     /*
//      * Добавь геттер и сеттер для свойства price,
//      * который будет работать с свойством цены автомобиля.
//      */
//
//     /*
//      * Добавь код для того чтобы завести автомобиль
//      * Записывает в свойство isOn значение true
//      */
//     turnOn() {}
//
//     /*
//      * Добавь код для того чтобы заглушить автомобиль
//      * Записывает в свойство isOn значение false,
//      * и сбрасывает текущую скорость в 0
//      */
//     turnOff() {}
//
//     /*
//      * Добавялет к свойству speed полученное значение,
//      * при условии что результирующая скорость
//      * не больше чем значение свойства maxSpeed
//      */
//     accelerate(value) {}
//
//     /*
//      * Отнимает от свойства speed полученное значение,
//      * при условии что результирующая скорость не меньше нуля
//      */
//     decelerate(value) {}
//
//     /*
//      * Добавляет в поле distance киллометраж (hours * speed),
//      * но только в том случае если машина заведена!
//      */
//     drive(hours) {}
// }
//
// const mustang = new Car({ maxSpeed: 200, price: 2000 });
//
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);
//
// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
//
// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();
//
// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
//
// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000