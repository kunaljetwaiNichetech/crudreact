import React, { useEffect } from "react";
import "./Display2.css";
import { useDispatch, useSelector } from "react-redux";
import { CrudOpration } from "../slicer/Cruddopration";
import { ListSlice } from "../slicer/ListSlice";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";

//this is apppp dunction 
export default function Display2() {
  // this ro show the elements
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.List.todo;
  });
  const handelDelete = (items) => {
    dispatch(ListSlice.actions.RemoveList(items.id));
    // dispatch({ type: "ListSlice.List", payload: "21212121" });

    // console.log(item);
  };
  const handeledit =(items)=>{

  }
  return (
    <div>
      <div>
        <Link to="/form">
          <button>Add Item </button>
        </Link>
      </div>
      <table className="tabel">
        <thead>
          <tr>
            <td className="tabel">Id</td>
            <td className="tabel">Name</td>
            <td className="tabel">Actions</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <>
                <td className="tabel">{item.id}</td>
                <td className="tabel">{item.name}</td>
                <td className="tabel">
                  <Link to={`/edit/${item.id}`}>
                    <button> Edit </button>
                  </Link>

                  <button onClick={() => handelDelete(item)}> Delete </button>
                </td>
              </>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
