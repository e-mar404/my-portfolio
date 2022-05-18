import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Trail from './components/Cursor Trail';

function App() {
  return (
    <div className="App">      
      
      {/*
      Routs for Navbar, changes URL

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
      */}

      {/* New routers that let me use the text as buttons, nav bar wont be used anymore */}
      <BrowserRouter>
        <Routes>
          <Route path='/my-portfolio' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/about' element={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
