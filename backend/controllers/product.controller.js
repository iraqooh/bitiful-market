import mongoose from "mongoose"
import Product from "../models/product.model.js"

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 })

        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        })
    } catch (err) {
        console.error("Fetch products error:", err.message)
        res.status(500).json({
            success: false,
            message: "Failed to fetch products"
        })
    }
}

export const createProduct = async (req, res) => {
    const { name, price, image } = req.body

    if (!name || !price || !image) {
        return res.status(400).json({
            success: false,
            message: "Please provide all required fields"
        })
    }

    try {
        const product = await Product.create({ name, price, image })

        res.status(201).json({
            success: true,
            data: product
        })
    } catch (err) {
        console.error("Create product error:", err.message)
        res.status(500).json({
            success: false,
            message: "Failed to create product"
        })
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
                runValidators: true,
                timestamps: true
            }
        )

        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }

        res.status(200).json({
            success: true,
            data: updatedProduct
        })
    } catch (err) {
        console.error(`Update product ${id} error:`, err.message)
        res.status(500).json({
            success: false,
            message: "Failed to update product"
        })
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params

    try {
        const deletedProduct = await Product.findByIdAndDelete(id)

        if (!deletedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Product successfully deleted"
        })
    } catch (err) {
        console.error(`Delete product ${id} error:`, err.message)
        res.status(500).json({
            success: false,
            message: "Failed to delete product"
        })
    }
}