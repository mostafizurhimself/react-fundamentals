import React, { useRef } from "react";
import Input from "./input";

export default function FocusInput() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <Input ref={inputRef} />

      <button className="btn btn-primary" onClick={handleClick}>
        Focus
      </button>
    </>
  );
}
