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
    },

    RemoveList(state, action) {
      const updated = state.todo.filter((item) => {
        return item.id !== action.payload;
      });
      state.todo = updated;

      console.log(state.todo);
    },
    updatename(state, action) {
      const {name,id}=action.payload
      console.log("name", name);
      console.log("id", id);
      const editedList=state.todo.map((item)=>{
        if(item.id===id)
        {
          return{
            ...item,
            name:name,
            id:id
          }
        }
        return item
      })
      state.todo=editedList
    },
  },
});

export { ListSlice };
