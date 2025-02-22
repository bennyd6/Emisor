import './event.css'

import EvNavbar from "../components/evNavbar"
import EvCard from "../components/evCard"

export default function PastEvents() {
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
                        eventName="Startup Pitch Event" 
                        eventDescription="Startups pitch their ideas to investors and industry leaders." 
                        eventDate="August 15, 2025" 
                    />
                </div>
            </div>
        </>
    )
}
