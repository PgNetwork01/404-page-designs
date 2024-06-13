const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // Change this to your desired port

// Serve static files from the root directory
app.use(express.static(__dirname));

// Redirect to 404 page for any other route
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
