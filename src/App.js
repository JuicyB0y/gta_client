import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlanePage from './pages/PlanePage';
import CreatePlane from './pages/CreatePlane';
import OrderPage from './pages/OrderPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plane/:id" element={<PlanePage />} />
        <Route path="/create-plane" element={<CreatePlane />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </div>
  );
}

export default App;
