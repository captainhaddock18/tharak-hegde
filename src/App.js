
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Screens/Home';
import Notfound from './Screens/Notfound';



function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>} />

        <Route exact path='*' element={<Notfound/>}/>
      </Routes>
    </div>
    </Router>

  );
}

export default App;