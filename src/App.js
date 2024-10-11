import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage';
import Register from './pages/registerPage';
import LoginPage from './pages/loginPage';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/register" Component={Register} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
