import Content from "./components/content";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

export default function App() {
  return (
    <>
      <Sidebar />
      <main className="w-full">
        <Header />
        <Content />
      </main>
    </>
  );
}
