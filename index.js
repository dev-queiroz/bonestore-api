const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const db = require('./database');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Configuração do Swagger
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Bonestore API',
            version: '1.0.0',
            description: 'API para gerenciamento de produtos da loja de bonés'
        }
    },
    apis: ['index.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /bonestore/product:
 *   get:
 *     description: Retorna todos os produtos
 *     responses:
 *       200:
 *         description: Sucesso
 */
app.get('/bonestore/product', (req, res) => {
    db.all('SELECT * FROM products', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

/**
 * @swagger
 * /bonestore/product:
 *   post:
 *     description: Adiciona um novo produto
 *     parameters:
 *       - name: product
 *         description: Objeto do produto
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             price:
 *               type: integer
 *             skuId:
 *               type: string
 *             seller:
 *               type: string
 *             thumbnailHd:
 *               type: string
 *             inStock:
 *               type: boolean
 *     responses:
 *       201:
 *         description: Produto criado
 */
app.post('/bonestore/product', (req, res) => {
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
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
