import About from "./components/About";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Interests from "./components/Interests";

export default function App() {
  return (
    <main className="container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </main>
  )
}