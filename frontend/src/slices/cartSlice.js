import {createSlice} from '@reduxjs/toolkit'

const initialState = localStorage.getItem("cart") ? JSON.parse(
localStorage.getItem("cart")) : {cartItems : []}

const addDecimals = (num) => {
    return (Math.rouns(num * 100)/100).toFixed(2);
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers: {
        addToCart : (state, action) => {
            const Item = action.payload;
            const existItem = state.cartItems.find((x) => x._id == Item._id);

            if(existItem){
                state.cartItems.map((x) => {
                    return x._id === Item._id ? Item : x
                })
            }
            else{
                state.cartItems = [...state.cartItems, Item];
            }

            // calculate items price
            state.itemsPrice =  addDecimals(state.cartItems.reduce((acc, item) => 
            acc + item.price * item.quantity,0))

            // calculate shipping price
            state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

            // calculate tax price
            state.taxPrice = addDecimals(Number(state.itemsPrice* 0.15).toFixed(2))
            
            // calculate total price
            state.totalPrice = (Number(state.itemsPrice) + Number(state.shippingPrice) + Number(state.taxPrice)).toFixed(2);

            localStorage.setItem('cart', JSON.stringify(state));
        }
    },
})

export default cartSlice.reducer;
