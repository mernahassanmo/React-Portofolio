import React from "react";
import { saveAs } from "file-saver";

export default function App() {
  const saveFile = () => {
    saveAs(
      "https://docs.google.com/document/d/1WA19JDurc-wIuby89mYaSFTqPKN6VLNR/edit?usp=sharing&ouid=106904070362133248992&rtpof=true&sd=true",
      "Merna Hassan Resume.docx"
    );
  };
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <button onClick={saveFile}  className=" btn-outline-dark text-uppercase">Download Resume</button>
    </div>
  );
}