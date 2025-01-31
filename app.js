const express = require("express");
const compression = require("compression");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression()); // Compress responses to reduce payload size
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse incoming JSON requests

// Endpoint to Fetch Data
app.get("/", (req, res) => {
    try {
        res.status(200).json({
            email: "abdulbasitabdulrasheed8@gmail.com",
            current_datetime: new Date().toISOString(), // Current date-time in ISO format
            github_url: "https://github.com/Sicario2610/hng-stage0.git"
        });
    } catch (err) {
        console.error("Error fetching data:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
