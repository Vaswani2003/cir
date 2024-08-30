import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './pages/login.jsx';
import Signup from './pages/signup.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
          <Routes>

            <Route path="/" element={<h1>CIR</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
