import { useState } from 'react';
import './addEvent.css';

export default function AddEvent() {
    const [eventData, setEventData] = useState({
        name: '',
        description: '',
        date: '',
        location: '',
        capacity: 0,
      });
      
      const [eventLink, setEventLink] = useState('');

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEventData({
          ...eventData,
          [name]: value,
        });
      };
      
      const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('authToken');
        
        if (!token) {
            alert('You must be logged in to create an event');
            return;
        }
    
        // Proceed with the event creation if token exists
        try {
            const response = await fetch('http://localhost:3000/api/auth/Eo/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(eventData),
            });
    
            if (!response.ok) {
                throw new Error('Failed to create event');
            }
    
            const data = await response.json();
            alert(data.message);
    
            if (data.event && data.event._id) {
                const ticketLink = `http://localhost:5173/ticket/${data.event._id}`;
                setEventLink(ticketLink);
            }
        } catch (error) {
            console.error('Error:', error.message);
            alert('Error creating event');
        }
    };
    
      

    return (
        <div className="add-event-main">
            {/* <h2>Create a New Event</h2> */}
            <form onSubmit={handleSubmit}>
                <label>
                    Event Name:
                    <input 
                        type="text" 
                        name="name" 
                        value={eventData.name} 
                        onChange={handleInputChange} 
                        required 
                    />
                </label>
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={eventData.description}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Event Date:
                    <input
                        type="date"
                        name="date"
                        value={eventData.date}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Location:
                    <input
                        type="text"
                        name="location"
                        value={eventData.location}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Capacity:
                    <input
                        type="number"
                        name="capacity"
                        value={eventData.capacity}
                        onChange={handleInputChange}
                        required
                        min="1"
                    />
                </label>
                <button type="submit">Create Event</button>
            </form>
            {eventLink && (
                <div className="ticket-link">
                    <h3>Event Created Successfully!</h3>
                    <p>Share this link for fans to buy tickets: </p>
                    <a href={eventLink} target="_blank" rel="noopener noreferrer">
                        Buy Tickets Here
                    </a>
                </div>
            )}

        </div>
    );
}
