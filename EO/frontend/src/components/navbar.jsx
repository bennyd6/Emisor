import './navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="nav-main">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Home
      </NavLink>
      <NavLink
        to="/ongoing-events"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Events
      </NavLink>
      {/* <NavLink
        to="/chat"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Chat
      </NavLink> */}
      <NavLink
        to="/settings"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Settings
      </NavLink>
    </div>
  );
}
