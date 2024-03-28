"use client";

import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }
  return (
    <>
      <span>{counter}</span>
      <br />
      <button
        className="border-2 rounded-md border-black"
        onClick={() => setCounter((c) => c + 1)}
      >
        make numba go up
      </button>
    </>
  );
}
