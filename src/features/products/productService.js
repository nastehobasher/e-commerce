import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";


const getProducts = async (userData) => {
    const response = await axios.get(`${base_url}product`);
    // console.log("data", response.data);
    if (response.data) {
        return response.data;
    }
}

const getSingleProduct = async (id) => {
    const response = await axios.get(`${base_url}product/${id}`);
    // console.log("data", response.data);
    if (response.data) {
        return response.data;
    }
}

const addWishlist = async (prodId) => {
    const response = await axios.put(`${base_url}product/wishlist`, { prodId }, config);
    // console.log("fff", config);
    if (response.data) {
        return response.data;
    }
}

export const productService = {
    getProducts,
    addWishlist,
    getSingleProduct,
}