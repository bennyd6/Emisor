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
                    <EvCard />
                    <EvCard />
                    <EvCard />
                    <EvCard />
                </div>
            </div>
        </>
    )
}
