import { FC, forwardRef, useImperativeHandle, useRef } from "react";

// // Old Way
// const Input = forwardRef<
//   HTMLInputElement,
//   React.InputHTMLAttributes<HTMLInputElement>
// >((props, ref) => {
//   return (
//     <input
//       ref={ref}
//       type="text"
//       className="border border-gray-300 p-2 rounded text-sm w-64"
//       {...props}
//     />
//   );
// });

// New Way
type InputProps = {
  ref: React.Ref<{ focus: () => void }>;
};

const Input: FC<InputProps> = ({ ref }) => {
  const realRef = useRef<HTMLInputElement | null>(null);

  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        realRef.current?.focus();
      },
    };
  });

  return (
    <input
      ref={realRef}
      type="text"
      className="border border-gray-300 p-2 rounded text-sm w-64"
    />
  );
};

export default Input;
