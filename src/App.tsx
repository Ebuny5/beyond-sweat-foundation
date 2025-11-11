import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Templates } from "./components/Templates";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Templates />
      <Footer />
    </div>
  );
}

export default App;
