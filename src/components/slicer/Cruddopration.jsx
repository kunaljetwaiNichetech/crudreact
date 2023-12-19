import { createSlice } from "@reduxjs/toolkit";

const CrudOpration = createSlice({
  name: "Crud",
  initialState: {
    id: 0,
    Name: "",
  },
  reducers: {
    addname(state, action) {
      state.id = action.payload.id;
      state.Name = action.payload.Name;
    },
   
  },
});

export { CrudOpration };
