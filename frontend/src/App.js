import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
