module.exports = (app, db) => {
    app.get('/api/data', (req, res) => {
        db.all(
            `SELECT timestamp, value 
            FROM sensor_data 
            ORDER BY timestamp DESC 
            LIMIT 60`,
            (err, rows) => {
                if (err) {
                    res.status(500).json({ error: err.message });
                    return;
                }
                res.json(rows.reverse()); // Return oldest first
            }
        );
    });
};