import React, { useEffect, useState } from "react";
import { ReactSession } from "react-client-session";
import axios from "axios";
import EmployeeDisplay from "./EmployeeDisplay";

export default function RegisterYourPublication() {
  const [validEmployees, setValidEmployees] = useState([]);
  const [invalidEmployees, setInvalidEmployees] = useState([]);

  const [employee, setEmployee] = useState("");
  const [credentials, setCredentials] = useState({
    name: "",
    description: "",
    email: ReactSession.get("user").email,
    employees: validEmployees,
  });

  const onCredentialChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onEmployeeInputChange = (e) => {
    setEmployee(e.target.value);
  };

  const onEmployeeAddClick = async () => {
    if (employee === "") {
      alert("Employee Field is empty.");
    } else {
      const employeeCheck = await axios({
        url: "http://localhost:3001/publisher/check",
        data: { email: employee },
        method: "POST",
      }).then(async (checkResponse) => {
        console.log(checkResponse);
        if (checkResponse.data.status === 403) {
          alert(
            "Please ensure that the email you have entered has an account on out website first."
          );
          if (!invalidEmployees.includes(employee)) {
            setInvalidEmployees([...invalidEmployees, employee]);
          }
          setEmployee("");
        } else if (checkResponse.data.status === 200) {
          if (!validEmployees.includes(employee)) {
            setValidEmployees([...validEmployees, employee]);
          }
          setEmployee("");
        }
      });
    }
  };

  const Register = async () => {
    const response = await axios({
      url: "http://localhost:3001/publisher/createpublisher",
      data: credentials,
      method: "POST",
    })
      .then((data) => {
        console.log(data);
        setCredentials({
          name: "",
          description: "",
          email: ReactSession.get("user").email,
          employees: validEmployees,
        });
        alert(
          "Your publication has been registered successfully. Please logout and login again to get your publication access."
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(validEmployees);
  }, [validEmployees]);

  useEffect(() => {
    setCredentials({ ...credentials, employees: validEmployees });
  }, [validEmployees]);

  useEffect(() => {
    console.log(credentials);
  });

  return (
    <div className="pt-[100px]">
      <div className=" mx-[5%] px-5 py-4 bg-red-700 rounded-md shadow-lg">
        <div className="w-fit text-[30px] font-semibold capitalize mx-auto mb-6 underline text-slate-200">
          Register Your Publication
        </div>
        <div className="grid grid-cols-8 gap-7 text-[20px]">
          <label htmlFor="name" className="col-span-2 text-right">
            Publication Name:
          </label>
          <input
            className="col-span-6 rounded-md shadow-md focus:bg-slate-200 focus:shadow-sm focus:border-none"
            name="name"
            onChange={onCredentialChange}
            value={credentials.name}
          />
          <label htmlFor="description" className="col-span-2 text-right">
            Description:
          </label>
          <textarea
            rows="10"
            className="col-span-6 rounded-md shadow-md focus:bg-slate-200 focus:shadow-sm focus:border-none"
            name="description"
            onChange={onCredentialChange}
            value={credentials.description}
          />
          <label htmlFor="addEmployee" className="col-span-2 text-right">
            Employee Email:
          </label>
          <input
            className="col-span-5 rounded-md shadow-md focus:bg-slate-200 focus:shadow-sm focus:border-none"
            name="addEmployee"
            onChange={onEmployeeInputChange}
            value={employee}
          />
          <button
            className="px-1 py-2 rounded-md bg-white text-black"
            onClick={onEmployeeAddClick}
          >
            Add
          </button>
          <div className="col-span-full md:col-span-4">
            <div className="pb-2 border-b-2 mb-1 text-white">
              Valid Employee List
            </div>
            <EmployeeDisplay
              employees={validEmployees}
              setEmployees={setValidEmployees}
            />
          </div>
          <div className="col-span-full md:col-span-4">
            <div className="pb-2 border-b-2 text-white mb-1">
              Invalid Employee List
            </div>
            <EmployeeDisplay
              employees={invalidEmployees}
              setEmployees={setInvalidEmployees}
            />
          </div>
        </div>
        <div
          className="rounded-sm shadow-gray-600 shadow-md text-white hover:bg-red-500
          hover:shadow-md w-fit px-4 py-3 mx-auto mt-3 cursor-pointer"
          onClick={Register}
        >
          Register
        </div>
      </div>
    </div>
  );
}
