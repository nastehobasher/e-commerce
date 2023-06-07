import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { blogService } from "./blogService";



export const getAllblogs = createAsyncThunk("blogs/get", async (thunkAPI) => {
    try {
        // console.log("product", await productService.getProducts());
        return await blogService.getBlogs();
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

export const getABlog = createAsyncThunk("blog/get", async (id, thunkAPI) => {
    try {
        return await blogService.getBlog(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});



const blogState = {
    blog: "",
    isError: "false",
    isSuccess: "false",
    isLoading: "false",
    message: "",
}

export const blogSlice = createSlice({
    name: "blog",
    initialState: blogState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllblogs.pending, (state) => {
            state.isLoading = true
        }).addCase(getAllblogs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.blog = action.payload

        }).addCase(getAllblogs.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;

        }).addCase(getABlog.pending, (state) => {
            state.isLoading = true
        }).addCase(getABlog.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.singleblog = action.payload

        }).addCase(getABlog.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;

        });
    }
});


export default blogSlice.reducer;