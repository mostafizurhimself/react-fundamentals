import Dashboard from "./components/dashboard";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

export default function App() {
  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="flex-1 bg-slate-100 ms-64">
        <Header />
        <main className="p-8 h-[calc(100vh-4rem)]">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}
