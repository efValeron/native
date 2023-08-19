// sort

const names = ["Bob", "Alex", "Donald"]
// console.log(names.sort())
// сортирует строки по "алфавиту" "из коробки", т.е без доп. параметров


const names2 = ["Bob", "alex", "bob", "Alex", "Donald", "Юрий", "игорь", "1000"]
// console.log(names2.sort())
// Сначала числа, лат алфавит заглавные, лат алфавит строчные, друг алфавит заглавные, друг алфавит строчные...
// сортирует строки по unicode "из коробки", т.е без доп. параметров

// сртрисует мутабельно
// возвращает себя же, массив (ссылку)

const numbers = [100, 9, 22, 777]
// console.log(numbers.sort((a, b) => a - b))
// для остальных случаев необходимо передать функцию сравнения в качестве параметра
// (a, b) => a - b
// Если разница отрицательна, числа остаються, если разница положительна - числа меняются местами

// вместе с sort часто используют reverse()
// Итог: со строками работает без доп. параметров, со числами - с доп. параметром


const students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 95
  },
  {
    name: "Alex",
    age: 22,
    isMarried: true,
    scores: 89
  },
  {
    name: "Helge",
    age: 24,
    isMarried: true,
    scores: 90
  },
  {
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120
  },
  {
    name: "John",
    age: 19,
    isMarried: false,
    scores: 121
  },
  {
    name: "alex",
    age: 22,
    isMarried: true,
    scores: 89
  },
]

// console.log(students.sort((a, b) => a.age - b.age))
// сортирует массив объектов по возрасту

// console.log(students.sort((a, b) => a.name.localeCompare(b.name)))
// сортирует массив объектов по имени в алфавитном порядке


// bubble sort

const shufledNums = [5, 4, 3, 2, 1]

const bubbleSort = (arr) => {
  let swapped
  for (let j = 0; j < arr.length - 1; j++) {
    swapped = false
    for (let i = 0; i < arr.length - 1 - j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true
      }
    }
    if (!swapped) break
  }
}

bubbleSort(shufledNums)
console.log(shufledNums)
