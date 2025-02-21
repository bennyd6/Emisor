import './home.css'
export default function Home() {
    return (
        <div className="home-main ">
            <div className="h-main">
                <div className="heading">
                    <h1>AI Powered Event Security & Management</h1>
                    <p>
                    Experience seamless event registration with facial recognition and
                    dynamic QR codes for enhanced security.
                    </p>
                </div>
                <div className="cards">
                    <div className="card">
                    <div className="icon">🔒</div>
                    <div className="text">
                        <h5>Facial Recognition</h5>
                        <p>Secure entry validation using AI-powered facial recognition</p>
                    </div>
                    </div>
                    <div className="card">
                    <div className="icon">📲</div>
                    <div className="text">
                        <h5>Dynamic QR Codes</h5>
                        <p>Auto-refreshing QR codes prevent ticket sharing</p>
                    </div>
                    </div>
                    <div className="card">
                    <div className="icon">👥</div>
                    <div className="text">
                        <h5>Crowd Management</h5>
                        <p>Real-time attendance tracking and seat allocation</p>
                    </div>
                    </div>
                    <div className="card">
                    <div className="icon">📅</div>
                    <div className="text">
                        <h5>Event Updates</h5>
                        <p>Stay informed with real-time event notifications</p>
                    </div>
                    </div>
                </div>
                <button className="register-button">Register for Event</button>
                </div>
        </div>
    );
}
