import express from "express"
import dotenv from "dotenv"
import path from "path"
import cors from "cors"
import { connectDB } from "./config/db.js"
import productRouter from "./routes/product.routes.js"

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors());
app.use("/api/v1/products", productRouter)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.resolve()

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")))
    app.get(/^\/(?!api).*/, (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, async () => {
    await connectDB()
    console.log(`Server running at http://localhost:${PORT}`)
})
