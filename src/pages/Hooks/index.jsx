import React, { useState, useEffect } from "react";

function useTimeout(time, callback, deps) {
  let timeoutId;

  useEffect(() => {
    timeoutId = setTimeout(() => {
      callback();
    }, time);

    return () => {
      clearTimeout(timeoutId);
    };
  }, deps);
}

function HooksPage() {
  const [count, setCount] = useState({ num: 0 });
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log("use effect execute, num: ", num);
  }, [count]);

  // function handleAlertClick() {
    // setTimeout(() => {
    //   alert("You clicked on: " + count.num);
    // }, 3000);
    useTimeout(3000, () => {
      alert('num: ' + num)
    }, [num])
  // }

  return (
    <div>
      <h1>this is hooks page</h1>
      <div>
        count: {count.num}
        <button
          style={{ marginLeft: 20 }}
          onClick={() => {
            setCount({ num: count.num + 1 });
          }}
        >
          add
        </button>
      </div>
      <div>
        num: {num}
        <button
          style={{ marginLeft: 20 }}
          onClick={() => {
            setNum(num + 1);
          }}
        >
          add
        </button>
      </div>
      <button >show count after 3s</button>
    </div>
  );
}

export default HooksPage;
