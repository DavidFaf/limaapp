import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import { Nav } from './components/Nav';
import LoginScreen from './pages/LoginScreen';

function App() {
  return (
    <Router>
    <Nav/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/loginScreen" element={<LoginScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
