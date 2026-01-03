import express from "express"
import { 
    createProduct, 
    deleteProduct, 
    getProducts, 
    updateProduct 
} from "../controllers/product.controller.js"
import validateObjectId from "../middlewares/validateObjectId.js"
import validateBody from "../middlewares/validateProduct.js"
import { createProductSchema, updateProductSchema } from "../validations/product.validation.js"

const router = express.Router()

router.post("/", validateBody(createProductSchema), createProduct)
router.get("/", getProducts)
router.put("/:id", validateObjectId, updateProduct)
router.delete("/:id", validateObjectId, validateBody(updateProductSchema), deleteProduct)

export default router