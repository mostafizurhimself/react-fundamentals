import ToDo from "./components/todo";

export default function App() {
  // State Object
  return (
    <div className="h-screen w-full flex flex-col items-center gap-2 justify-center">
      {/* <Box /> */}
      <ToDo />
    </div>
  );
}
