let result = ""
for (let i=0; i <= 100; i++) {
    if (i % 3 !== 0 && i % 5 !== 0 ) {
        result += `${i} `
    }
    if (i % 3 == 0 && i % 5 !== 0 && i > 1) {
        result += "Fizz "
    } 
    if (i % 5 == 0 && i % 3 !== 0 && i > 1) {
        result += "Buzz "
    } 
    if (i % 3 == 0 && i % 5 == 0 && i > 1) {
        result += "FizzBuzz "
    }
}
console.log(result)