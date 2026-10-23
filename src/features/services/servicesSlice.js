import { createSlice } from "@reduxjs/toolkit";

const servicesSlice = createSlice({
    name: "services",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        setServices: (state, action) => {
            state.items = action.payload;
        },
        setServicesLoading: (state, action) => {
            state.loading = action.payload;
        },
        setServicesError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const {
    setServices,
    setServicesLoading,
    setServicesError,
} = servicesSlice.actions;

export default servicesSlice.reducer;