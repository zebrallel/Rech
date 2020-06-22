function main(str) {
  let longest = [];
  let arr = [];

  function checkExistInArr(el) {
    return arr.includes(el);
  }

  function spliceFromHead(el){
    while (checkExistInArr(el)) {
      arr.shift()
    }
  }

  for (let i = 0; i < str.length; i++) {
    const el = str[i];


    if (!checkExistInArr(el)) {
      arr.push(el);
    } else {
      spliceFromHead(el)
      arr.push(el);
    }

    if (arr.length > longest.length) {
      longest = Array.from(arr);
    }
  }

  return longest
}

var res = main("abcabcbb");
console.log(res)
