// 1. Simple object
let man = {
  name: 'John',
  age: 28
};

let manFullCopy = structuredClone(man)  // ✔


// 2. Array of primitives
let numbers = [1, 2, 3];

let numbersFullCopy = structuredClone(numbers)  // ✔


// 3. Object inside an object
let man1 = {
  name: 'John',
  age: 28,
  mother: {
    name: 'Kate',
    age: 50
  }
};

let man1FullCopy = structuredClone(man1)  // ✔


// 4. Array of primitives inside an object
let man2 = {
  name: 'John',
  age: 28,
  friends: ["Peter", "Steven", "William"]
};

let man2FullCopy = structuredClone(man2)  // ✔


// 5 Array of objects
let people = [
  {name: "Peter", age: 30},
  {name: "Steven", age: 32},
  {name: "William", age: 28}
];

let peopleFullCopy = structuredClone(people)


// 6 Array of objects inside object
let man3 = {
  name: 'John',
  age: 28,
  friends: [
    {name: "Peter", age: 30},
    {name: "Steven", age: 32},
    {name: "William", age: 28}
  ]
};

let man3FullCopy = structuredClone(man3) // ✔


// 7 Object inside an object, inside an object
let man4 = {
  name: 'John',
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15
    }
  }
};

let man4FullCopy = structuredClone(man4) // ✔

// 8 Array of objects inside object -> object
let man5 = {
  name: 'John',
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15
    },
    parents: [
      {name: "Kevin", age: 80},
      {name: "Jennifer", age: 78},
    ]
  }
};

let man5FullCopy = structuredClone(man5) // ✔


// 9 Object inside an object -> array -> object ->  object
let man6 = {
  name: 'John',
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15
    },
    parents: [
      {
        name: "Kevin",
        age: 80,
        favoriteDish: {
          title: "borscht"
        }
      },
      {
        name: "Jennifer",
        age: 78,
        favoriteDish: {
          title: "sushi"
        }
      },
    ]
  }
};

let man6FullCopy = structuredClone(man6) // ✔


//10 Array of objects inside an object -> object -> array -> object ->  object
let man7 = {
  name: 'John',
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15
    },
    parents: [
      {
        name: "Kevin",
        age: 80,
        favoriteDish: {
          title: "borscht",
          ingredients: [
            {title: "beet", amount: 3},
            {title: "potatoes", amount: 5},
            {title: "carrot", amount: 1},
          ]
        }
      },
      {
        name: "Jennifer",
        age: 78,
        favoriteDish: {
          title: "sushi",
          ingredients: [
            {title: "fish", amount: 1},
            {title: "rise", amount: 0.5}
          ]
        }
      },
    ]
  }
};

let man7FullCopy = structuredClone(man7) // ✔