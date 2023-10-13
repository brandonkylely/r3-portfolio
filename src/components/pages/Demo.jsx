import React from "react";
import { Suspense } from "react";
import Loading from "../Loading";

export default function Demo({}) {
  return (
    <div className="w-900px-min w-800px flex flex-col items-center justify-center p-8">
      <div className="font-bold itimFont italic text-3xl mb-6">
        Featured Works
      </div>
      <Suspense fallback={<Loading />}>
        <img className="w-11/12 rounded" src="./demo.gif"></img>
      </Suspense>
    </div>
  );
}
