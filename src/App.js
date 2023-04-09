import './App.css';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Home />
      <About/>
      <Skills/>
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;
