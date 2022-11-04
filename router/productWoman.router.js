import express from "express";
const product = express.Router()
import { getProduct, createProduct, updateProduct, deleteProduct} from '../controllers/productWoman.controller.js'



product.get('/', getProduct)
product.post('/', createProduct)
product.put('/',updateProduct )
product.delete('/:id', deleteProduct)
export default product