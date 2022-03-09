import './App.css';
import Home from './pages/home/home-page';
import { Route, Routes, } from "react-router-dom";
import DetailedRecipe from './components/detailed-recipe/detailed-recipe';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/recipes/:id" element={<DetailedRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
