import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Home from './pages/home';
import Event from './pages/event';
import Login from './pages/login';
import AddEvent from './pages/AddEvent';
import Signup from './pages/signup'; // Import Signup component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
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
        <Route path="/" element={<Home />} />

        {/* Routes for events */}
        <Route path="/ongoing-events" element={<Event />} />
        <Route path="/upcoming-events" element={<Event />} />
        <Route path="/past-events" element={<Event />} />
        <Route path="/add-event" element={<AddEvent />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Optional fallback route for undefined paths */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
