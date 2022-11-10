
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    cart:[],
    orders: [],
    order: {},
    loading: true
}

export const fetchCartAsync = createAsyncThunk("fetchOrdersAsync", async()=>{
    console.log("firing axios call")
    const { data } = await axios.get('/api/orders/cart')
    console.log("fetch cart:",data)
    return data
})

export const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(fetchCartAsync.pending, (state,action)=> {
            console.log("Orders are pending")
            state.loading = true
        })
        builder.addCase(fetchCartAsync.fulfilled, (state, action)=>{
            console.log('Orders aqquired!')
            state.cart = action.payload
            state.loading = false
        })
    }

})

export const selectCart = (state) => {
    return state.orders.cart
}

export const addToCart = createAsyncThunk('addToCart', async (shoe)=>{
    console.log("axios post request")
    const {data} = await axios.post
})

export default ordersSlice.reducer