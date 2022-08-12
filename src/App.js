import Analytics from "./component/Analytics";
import Cards from "./component/Cards";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Newsletter from "./component/Newsletter";
function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <Analytics />
     <Newsletter />
     <Cards />
    </div>
  );
}

export default App;
