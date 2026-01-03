import express from "express"
import { 
    createProduct, 
    deleteProduct, 
    getProducts, 
    updateProduct 
} from "../controllers/product.controller.js"
import validateObjectId from "../middlewares/validateObjectId.js"

const router = express.Router()

router.post("/", createProduct)
router.get("/", getProducts)
router.put("/:id", validateObjectId, updateProduct)
router.delete("/:id", validateObjectId, deleteProduct)

export default router