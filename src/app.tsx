import { useRef, useState } from "react";

// function useRef<T>(initialValue: T): { current: T } {
//   const [ref, _unusedSetRef] = useState({ current: initialValue });

//   return ref;
// }

export default function App() {
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);

  const intervalRef = useRef<number | null>(null);

  // const countRef = {
  //   current: 0,
  // };

  // const updateCount = () => {
  //   countRef.current += 1;
  //   console.log(countRef.current);
  // };

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const secondPassed = (now - startTime) / 1000;

  return (
    <div className="flex h-screen flex-col gap-4 w-full items-center justify-center">
      <div>Time Passed: {secondPassed.toFixed(3)}</div>
      <div className="flex gap-4">
        <button
          onClick={handleStart}
          className="px-4 py-2 bg-blue-500 text-primary-50 rounded"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className="px-4 py-2 bg-red-500 text-primary-50 rounded"
        >
          Stop
        </button>
      </div>
    </div>
  );
}
