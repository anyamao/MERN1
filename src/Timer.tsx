import { useEffect, useState } from "react";
import Header from "./components/Header.tsx";
import NoteSingle from "./components/NoteSingle.tsx";
import NoteCreation from "./components/NoteCreation.tsx";
import 
const Timer = () => {
  return (
    <main>
      <div className="wrapper">
        <Header></Header>
        <div className="content-wrapper">
          <NoteSingle></NoteSingle>
        </div>
        <NoteCreation></NoteCreation>
      </div>
    </main>
  );
};

export default Timer;
