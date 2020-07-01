function main(s) {
    let longest = ''

    for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j <= s.length; j++) {
        const cur = s.substring(i, j)

        if (isValid(cur) && cur.length > longest.length) {
          longest = cur
        }
      }
    }

    return longest.length
}

function isValid(s) {
    if (!s) {
        return true;
    }

    if (s[0] === ')') {
      return false
    }

    let sum = 0;

    for (const i of s) {
        if (i === '(') {
          sum++
        } else {
          if (sum == 0) {
            return false
          }else{
            sum--
          }
        }
    }

    return sum === 0
}

console.log(main(")()())))))((())))((()))"))
