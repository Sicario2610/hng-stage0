const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Endpoint to Fetch Data
app.get("/", (req, res) => {
    try {
        res.status(200).json({
            email: "abdulbasitabdulrasheed8@gmail.com",
            current_datetime: new Date().toISOString(),
            github_url: "url"
        });
    } catch (err) {
        console.error("Error fetching data:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
