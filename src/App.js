import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/"/>
    <Route exact path="/Header" element={<Header/>}/> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
