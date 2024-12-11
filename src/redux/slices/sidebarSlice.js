import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSidebarOpen: false,
    expandedItems: [],
};

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        toggleDropdown: (state, action) => {
            const itemId = action.payload;
            if (state.expandedItems.includes(itemId)) {
                state.expandedItems = state.expandedItems.filter((id) => id !== itemId);
            } else {
                state.expandedItems.push(itemId);
            }
        },
    },
});

export const { toggleSidebar, toggleDropdown } = sidebarSlice.actions;
export default sidebarSlice.reducer;
