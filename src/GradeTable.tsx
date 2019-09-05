import React from "react";
import { Subject } from "./types";

export interface GradeTableProps {
  subjects: Subject[];
}

const GradeTable: React.FC<GradeTableProps> = ({
  subjects
}: GradeTableProps) => (
  <table>
    <thead>
      <tr>
        <th>Class</th>
        <th>Grade</th>
      </tr>
    </thead>
    <tbody>
      {subjects.map(subject => (
        <tr key={subject.name}>
          <td>{subject.name}</td>
          <td>{subject.grade}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default GradeTable;
