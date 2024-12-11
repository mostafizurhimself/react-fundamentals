import { FC, useState } from "react";

type CounterProps = {
  //   count: number;
};

// type FunctionalComponent<T> = (props: T) => JSX.Element;

// const DemoCounter: FunctionalComponent<CounterProps> = (props) => {
//   return <div></div>;
// };

// const useStateDemo = (value: unknown) => {
//   return [value, () => {}];
// };

const Counter: FC<CounterProps> = () => {
  //   let count = 0;

  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="space-y-4 flex flex-col items-center">
      <input type="text" className="border rounded" />
      <h1 className="font-semibold text-xl">
        Counter: <span>{count}</span>
      </h1>

      <button
        className="bg-purple-500 px-4 py-2 text-purple-50 rounded text-sm"
        onClick={handleClick}
      >
        Increment
      </button>
    </div>
  );
};

Counter;

export default Counter;
