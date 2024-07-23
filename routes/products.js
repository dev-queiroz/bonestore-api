const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

/**
 * @swagger
 * /bonestore/product:
 *   get:
 *     description: Retorna todos os produtos
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get('/product', productsController.getAllProducts);

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
router.post('/product', productsController.createProduct);

/**
 * @swagger
 * /bonestore/product/{id}:
 *   put:
 *     description: Atualiza um produto pelo ID
 *     parameters:
 *       - name: id
 *         description: ID do produto
 *         in: path
 *         required: true
 *         type: integer
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
 *       200:
 *         description: Produto atualizado
 */
router.put('/product/:id', productsController.updateProduct);

/**
 * @swagger
 * /bonestore/product/{id}:
 *   delete:
 *     description: Deleta um produto pelo ID
 *     parameters:
 *       - name: id
 *         description: ID do produto
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Produto deletado
 */
router.delete('/product/:id', productsController.deleteProduct);

module.exports = router;
