import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../slicer/todoSlicer";
export default function Disply() {
  const dispatch = useDispatch();
//   const data = useSelector(state => state.todo);
//   useEffect(() => {
//     dispatch(fetchTodo());
//   },[]);
//   console.log(data);
  return <div>
    
    {/* {
        data.isloading ?<h1>Loading...</h1>:
        data.data.map((todo)=>(
            <ul>
                <li>{todo.title}</li>
                <li>{todo.id}</li>
            </ul>
        ))
    } */}

  </div>;
}
