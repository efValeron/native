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
const checkStart = (str, subStr) => {
  return str.toLowerCase().startsWith(subStr.toLowerCase())
}
// console.log(checkStart("Incubator", "inc"))

// 3
const truncateString = (str, maxLength) => {
  return str.split("").slice(0, maxLength).join("") + "..."
}
// console.log(truncateString("lorem ipsum dolor sit amet", 8))

// 4
const getMinLengthWord = (str) => {
  if (typeof str !== "string") return null
  return str.split(" ").sort((a, b) => a.length - b.length)[0]
}
// console.log(getMinLengthWord("bifwgw iwgniwngw jwjfjwf qj"))

// 5
const setUpperCase = (str) => {
  return str.toLowerCase().split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
}
// console.log(setUpperCase("incuBator Wobf wnHWJ"))

// 6
const hasLetters = (str, letters) => {
  for (const l of letters.split("")) {
    if (!str.split("").includes(l)) return false
  }
  return true
}
console.log(hasLetters("incuBator Wobf wnHWJ", "bw"))