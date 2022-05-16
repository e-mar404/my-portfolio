import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Trail from './components/Cursor Trail';

function App() {
  return (
    <div className="App">      
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/my-portfolio' element={<Home/>} />
        </Routes>
        <Routes>
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
      <Trail />
    </div>
  );
}

export default App;
