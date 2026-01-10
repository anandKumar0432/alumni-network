import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "mysecret";
export const auth = (req, res, next) => {
    try {
        if (!JWT_SECRET) {
            return res.status(500).json({
                msg: "Server configuration error"
            });
        }
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                msg: "Authentication required",
            });
        }
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = {
            id: decoded.id,
            role: decoded.role
        };
        next();
    }
    catch (e) {
        return res.status(400).json({
            msg: "user not logged In"
        });
    }
};
