import './style/App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Nav from './components/Navbar';

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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
