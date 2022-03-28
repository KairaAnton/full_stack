import './App.css';
import { BrowserRouter as Router,Route, Link} from "react-router-dom";
import {  Routes } from "react-router";
import VotePage from './pages/VotePage';
import LogsPage from './pages/LogsPage';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li> <Link to='/'>Home</Link></li>
            <li> <Link to='/logs'>Logs</Link></li>
            <li> <Link to='/vote'>Vote</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/vote' element={<VotePage/>} />
          <Route path='/logs' element={<LogsPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
