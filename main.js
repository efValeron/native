// class Car {
//   constructor(brand, speed) {
//     this.brand = brand
//     this.speed = speed
//   }
//
//   startEngine() {
//     console.log(`${this.brand.toUpperCase()} engine started`)
//   }
// }
//
// const car1 = new Car("mercedes", 120)
// const car2 = new Car("bmw", 100)
//
// console.log(car1.__proto__ === Car.prototype)


// const a = new Array()
// const a = []

// console.log(a.__proto__ === Array.prototype)


// const a = 24
//
// console.log(a.__proto__ === Number.prototype)


// const obj = {
//   test() {
//   }
// }
//
// const func = obj.test
//
// const obj1 = new func()
// console.log(obj1)


// class Car {
//   constructor(brand) {
//     this.brand = brand
//   }
//
//   startEngine() {
//     console.log("start")
//   }
//
//   static compareCars(car1, car2) {
//     console.log("compare")
//   }
// }
//
// const car1 = new Car("bmw")
//
// class SuperCar extends Car {
//   constructor(brand) {
//     super(brand)
//   }
//
//   fly() {
//     console.log("fly")
//   }
// }
//
// const superCar1 = new SuperCar("superBmw")
//
// SuperCar.compareCars()