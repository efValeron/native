// 1
const repeatString = (str, times, separator) => {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += str + (i !== times - 1 ? separator : "")
  }
  return result;
}
// console.log(repeatString("yo", 1, ", "))

// 2
const checkStart = (str, subStr) => str.toLowerCase().startsWith(subStr.toLowerCase())
// console.log(checkStart("Incubator", "inc"))

// 3
const truncateString = (str, maxLength) => str.split("").slice(0, maxLength).join("") + "..."
// console.log(truncateString("lorem ipsum dolor sit amet", 8))

// 4
const getMinLengthWord = (str) => !str || typeof str !== "string" ? null : str.split(" ").sort((a, b) => a.length - b.length)[0]
console.log(getMinLengthWord(NaN))

// 5
const setUpperCase = (str) => str.toLowerCase().split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
// console.log(setUpperCase("incuBator Wobf wnHWJ"))

// 6
const hasLetters = (str, letters) => {
  const lettersArray = [...letters.toLowerCase()]

  for (const letter of lettersArray) {
    const strParts = str.toLowerCase().split(letter)

    if (strParts.length !== lettersArray.join('').split(letter).length) {
      return false
    }
  }
  return true
}
// console.log(hasLetters("ada", "aa"))