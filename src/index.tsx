import React from "react";
import ReactDOM from "react-dom";
import GradeTable from "./GradeTable";

import "./styles.css";

import { Subject, SubjectType } from "./types";

function App() {
  return (
    <GradeTable
      subjects={[
        new Subject("Algebra I", 1, SubjectType.MATHEMATICS, "A"),
        new Subject("Geometry", 1, SubjectType.MATHEMATICS, "A"),
        new Subject("Algebra II", 1, SubjectType.MATHEMATICS, "A")
      ]}
    />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
