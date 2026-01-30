import { useEffect, useState } from "react";
import Header from "../../components/Header.tsx";
import NoteSingle from "./NoteSingle.tsx";
import NoteCreation from "./NoteCreation.tsx";
import "./timer.css";
const Timer = () => {
  return (
    <main>
      <div className="wrapper">
        <Header></Header>
        <div className="content-wrapper">
          <NoteSingle></NoteSingle>
          <p>121111111111111</p>
        </div>
        <NoteCreation></NoteCreation>
      </div>
    </main>
  );
};

export default Timer;
