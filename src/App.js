import './style/App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';
import Nav from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>
            Patrick Ameglio
          </h2>
        </header>
        <Nav />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
