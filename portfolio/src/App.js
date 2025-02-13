import Navbar from "./components/NavBar/navbar";
import Intro from './components/NavBar/Intro/Intro';
import Skills from "./components/Skills/skills";
import Works from "./components/Works/work";
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer"


function App() {
  return (
    <div className="App">
          <Navbar/>
          <Intro/>
          <Skills/>
          <Works/>
          <Contact/>
          <Footer/>
    </div>
  );
}

export default App;
