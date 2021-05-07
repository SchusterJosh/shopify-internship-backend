const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

// Connect to database
connectDB();

// Initialize middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Define routes
app.use("/api/search", require("./routes/api"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
