import { useState } from "react";
import "../Loading.css";

export default function Demo() {
  const [loading, setLoading] = useState(true);
  const handleSetLoad = () => setLoading(false);
  return (
    <div className="w-900px-min w-800px flex flex-col items-center justify-center p-8">
      <div className="font-bold itimFont italic text-3xl mb-6">
        Featured Works
      </div>
      {loading ? (
        <>
          <img className="w-11/12 rounded invisible absolute" src="./demo.gif"
          onLoad={handleSetLoad}></img>
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </>
      ) : (
        <img className="w-11/12 rounded" src="./demo.gif"
        onLoad={handleSetLoad}></img>
      )}

    </div>
  );
}
