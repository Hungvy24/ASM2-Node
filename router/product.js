import express from 'express'
import { DeleteProduct, UpdateProduct, addProduct, getAllProduct, getProductById } from '../controllers/product.js';

const router = express.Router();
router.get('/products', getAllProduct);
router.get('/products/:id', getProductById);
router.post('/products', addProduct);
router.put('/products/:id', UpdateProduct);
router.delete('/products/:id', DeleteProduct);
export default router;