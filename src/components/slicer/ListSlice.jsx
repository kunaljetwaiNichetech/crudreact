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
        // console.log(item,"this is remove lits");
        return item.id !== action.payload;
      });
      state.todo = updated;
      // console.log("action payload", action.payload);

      console.log(state.todo);
    },
    updatename(state, action) {
      console.log("state", state);
      const {name,ID,id}=action.payload
      const editedList=state.todo.map((item)=>{
        if(item.id===id)
        {
          return{
            ...item,
            Name:name,
            id:ID
          }
        }
        return item
      })
      state.todo=editedList

      console.log("edited data", action.payload);
      // console.log("ediiiii",edit)
      // console.log("this is state for updation",state.todo)
    },
  },
});

export { ListSlice };
