import './evNavbar.css';
import { NavLink } from 'react-router-dom';

export default function EvNavbar() {
  return (
    <div className="ev-main">
      <NavLink
        to="/ongoing-events"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Ongoing
      </NavLink>
      <NavLink
        to="/upcoming-events"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Upcoming
      </NavLink>
      <NavLink
        to="/past-events"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Past
      </NavLink>
    </div>
  );
}
