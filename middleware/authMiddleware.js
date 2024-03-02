const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

async function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Authentication invalid" });
    }

    const token = authHeader.split(' ')[1];
    console.log(authHeader);
    console.log(token);

    try {
        const { username, usersid } = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { username, usersid };
        next();
    } catch (error) {
        console.error("JWT verification error:", error.message);
        return res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Authentication invalid" });
    }
}

module.exports = authMiddleware;
