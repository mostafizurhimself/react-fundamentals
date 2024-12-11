import Counter from "./components/conter";
import Gallary from "./components/gallary";
import TruncateText from "./components/truncate-text";

export default function App() {
  const handleClick = (type: string) => {
    alert(`Playing ${type}...`);
  };

  return (
    <div className="h-screen w-full flex flex-col items-center gap-2 justify-center">
      {/* <input type="text" value={"john doe"} className="border px-4 py-2" />

      <button
        onClick={() => handleClick("video")}
        className="bg-purple-500 px-4 py-2 text-purple-50 rounded text-sm"
      >
        Play Video
      </button>

      <button
        onClick={() => handleClick("audio")}
        className="bg-blue-500 px-4 py-2 text-blue-50 rounded text-sm"
      >
        Play Audio
      </button> */}

      {/* <Gallary /> */}

      {/* <Counter /> */}

      <TruncateText value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
    </div>
  );
}
