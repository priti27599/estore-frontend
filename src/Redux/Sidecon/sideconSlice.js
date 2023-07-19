import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        category: "Women",
        items: ["Pants", "Tops", "Party Wear", "Shirts", "Dresses"],
    },
    {
        category: "Men",
        items: ["Pants", "T-shirts", "Party Wear", "Shirts"],
    },
    {
        category: "Kids",
        items: ["Pants", "Tops", "Party Wear", "Shirts", "Dresses"],
    }
]

const sideconSlice = createSlice({
    name: "SideconSlice",
    initialState
})

export default sideconSlice;