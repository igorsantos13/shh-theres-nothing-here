"use client";

import { Metadata } from "next";
import { useState } from "react";
import logo from "../public/next.svg";

export const metadata: Metadata = {
  title: "Counter!",
  description: "this isnt a page i guess",
  keywords: ["HTML", "CSS", "Javascript", "Programação"],
  openGraph: {
    images: logo,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

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
