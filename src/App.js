import logo from './logo.svg';
import './App.css';
import CharacterList from './pages/CharacterList';
import SingleCharacter from './pages/SingleCharacter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharacterList/>} />
        <Route path="/:id" element={<SingleCharacter/>} />
      </Routes>
    </div>
  );
}

export default App;
