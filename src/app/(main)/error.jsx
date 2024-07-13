"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className=" h-full w-full text-center grid justify-center my-[180px]">
      <div>
        <h2 className=" text-xlg text-darkblue font-bold">
          Something went wrong!
        </h2>
        <button
          className=" px-[30px] rounded-md  font-semibold py-[16px] bg-neon text-center text-darkblue"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset
          }
        >
          Please refresh
        </button>
      </div>
    </div>
  );
}
