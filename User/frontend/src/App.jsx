import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Home from './pages/home';
import Event from './pages/event';
import Chat from './pages/chat';
import Login from './pages/login';
import Signup from './pages/signup'; // Import Signup component
import UpcomingEvents from './pages/upcomingEvents';
import PastEvents from './pages/pastEvents';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const token = localStorage.getItem('authToken'); // Check if token is in localStorage
  const location = useLocation();

  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup'; // Check if the user is on login or signup page

  return (
    <div className="main">
      {/* Show Header and Navbar only if not on the login or signup page */}
      {!isAuthPage && (
        <>
          <Header />
          <Navbar />
        </>
      )}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={token ? <Home /> : <Navigate to="/login" />} />
        <Route path="/chat" element={token ? <Chat /> : <Navigate to="/login" />} />

        {/* Protected Routes for events */}
        <Route path="/ongoing-events" element={token ? <Event /> : <Navigate to="/login" />} />
        <Route path="/upcoming-events" element={token ? <UpcomingEvents /> : <Navigate to="/login" />} />
        <Route path="/past-events" element={token ? <PastEvents /> : <Navigate to="/login" />} />

        {/* Auth Pages */}
        <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={token ? <Navigate to="/" /> : <Signup />} /> {/* Signup Route */}
        
        {/* Optional fallback route for undefined paths */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;