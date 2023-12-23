import React from "react";

const NoteItem = (props) => {
  return (
    <div className="col-md-3 my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.description}
          </p>
          <i className="fa-solid fa-trash"/>
          <i className="fa-regular fa-pen-to-square mx-4"/>
        </div>
      </div>
    </div>
  );
};
export default NoteItem;
