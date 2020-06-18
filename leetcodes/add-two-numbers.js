function covertListToArr(node) {
  const arr = [];
  let n = node;

  while (n) {
    arr.push(n.val);
    n = n.next;
  }

  return arr;
}

function covertArrToList(arr) {
  var startNode = {}
  var n = 1;

  arr.reduce(function(prev, cur){
    var next = n++ == arr.length ? null : {}

    prev.val = cur
    prev.next = next

    return next
  }, startNode)

  return startNode
}

var addTwoNumbers = function (l1, l2) {
  const a1 = covertListToArr(l1);
  const a2 = covertListToArr(l2);
  const [long, short] = a1.length > a2.length ? [a1, a2] : [a2, a1];
  const arr = [];
  let r = 0;

  for (let i = 0; i < long.length; i++) {
    const a = long[i];
    const b = short[i] || 0;
    let result = r + a + b;

    if (result > 9) {
      r = 1;
      result = result % 10;
    } else {
      r = 0;
    }

    arr.push(result);
  }

  if (r === 1) {
    arr.push(r);
  }

  return covertArrToList(arr);
};

var a = {
  val: 1,
  next: {
    val: 8,
    next: null
  }
}

var b = {
  val: 0,
  next: null
}

console.log(addTwoNumbers(a, b));
