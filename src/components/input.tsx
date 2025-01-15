import { FC, useEffect, useRef } from "react";

type InputProps = {} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = (props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <input
      ref={inputRef}
      type="text"
      className="border border-gray-300 p-2 rounded text-sm w-64"
      {...props}
    />
  );
};

export default Input;
