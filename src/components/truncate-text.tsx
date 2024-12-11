import { FC, useState } from "react";

type TruncateTextProps = {
  value: string;
};

const TruncateText: FC<TruncateTextProps> = ({ value }) => {
  const [showMore, setShowMore] = useState(false);

  const truncate = (str: string, n: number) => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      {showMore ? value : truncate(value, 50)}
      <button onClick={handleShowMore} className="text-blue-500">
        show {showMore ? "less" : "more"}
      </button>
    </div>
  );
};

export default TruncateText;
