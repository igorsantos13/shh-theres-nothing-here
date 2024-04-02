"use client";
import { useEffect } from "react";

//error components MUST be a client component

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  //we use "useEffect" to log the error we got
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <h1>
      something went wrong =/{" "}
      <button
        onClick={() =>
          //attempt to recover by trying to re-render the segment
          reset()
        }
      >
        try again
      </button>
    </h1>
  );
};

export default Error;
