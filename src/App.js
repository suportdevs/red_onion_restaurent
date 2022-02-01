import './App.css';
import Home from './components/Home/Home';
import BreakfastStore from './components/BreakfastStore/BreakfastStore';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path=":breakfasts" element={<BreakfastStore />} />
      </Route>
    </Routes>
  );
}

export default App;
