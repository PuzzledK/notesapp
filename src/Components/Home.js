import React from "react";
import Notes from "./Notes";
import AddNote from "./addNote";
const Home = () => {
  return (
    <>
      <div>
        <AddNote/>
        <Notes/>
      </div>
    </>
  );
};
export default Home;
