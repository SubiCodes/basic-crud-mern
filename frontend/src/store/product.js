import {create} from 'zustand'

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({products}),
    createProduct: async (newProduct) => {
        if(!newProduct.name || !newProduct.price || !newProduct.image ){
            return {success: false, message: "Fill in all the fields!"}
        }
        if(isNaN(newProduct.price)){
            return {success: false, message: "Enter a number for the price!"}
        }
        const res = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(newProduct)
        })
        const data = await res.json();
        set((state) => ({products: [...state.products, data.data ]}))
        return {success: true, message: "Item successfully added."}
    },
    fetchProduct: async () => {
        const res = await fetch("api/products")
        const data = await res.json();
        set({products: data.data});
    },
    deleteProduct: async (productID) => {
        const res = await fetch(`api/products/${productID}`, {
            method: "DELETE",
        });
        const data = await res.json();
        if(!data.success) {
            return {success: false, message: data.message}
        }else{
            set(state => ({ products: state.products.filter(product => product._id !== productID) }))
            return {success: true, message: data.message}
        }
    },
    updateProduct: async (productID, updatedProduct) => {
        const res = await fetch(`api/products/${productID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(updatedProduct)
        });
        const data = await res.json();
        if(!data.success) {
            return {success: false, message: data.message}
        }else{
            set(state => ({ products: state.products.map((product) => (product._id === productID ? data.data : product)) }))
            return {success: true, message: data.message}
        }
    }
}))