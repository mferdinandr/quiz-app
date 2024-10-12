import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage';
import Register from './pages/registerPage';
import LoginPage from './pages/loginPage';
import Play from './pages/play';
import Quiz from './pages/quiz';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/register" Component={Register} />
          <Route path="/play" Component={Play} />
          <Route path="/quiz/:category/:difficulty" Component={Quiz} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
