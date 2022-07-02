import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import CompSci from './pages/CompSci';
import RelatedWork from './pages/RelatedWork';

function App() {
  return (
    <div className="App">      
      {/* set the url to link to different elements */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/compsci' element={<CompSci />} />
        </Routes>
        <Routes>
          <Route path='/related-work' element={<RelatedWork />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
