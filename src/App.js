import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>
            Dope site coming soon!
          </p>
        </header>
        <nav>
          <Link to="/"><p>Home</p></Link>
          <Link to="/about"><p>About Me</p></Link>
          <Link to="/projects"><p>Projects</p></Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About Me</h1>} />
          <Route path="/projects" element={<h1>Projects</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
