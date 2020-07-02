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
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log(`You clicked ${count} times`);
    }, 3000);
  });

  return (
    <div>
      <h1>this is hooks page</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default HooksPage;
