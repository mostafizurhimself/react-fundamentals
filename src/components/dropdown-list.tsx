import { use, useEffect, useState } from "react";

type Props = {
  items: { id: number; name: string }[];
  onChange: (id: number) => void;
};

const DropdownList = ({ items, onChange }: Props) => {
  const [prevItems, setPrevItems] =
    useState<{ id: number; name: string }[]>(items);

  const [selected, setSelected] = useState<number | null>(null);

  const handleChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(Number(e.target.value));
    onChange(Number(e.target.value));
  };

  if (prevItems !== items) {
    setPrevItems(items);
    setSelected(null);
  }

  console.log({ selected });

  return (
    <select
      value={String(selected)}
      onChange={handleChanged}
      className="border border-gray-300 p-2 rounded text-sm w-64"
    >
      <option value={""}>Select</option>
      {items.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default DropdownList;
