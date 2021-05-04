const selfNumber = (start, end) => {
  let nonSelf = []
  let all = []

  for (let i = start; i <= end; i++) {
    let  str = i.toString()
    all.push(i)
    let numberLength = str.length
    if (numberLength == 1) {
      sum = i + parseInt( str[0])
      nonSelf.push(sum)
    } else if (numberLength == 2) {
      sum = i + parseInt( str[0]) + parseInt( str[1])
      nonSelf.push(sum)
    } else if (numberLength == 3) {
      sum = i + parseInt( str[0]) + parseInt( str[1]) + parseInt( str[2])
      nonSelf.push(sum)
    } else if (numberLength == 4) {
      sum = i + parseInt( str[0]) + parseInt( str[1]) + parseInt( str[2]) + parseInt( str[3])
      nonSelf.push(sum)
    }
  }

  let selfNum = all.filter(x => !nonSelf.includes(x))

  let totalSelfNum = 0
  selfNum.forEach(num => {
    totalSelfNum += num
  })

  return totalSelfNum.toLocaleString()
}

let result = selfNumber(0, 5000)
console.log(result)