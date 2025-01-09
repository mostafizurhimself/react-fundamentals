import { useRef } from "react";

const catList = [
  {
    name: "Neo",
    src: "https://placecats.com/neo/300/200",
  },
  {
    name: "Millie",
    src: "https://placecats.com/millie/200/200",
  },
  {
    name: "Bella",
    src: "https://placecats.com/bella/199/200",
  },
  {
    name: "Neo Banana",
    src: "https://placecats.com/neo_banana/300/200",
  },
  {
    name: "Poppy",
    src: "https://placecats.com/poppy/300/200",
  },
];

export default function ScrollToElement() {
  const itemsRef = useRef<{ [key: string]: HTMLImageElement | null }>({});

  const scrollElementIntoView = (catName: string) => {
    itemsRef.current[catName]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  return (
    <>
      <nav className="flex items-center justify-center gap-4">
        {catList.map((cat) => {
          return (
            <button
              onClick={() => scrollElementIntoView(cat.name)}
              className="btn btn-primary"
              key={cat.name}
            >
              {cat.name}
            </button>
          );
        })}
      </nav>
      <div className="flex items-center justify-start gap-4 w-[400px] overflow-scroll">
        {catList.map((cat) => {
          return (
            <img
              ref={(element) => {
                if (element) {
                  itemsRef.current[cat.name] = element;
                }
              }}
              id={`cat-${cat.name}`}
              key={cat.name}
              src={cat.src}
              alt={cat.name}
              className="rounded-lg"
            />
          );
        })}
      </div>
    </>
  );
}
