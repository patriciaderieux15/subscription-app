import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar from './components/Nav/Nav';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
   <Navbar />
   <Routes>
     <Route path='/' element={<LandingPage />}></Route>
   </Routes>
    </BrowserRouter>
  );
}

export default App;
