import { useState } from "react";

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    // setPending(pending + 1); // 0 + 1 = 1
    // await delay(3000);
    // setPending(pending - 1); // 0 - 1 = -1
    // setCompleted(completed + 1); // 0 + 1 = 1

    setPending(function (prev) {
      return prev + 1;
    }); // 0 + 1 = 1
    await delay(3000);
    setPending((prev) => prev - 1); // 1 - 1 = 0
    setCompleted((prev) => prev + 1); // 0 + 1 = 1
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleClick}
      >
        Buy
      </button>
    </div>
  );
}

function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
