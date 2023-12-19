import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CrudOpration } from "../slicer/Cruddopration";
import { ListSlice } from "../slicer/ListSlice";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
  const dispatch = useDispatch();
  let [name,setname]=useState('')
  let [ID,setID]=useState()
  const { id } = useParams();
  console.log(id);
  const Editdata = useSelector((state) => {
    return state.List.todo;
  });
  console.log(Editdata);
  let existing = Editdata.filter((f) => f.id === id);
  existing = existing[0];
  console.log("exisiting", existing);
  // console.log("name",Editdata.name);
  // console.log("id",Editdata.id);

  let history = useNavigate();

  const handelsubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // console.log(Name);
    history("/");
    // dispatch(ListSlice.actions.AddList(Name));
    // dispatch(ListSlice.actions.AddList(id));
    // dispatch(ListSlice.actions.AddList({ Name, id: idd }));
  };
  return (
    <div>
      <h1>Edit form</h1>
      <div>
        <form onSubmit={handelsubmit}>
          <label>Id : </label>
          <input
            type="number"
            value={existing.id}
            onChange={(e) => {
              setID({ ...id, ID: e.target.value });
            }}
          />
          <br />
          <label>Name : </label>
          <input
            type="text"
            value={existing.name}
            onChange={(e) => {
              setname({ ...name, name: e.target.value });
            }}
          />
          <div>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
