exports.isAdmin = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        res.status(403).send("Access denied. Admin role required.");
    }
};

exports.isUser = (req, res, next) => {
    if (req.user && req.user.role === "user") {
        next();
    } else {
        res.status(403).send("Access denied. User role required.");
    }
};

