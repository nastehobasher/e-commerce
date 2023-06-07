import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";


export const registeruser = createAsyncThunk("auth/register", async (userData, thunkAPI) => {
    try {
        return await authService.register(userData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

export const loginUser = createAsyncThunk("auth/login", async (userData, thunkAPI) => {
    try {
        return await authService.login(userData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

export const getUserProductWishlist = createAsyncThunk("user/wishlist", async (thunkAPI) => {
    try {
        return await authService.getUserWishlist()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

export const addProductToCart = createAsyncThunk("user/cart/add", async (cartData, thunkAPI) => {
    try {
        return await authService.addToCart(cartData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

export const getUserCart = createAsyncThunk("user/cart/get", async (thunkAPI) => {
    try {
        return await authService.getCart()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

export const deleteCartProduct = createAsyncThunk("user/cart/product/delete", async (cartItemId, thunkAPI) => {
    try {
        return await authService.removeProductFromCart(cartItemId);
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

export const updateCartProduct = createAsyncThunk("user/cart/product/update", async (cartDetail, thunkAPI) => {
    try {
        return await authService.updateProductFromCart(cartDetail);
    } catch (error) {
        console.log("err", error);
        return thunkAPI.rejectWithValue(error)
    }
});

export const updateProfile = createAsyncThunk("user/profile/update", async (data, thunkAPI) => {
    try {
        return await authService.updateUser(data);
    } catch (error) {
        console.log("err", error);
        return thunkAPI.rejectWithValue(error)
    }
});

const getCustomerfromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;
const initialState = {
    user: getCustomerfromLocalStorage,
    isError: "false",
    isSuccess: "false",
    isLoading: "false",
    message: "",
}
export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(registeruser.pending, (state) => {
            state.isLoading = true
        }).addCase(registeruser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.createdUser = action.payload
            console.log(action.payload);
            if (state.isSuccess === true) {
                toast.info("User Created Successfully");
            }
        }).addCase(registeruser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error
            if (state.isError === true) {
                toast.error(action.error);
            }
        }).addCase(loginUser.pending, (state) => {
            state.isLoading = true
        }).addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.user = action.payload;
            if (state.isSuccess === true) {
                localStorage.setItem("token", action.payload.token);
                toast.info("User logged Successfully");
            }
        }).addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error
            if (state.isError === true) {
                toast.error(action.error);
            }

        }).addCase(getUserProductWishlist.pending, (state) => {
            state.isLoading = true
        }).addCase(getUserProductWishlist.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.wishlist = action.payload;
            state.message = "wishlist products fetched succesfully"

        }).addCase(getUserProductWishlist.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error

        }).addCase(addProductToCart.pending, (state) => {
            state.isLoading = true
        }).addCase(addProductToCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.cartProduct = action.payload;
            if (state.isSuccess) {
                toast.success("Product Added To cart");
            }

        }).addCase(addProductToCart.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error
        }).addCase(getUserCart.pending, (state) => {
            state.isLoading = true
        }).addCase(getUserCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.cartProducts = action.payload;

        }).addCase(getUserCart.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error
        }).addCase(deleteCartProduct.pending, (state) => {
            state.isLoading = true
        }).addCase(deleteCartProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.deletedCartProducts = action.payload;
            if (state.isSuccess) {
                toast.success("Product Deleted from cart succesfully");
            }

        }).addCase(deleteCartProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error
            if (state.isSuccess === false) {
                toast.error("something went wrong!");
            }
        }).addCase(updateCartProduct.pending, (state) => {
            state.isLoading = true
        }).addCase(updateCartProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.updatedCartProduct = action.payload;
            if (state.isSuccess) {
                toast.success("Product updated from cart succesfully");
            }

        }).addCase(updateCartProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error
            if (state.isSuccess === false) {
                toast.error("something went wrong!");
            }
        }).addCase(updateProfile.pending, (state) => {
            state.isLoading = true
        }).addCase(updateProfile.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.updateduser = action.payload;
            if (state.isSuccess) {
                toast.success("Profile updated succesfully");
            }

        }).addCase(updateProfile.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error
            if (state.isSuccess === false) {
                toast.error("something went wrong!");
            }
        });
    }
});


export default authSlice.reducer;