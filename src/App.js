import Home from "./components/home";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <div className="bg-black flex flex-col gap-12 w-screen h-screen overflow-hidden">
      <Navbar />
      <Home />
    </div>
  );
}
