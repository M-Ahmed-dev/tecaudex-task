import Navbar from "./components/Navbar";
import ColorSec from "./components/ColorSec";
import Planets from "./components/Planets";
import Interactive from "./components/Interactive";
import Footer from "./components/Footer";
import Explore from "./components/Explore";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <ColorSec />
        <Planets />
        <Interactive />
        <Explore />
      </div>
      <Footer />
    </>
  );
}

export default App;
