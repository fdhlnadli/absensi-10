import express from 'express';
import { getProducts, 
   getProductsByID, 
   saveProduct, 
   updateProduct, 
   deleteProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductsByID);

router.post('/', saveProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);


export default router;