import { useNavigate } from 'react-router-dom'; // For navigation
import './home.css';

export default function Home() {
    const navigate = useNavigate(); // Hook for navigation

    const handleAddEventClick = () => {
        navigate('/add-event'); // Navigate to the Add Event page
    };

    return (
        <div className="home-main">
            <h1>Welcome to the Event Management System</h1>
            <button onClick={handleAddEventClick}>Add Event</button>
        </div>
    );
}
