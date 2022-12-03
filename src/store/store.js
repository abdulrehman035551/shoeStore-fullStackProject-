import { configureStore } from "@reduxjs/toolkit";
// import CardReducer from "./cardSlice"
import Addtocard from "./addtocard";


const store = configureStore({
    reducer: {
        // card: CardReducer,
        add: Addtocard

    }
})
export default store;