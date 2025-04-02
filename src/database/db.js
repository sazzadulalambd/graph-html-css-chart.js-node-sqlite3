const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database.db', (err) => {
    if (err) console.error(err.message);
    console.log('Connected to SQLite database.');
});

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS sensor_data (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            timestamp DATETIME,
            value REAL
        )
    `);
});

module.exports = db;