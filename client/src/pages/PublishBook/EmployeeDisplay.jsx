import React from "react";

function EmployeeDisplay({ employees }) {
  return (
    <div className="text-white border-b-white">
      {employees.length &&
        employees.map((e, index) => {
          return (
            <div
              key={index}
              className="flex hover:shadow-lg cursor-pointer hover:border-l-2 px-2"
            >
              <div className="pr-4">X</div>
              <div>{e}</div>
            </div>
          );
        })}
    </div>
  );
}

export default EmployeeDisplay;
