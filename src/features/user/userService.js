import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const register = async (userData) => {
    const response = await axios.post(`${base_url}user/register`, userData);
    if (response.data) {
        if (response.data) {
            localStorage.setItem("customer", JSON.stringify(response.data));
        }
        return response.data;
    }
}

const login = async (userData) => {
    const response = await axios.post(`${base_url}user/login`, userData);
    console.log(response);
    if (response.data) {
        return response.data;
    }
}
const getUserWishlist = async () => {
    const response = await axios.get(`${base_url}user/wishlist`, config);
    if (response.data) {
        return response.data;
    }
}

const addToCart = async (cartData) => {
    const response = await axios.post(`${base_url}user/cart`, cartData, config);
    if (response.data) {
        return response.data;
    }
}
const getCart = async (cartData) => {
    const response = await axios.get(`${base_url}user/cart`, config);
    if (response.data) {
        return response.data;
    }
}

const removeProductFromCart = async (cartItemId) => {
    const response = await axios.delete(`${base_url}user/delete-product-cart/${cartItemId}`, config);
    if (response.data) {
        return response.data;
    }
};

const updateProductFromCart = async (cartDetail) => {
    console.log(cartDetail);
    console.log("config", config);
    //FIXME: PUT takes [ 3 parameters, {url, data, config?}]
    const response = await axios.put(`${base_url}user/update-product-cart/${cartDetail.cartItemId}/${cartDetail.quantity}`, cartDetail, config);
    // let url = `${base_url}user/update-product-cart/${cartDetail.cartItemId}/${cartDetail.quantity}`;
    // await axios.put(url, cartDetail, config).then(res => {
    //     if (res.data) return res.data;
    // }).catch(err => console.log("ERROR in updateProductFromCart ", err));

    if (response.data) return response.data;
};

const updateUser = async (data) => {
    const response = await axios.put(`${base_url}user/edit-user/`, data, config);
    if (response.data) {
        return response.data;
    }
};

export const authService = {
    register,
    login,
    getUserWishlist,
    addToCart,
    getCart,
    removeProductFromCart,
    updateProductFromCart,
    updateUser
}