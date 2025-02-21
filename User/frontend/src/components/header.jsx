import { useEffect, useState } from "react";
import "./header.css";
import logo from "../assets/emisor-logo.png";

export default function Header() {
    const [username, setUsername] = useState("User");

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("authToken");
            if (!token) return;

            try {
                const response = await fetch("https://emisor.onrender.com/api/auth/getuser", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": token
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    // alert(data);
                    setUsername(data || "User");
                } else {
                    console.error("Failed to fetch user");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUser();
    }, []);

    return (
        <div className="header-main">
            <div className="header-1">
                <img src={logo} alt="Logo" />
            </div>
            <div className="header-2">
                <h2>{username}</h2>
            </div>
        </div>
    );
}