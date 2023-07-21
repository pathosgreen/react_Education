import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Gallery from './components/Gallery';
const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">홈</Link></li>
          <li><Link to="/about">소개</Link></li>
          <li><Link to="/profile">프로필</Link></li>
          <li><Link to="/gallery">갤러리</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;