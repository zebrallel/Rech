function main(s) {
    let longest = ''
    let cur = ''

    for (const i of s) {
        cur += i

        if (isValid(cur)) {
            if (cur.length > longest.length) {
                longest = cur
            }
        } else {
            cur = shiftFromHead(cur)
        }
    }

    return longest.length
}

function shiftFromHead(s) {
    while (!isValid(s)) {
        s = s.substring(1)
    }

    return s
}

function isValid(s) {
    if (!s) {
        return true;
    }

    const left = ["("];
    const stack = [];
    const right = {
        ")": "(",
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
        return true;
    } else {
        return false;
    }
}

console.log(main('(()'))
