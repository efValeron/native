const students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85,

  },
  {
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 89
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
    scores: 100
  }
]

// 1 map
const getNames= (arr) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i].name
  }
  return result
}

// 2 map
const getUpdatedStudents = (arr) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result[i] = {...arr[i], isStudent: true}
  }
  return result
}

// 3 map
const getMappedArray = (arr, func) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result[i] = func(arr[i])
  }
  return result
}


// 1 filter
const getFilteredArray = (arr, func) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) result[result.length] = arr[i]
  }
  return result
}


// 1 push
const pushToArray = (arr, el) => {
  arr[arr.length] = el
  return arr.length
}

console.log(isIncludes(students, { name: 'John', age: 19, isMarried: false, scores: 100 },))
console.log(students)