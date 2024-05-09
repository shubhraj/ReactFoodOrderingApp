const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from './cartSlice';
const appStore = configureStore({
    //reducer contains slice reducers
    reducer : {
        cart : cartReducer
    }
});

export default appStore;
