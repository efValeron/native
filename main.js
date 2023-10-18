// class

// const car1 = {
//   brand: "bmw",
//   maxSpeed: 200,
//   startEngine() {
//     console.log(`Start ${this.brand}`)
//   }
// }
//
// const car2 = {
//   brand: "kia",
//   maxSpeed: 220,
//   startEngine() {
//     console.log(`Start ${this.brand}`)
//   }
// }


// function createCar(brand, maxSpeed) {
//   return {
//     brand,
//     maxSpeed,
//     startEngine() {
//       console.log(`Start ${this.brand}`)
//     }
//   }
// }
//
// const car1 = createCar("bmw", 200)
// const car2 = createCar("kia", 220)
// console.log(car1)
// console.log(car2)


// function Car(brand, maxSpeed) {
//   this.brand = brand
//   this.maxSpeed = maxSpeed
//   // this.startEngine = function () {
//   //   console.log(`Start ${this.brand}`)
//   // }
// }
//
// Car.prototype.startEngine = function () {
//   console.log(`Start ${this.brand}`)
// }
// Car.prototype.showMaxSpeed = function () {
//   console.log(`Max speed: ${this.maxSpeed}`)
// }
//
// const car1 = new Car("bmw", 200)
// const car2 = new Car("kia", 220)
// car1.startEngine()
// car2.showMaxSpeed()


class Car {
  #brand

  constructor(brand, maxSpeed) {
    this.#brand = brand
    this.maxSpeed = maxSpeed
  }

  startEngine() {
    console.log(`Start ${this.#brand}`)
  }

  showMaxSpeed() {
    console.log(`Max speed: ${this.maxSpeed}`)
  }

  get brand() {
    return this.#brand
  }

  set brand(newBrand) {
    this.#brand = newBrand
  }

  static whoFaster(car1, car2) {
    return car1.maxSpeed > car2.maxSpeed ? car1.brand : car2.brand
  }
}

const car1 = new Car("bmw", 200)
const car2 = new Car("kia", 220)

// console.log(car1)
// console.log(car2)

// console.log(car1.brand)
// car1.brand = "toyota"
// console.log(car1.brand)

// console.log(`${Car.whoFaster(car1, car2)} faster`)


class SuperCar extends Car {
  constructor(brand, maxSpeed, wings) {
    super(brand, maxSpeed)
    this.wings = wings
  }

  fly() {
    console.log(`I'm flying ${this.brand}`)
  }
}

const superCar1 = new SuperCar("super porsche", 740, 4)

console.log(superCar1)
console.log(superCar1.brand)
superCar1.fly()
console.log(`${SuperCar.whoFaster(superCar1, car1)} faster`)