import { createSlice } from "@reduxjs/toolkit";

const ListSlice = createSlice({
  name: "List",
  initialState: {
    todo: [],
  },
  reducers: {
    AddList(state, action) {
      state.todo.push({
        name: action.payload.Name,
        id: action.payload.id,
      });
      // console.log("nameeee", action.payload);
    },

    RemoveList(state, action) {
      const updated = state.todo.filter((item) => {
        // console.log(item);
        return item.id !== action.payload;
      });
      state.todo = updated;
      // console.log("action payload", action.payload);

      console.log(state.todo);
    },
  },
});

export { ListSlice };
