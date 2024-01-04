import { configureStore } from "@reduxjs/toolkit";

import { mData } from "./mData";

export default configureStore({
    reducer : {
        mData : mData.reducer,
    }
})