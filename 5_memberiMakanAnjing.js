const count = (input) => {
    input.sort((a, b) => a - b)
    let total = 0
    let medium = Math.ceil(input.length / 2)
    
    for (let i = 0; i<input.length; i++) {
        if (i > medium) {
            total += i - medium
        } else {
            total += medium - i
        }
    }
    return total
}
let input = [1, 0, 5]
let result = count(input)
console.log(result)
