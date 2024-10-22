const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./bonestore.db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        price INTEGER,
        skuId TEXT,
        seller TEXT,
        thumbnailHd TEXT,
        inStock BOOLEAN
    )`);
});

module.exports = db;
