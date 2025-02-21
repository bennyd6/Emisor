import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Home from './pages/home';
import Event from './pages/event';
import Chat from './pages/chat';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ongoing-events" element={<Event />} />
        <Route path="/upcoming-events" element={<Event />} />
        <Route path="/past-events" element={<Event />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;