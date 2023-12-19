import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListSlice } from "../slicer/ListSlice";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
  const dispatch = useDispatch();
  let [name, setname] = useState("");
  let [ID, setID] = useState();
  const { id } = useParams();
  console.log(id);
  const Editdata = useSelector((state) => {
    return state.List.todo;
  });
  console.log(Editdata);
  let existing = Editdata.filter((f) => f.id === id);
  existing = existing[0];

  useEffect(() => {
    setname(existing.name);
    setID(existing.id);
  }, [Editdata]);

  let history = useNavigate();

  const handelsubmit = (e) => {
    e.preventDefault();
    dispatch(ListSlice.actions.updatename({ name, id }));
    history("/");
  };
  return (
    <div>
      <h1>Edit form</h1>
      <div>
        <form onSubmit={handelsubmit}>
          <label>Id : </label>
          <input
            type="number"
            value={id}
            onChange={(e) => {
              setID(e.target.value);
            }}
          />
          <br />
          <label>Name : </label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
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
