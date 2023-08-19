const student = {
  name: "Bob",
  age: 22,
  isMarried: true,
  address: {
    city: "New York",
    country: "USA"
  },
  parents: {
    mother: {
      name: "Ann",
      age: 45
    },
    father: {
      name: "John",
      age: 50
    }
  }
}

const student2 = structuredClone(student)
// const student2 = {...student}
student2.parents.mother.name = "Jane"
student2.name = "Kris"
student2.address.city = "London"

// console.log(student)
// console.log(student2)

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const matrix2 = structuredClone(matrix)
// const matrix2 = [...matrix]
matrix2[0][1] = 100

console.log(matrix)
console.log(matrix2)