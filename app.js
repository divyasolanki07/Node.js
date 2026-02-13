const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const config = require("./config/config");

const authRoutes = require("./routes/auth");
const articleRoutes = require("./routes/articles");

const app = express();

// MongoDB connection with error handling
mongoose.connect(config.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

app.use(authRoutes);
app.use(articleRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

const PORT = config.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));