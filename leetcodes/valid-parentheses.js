function main(s) {
  if (!s) {
    return true;
  }

  const left = ["(", "{", "["];
  const stack = [];
  const right = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const i of s) {
    if (left.includes(i)) {
      stack.push(i);
    } else {
      const target = right[i];

      if (target === stack.pop()) {
        continue;
      } else {
        return false;
      }
    }
  }

  if (stack.length === 0) {
    return true
  }else{
    return false
  }
}

var res = main("((()])");
console.log(`result: ${res}`)
