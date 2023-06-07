import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "./productService";
// import { toast } from "react-toastify";



export const getAllporducts = createAsyncThunk("product/get", async (thunkAPI) => {
    try {
        // console.log("product", await productService.getProducts());
        return await productService.getProducts();
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

export const getAPorduct = createAsyncThunk("product/getAproduct", async (id, thunkAPI) => {
    try {
        return await productService.getSingleProduct(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

export const addtoWishlist = createAsyncThunk("product/wishlist", async (prodId, thunkAPI) => {
    try {
        return await productService.addWishlist(prodId);
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

const productState = {
    product: "",
    isError: "false",
    isSuccess: "false",
    isLoading: "false",
    message: "",
}

export const poductSlice = createSlice({
    name: "auth",
    initialState: productState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getAllporducts.pending, (state) => {
            state.isLoading = true
        }).addCase(getAllporducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.product = action.payload

        }).addCase(getAllporducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;

        }).addCase(addtoWishlist.pending, (state) => {
            state.isLoading = true
        }).addCase(addtoWishlist.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.addtoWishlist = action.payload;
            state.message = "Product added to Wishlist !";
        }).addCase(addtoWishlist.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        }).addCase(getAPorduct.pending, (state) => {
            state.isLoading = true
        }).addCase(getAPorduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.singleproduct = action.payload;
            state.message = "Product fatched succesfuly !";
        }).addCase(getAPorduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        });
    }
});


export default poductSlice.reducer;