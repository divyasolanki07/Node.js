module.exports = {
    JWT_SECRET: "your-secret-key-change-in-production",
    JWT_EXPIRES_IN: "7d",
    MONGODB_URI: "mongodb://127.0.0.1/blogDB",
    PORT: 3000,
    COOKIE_OPTIONS: {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        sameSite: "strict"
    }
};

module.exports = config;

const config = require("./config");
const mongoose = require("mongoose");

mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
