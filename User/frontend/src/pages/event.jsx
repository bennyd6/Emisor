import './event.css'

import EvNavbar from "../components/evNavbar"
import EvCard from "../components/evCard"

export default function Event() {
    return (
        <>
            {/* Main wrapper with the gradient background */}
            <div className="event-up bg-gradient-to-r from-white via-[#7900C9] to-[#E90190]">
                {/* Navbar inside the gradient */}
                <EvNavbar />
                
                {/* Gradient wrapper for the event section, now with the gradient behind everything */}
                <div className="event-main">
                    {/* Event Cards */}
                    <EvCard 
                        eventName="Tech Conference 2025" 
                        eventDescription="A conference showcasing the latest in tech innovations." 
                        eventDate="March 15, 2025" 
                    />
                    <EvCard 
                        eventName="Art Exhibition" 
                        eventDescription="Explore modern art with local and international artists." 
                        eventDate="April 5, 2025" 
                    />
                    <EvCard 
                        eventName="Music Festival" 
                        eventDescription="Enjoy performances from various genres of music." 
                        eventDate="May 20, 2025" 
                    />
                    <EvCard 
                        eventName="Food Festival" 
                        eventDescription="A weekend filled with delicious food from around the world." 
                        eventDate="June 10, 2025" 
                    />
                    <EvCard 
                        eventName="Film Screening" 
                        eventDescription="Watch independent films in an intimate theater setting." 
                        eventDate="July 8, 2025" 
                    />
                    <EvCard 
                        eventName="Startup Pitch Event" 
                        eventDescription="Startups pitch their ideas to investors and industry leaders." 
                        eventDate="August 15, 2025" 
                    />
                </div>
            </div>
        </>
    )
}
