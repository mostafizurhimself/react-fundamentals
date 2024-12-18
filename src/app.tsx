import { useState } from "react";
import RequestTracker from "./request-tracker";

const App = () => {
  const [number, setNumber] = useState<number>(0);

  // console.log("App render");

  return (
    <div className="flex items-center justify-center h-screen">
      {/* <h1>{number}</h1>
      <button
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => {
          setNumber(0 + 1);
          setNumber(0 + 1);
          setNumber(0 + 1);
          setNumber((prev) => {
            console.log("1st prev", prev);
            return prev + 1;
          });
          setNumber((prev) => {
            console.log("2nd prev", prev);
            return prev + 1;
          });
          setNumber((prev) => {
            console.log("3rd prev", prev);
            return prev + 1;
          });

          setNumber(number + 5); //5
          setNumber((prev) => prev + 5); // prev

          setNumber(number + 5); // 0 + 5 = 5
          setNumber((n) => n + 1); // 5 + 1 = 6
          setNumber(42);
        }}
      >
        Increment
      </button> */}

      {/* Request Tracker */}

      <RequestTracker />
    </div>
  );
};

export default App;
