import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    loading: false,
    setLoading: (loading) => set({ loading }),
    fetchStatus: null,
    setStatus: (fetchStatus) => set({ fetchStatus }),
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
    },
    fetchProducts: async () => {
        set((state) => ({ loading: state.loading = true }))
        try {
            const res = await fetch("/v1/products")
            
            const data = await res.json()
            
            if (!data.success) {
                return { success: false, message: data.message }
            }
            set({ products: data.data })
            return data
        } catch (error) {
            console.error("Failed to fetch products:", error.message)
            set((state) => ({ fetchStatus: state.fetchStatus = 500}))
        } finally {
            set((state) => ({ loading: state.loading = false }))
        }
    },
    deleteProduct: async (id) => {
        try {
            const res = await fetch(`/v1/products/${id}`, { method: "DELETE" })
            const data = await res.json()
            if (data.success) {
                set((state) => ({ 
                    products: state.products.filter((product) => product._id !== id) 
                }))
            }
            return data
        } catch (error) {
            return { success: false, message: `Failed to delete product: ${error.message}` }
        }
    },
    updateProduct: async (id, updatedFields) => {
        try {
            const res = await fetch(`/v1/products/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedFields)
            })
            const data = await res.json()
            if (data.success) {
                set((state) => ({
                    products: state.products.map((product) => 
                        product._id === id ? data.data : product
                    )
                }))
            }
            return { success: data.success, message: "Product successfully updated!" }
        } catch (error) {
            return { success: false, message: `Failed to update product: ${error.message}` }
        }
    }
}));