import StudentListAppRed from "./Extract State vai Reducer.js";
import React, { useState, useReducer } from "react";
import { createRoot } from "react-dom/client";

const StudentList = createRoot(document.getElementById("StudentList"));
StudentList.render(<StudentListAppRed />);
