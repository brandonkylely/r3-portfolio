import { Suspense } from "react";
import "../Loading.css";

export default function Demo({}) {
  return (
    <div className="w-900px-min w-800px flex flex-col items-center justify-center p-8">
      <div className="font-bold itimFont italic text-3xl mb-6">
        Featured Works
      </div>
      <Suspense fallback={(<div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>)}>
        <img className="w-11/12 rounded" src="./demo.gif"></img>
      </Suspense>
    </div>
  );
}
