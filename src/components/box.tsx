import { useState } from "react";

export default function Box() {
  const [position, setPosition] = useState({ x: 100, y: 200 });

  return (
    <div>
      <div
        className="fixed top-0 left-0 h-10 w-10 bg-blue-500 rounded"
        style={{
          top: position.y,
          left: position.x,
        }}
      ></div>

      <div>
        <input
          type="number"
          className="border rounded px-2 text-sm"
          placeholder="X position"
          value={position.x}
          onChange={(e) => {
            const { valueAsNumber } = e.target;

            // setPosition(position.x = value) // This will not work
            // ;

            setPosition({ x: Number(valueAsNumber), y: position.y });

            // setNumber(prev => {
            //   return prev + 1;
            // })
          }}
        />
        <input
          type="number"
          className="border rounded px-2 text-sm"
          placeholder="Y position"
          value={position.y}
          onChange={(e) => {
            const { valueAsNumber } = e.target;
            setPosition({ x: position.x, y: Number(valueAsNumber) });
          }}
        />
      </div>
    </div>
  );
}
