const db = require('../database');

exports.getAllProducts = (req, res) => {
    db.all('SELECT * FROM products', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
};

exports.createProduct = (req, res) => {
    const { name, price, skuId, seller, thumbnailHd, inStock } = req.body;
    db.run(`INSERT INTO products (name, price, skuId, seller, thumbnailHd, inStock) VALUES (?, ?, ?, ?, ?, ?)`,
        [name, price, skuId, seller, thumbnailHd, inStock],
        function(err) {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(201).json({ id: this.lastID });
        });
};

exports.updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, price, skuId, seller, thumbnailHd, inStock } = req.body;
    db.run(`UPDATE products SET name = ?, price = ?, skuId = ?, seller = ?, thumbnailHd = ?, inStock = ? WHERE id = ?`,
        [name, price, skuId, seller, thumbnailHd, inStock, id],
        function(err) {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({ message: 'Produto atualizado' });
        });
};

exports.deleteProduct = (req, res) => {
    const { id } = req.params;
    db.run(`DELETE FROM products WHERE id = ?`, id, function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: 'Produto deletado' });
    });
};
