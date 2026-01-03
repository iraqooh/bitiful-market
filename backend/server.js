import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import productRouter from "./routes/product.routes.js"

dotenv.config()

const app = express()
app.use(express.json())
app.use("/api/v1/products", productRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, async () => {
    await connectDB()
    console.log(`Server running at http://localhost:${PORT}`)
})
