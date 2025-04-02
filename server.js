const express = require('express');
const cors = require('cors');
const db = require('./src/database/db');
const app = express();
const port = 3300;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Include API routes
require('./src/routes/api')(app, db);

// Start data generation interval
setInterval(generateRandomData, 60000);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    generateRandomData(); // Initial data generation
});

// Keep this as-is - correct UTC storage
function generateRandomData() {
    const now = new Date(); // UTC time
    const value = (Math.random() * 100).toFixed(2);
    
    db.run(
        'INSERT INTO sensor_data (timestamp, value) VALUES (?, ?)',
        [now.toISOString(), value], // Storing UTC
        (err) => {
            if (err) console.error(err.message);
        }
    );
}