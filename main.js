// this

// 1. Global scope
// 2. Arrow function scope -> function -> methods
// 3. Call, apply, bind
// 4. function constructor


// 1. Global scope

// console.log(this)


// 2. Arrow function scope -> function -> methods

// const a = () => {
//   console.log(this)
// }
// a()

// const car = {
//   brand: "bmw",
//   showBrand: () => {
//     console.log(this.brand)
//   }
// }
//
// car.showBrand()

// "use strict"
// function foo() {
//   console.log(this)
// }
//
// foo()


// const foo = () => {
//   console.log(this.brand)
// }

// let car = {
//   brand: "bmw",
//   showBrand() {
//     console.log(this.brand)
//   }
// }
//
// // car.showBrand()
// const newCar = car
// car = null
// newCar.showBrand()

// const car1 = {
//   brand: "bmw"
// }
//
// const car2 = {
//   brand: "mercedes"
// }
//
// function showBrand() {
//   console.log(this.brand)
// }
//
// car1.sb = showBrand
// car2.sb = showBrand
//
// car1.sb()
// car2.sb()


// 3. Call, apply, bind

// const scooter = {
//   color: "yamaha",
//   showBrand() {
//     console.log(this.color)
//   }
// }
//
// const car1 = {
//   color: "red",
//   showColor() {
//     console.log(this.color)
//   }
// }
//
// const car2 = {
//   color: "yellow",
//   showColor() {
//     console.log(this.color)
//   }
// }

// car2.showColor.call(car1, 10, 20)
// car2.showColor.apply(car1, [10, 20])
// car2.showColor.bind(car1, 10, 20)()

// car2.showColor.bind(scooter).call(car1)


// 4. function constructor

// function Car(brand, color) {
//   // {}
//   this.brand = brand // {brand: "bmw"}
//   this.color = color // {brand: "bmw", color: "red"}
//   // return {brand: "bmw", color: "red"}
// }
//
// const bmw = new Car("bmw", "red")
// const audi = new Car("audi", "black")
//
// console.log(bmw)
// console.log(audi)