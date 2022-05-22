import './App.css';
import {Route, Routes } from 'react-router-dom';
import Type1 from './pages/Type1';
import Type2 from './pages/Type2';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Type1 />} />
      <Route path="/type2" element={<Type2 />} />
    </Routes>
  );
}

export default App;
