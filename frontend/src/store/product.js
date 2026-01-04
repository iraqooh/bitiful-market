import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.image || !newProduct.price) {
            return { success: false, message: "All fields are required." };
        }
        try {
            const res = await fetch("/v1/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProduct)
            })
            const data = await res.json()
            if (!data.success) {
                return { success: false, message: data.message  }
            }
            
            set((state) => ({ products: [...state.products, data.data ]}))
            return { success: true, message: "Product created successfully." }
        } catch (error) {
            return { success: false, message: `Failed to create product: ${error}` }
        }
    }
}));