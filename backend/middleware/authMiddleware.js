import pkg from 'jsonwebtoken';
const { verify } = pkg;
const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");

    console.log("Received Token:", token); // Log the received token

    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        const tokenWithoutBearer = token.replace("Bearer ", ""); // Remove "Bearer " prefix
        console.log("Token After Processing:", tokenWithoutBearer);

        const decoded = verify(tokenWithoutBearer, process.env.JWT_SECRET);
        console.log("Decoded Token:", decoded); // Log the decoded token

        if (!decoded.id ) {
            return res.status(400).json({ message: "Invalid token. Missing user details." });
        }

        req.user = {
            id: decoded.id,
            
        };

        next();
    } catch (error) {
        console.error("JWT Verification Error:", error);
        return res.status(400).json({ message: "Invalid token." });
    }
};

export default authMiddleware;
