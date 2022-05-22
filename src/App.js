import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './components/Menu/Menu'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
