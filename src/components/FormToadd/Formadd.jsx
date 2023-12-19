import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CrudOpration } from "../slicer/Cruddopration";
import { ListSlice } from "../slicer/ListSlice";
import { useNavigate } from "react-router-dom";
// import { ListSlice } from '../slicer/ListSlice'

export default function Formadd() {
  const values = useSelector((state) => {
    return state.List.todo;
  });
  // console.log(values)
  let [id, setId] = useState(values.id);
  let [Name, setName] = useState(values.Name);
  const dispatch = useDispatch();
  let history = useNavigate();
  dispatch(
    CrudOpration.actions.addname({
      Name: Name,
      id: id,
    })
  );

  const handelsubmit = (e) => {
    e.preventDefault();
    console.log(Name);
    console.log(id);
    history("/");
    // dispatch(ListSlice.actions.AddList(Name));
    // dispatch(ListSlice.actions.AddList(id));
    dispatch(ListSlice.actions.AddList({ Name, id }));
  };

  return (
    <div>
      <form onSubmit={handelsubmit}>
        <label>Id : </label>
        <input
          type="number"
          onChange={(e) => setId(e.target.value)}
          value={id}
        />
        <br />
        <label>Name : </label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={Name}
        />
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}
