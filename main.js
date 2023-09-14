// замыкание, lexical environment
// рекурсия, recursive


// let car = "bmw"
//
// const startEngine = () => {
//   // const car = "kia"
//   console.log(`start ${car}`)
// }
//
// car = "audi"
//
// startEngine()

// globalLexicalEnvironment
// gle {} => null

const counterCreator = () => { // gle {counterCreator: fn} => null
  // [[Env]] => gle
  // counterCreatorLE {count: 0}
  let count = 0
  console.log(this)

  return () => {
    // [[Env]] => counterCreatorLE
    // counterLE {}
    console.log(++count) // ищет count, не находит в своей области (counterLE), видит в counterCreatorLE, берет оттуда
  }
}

const counter1 = counterCreator() // gle {counterCreator: fn, counter: fn} => null
const counter2 = counterCreator()

counter1() // counter - ссылка на функцию возвращаемую функцией counterCreator
counter1()
counter1()

counter2()
counter2()
counter2()