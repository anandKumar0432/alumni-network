export const requiredRole = (...allowedRoles) => (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
        res.status(403).json({
            msg: "Access denied"
        });
    }
    next();
};
