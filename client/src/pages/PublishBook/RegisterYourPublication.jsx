import React, { useState } from "react";

export default function RegisterYourPublication() {
  const [cblueentials, setcblueentials] = useState({
    name: "",
    description: "",
    email: "",
    password: "",
    employees: [],
  });
  const [employeelist, setemployeelist] = useState([]);
  const [employee, setemployee] = useState("");

  const addList = (e) => {
    e.preventDefault();
    if (employee.length > 0) {
      setemployeelist([...employeelist, employee]);
      setemployee("");
    } else {
      alert("first add employee");
    }
  };

  const onchange = (e) => {
    setcblueentials({ ...cblueentials, [e.target.name]: e.target.value });
  };
  console.log(cblueentials);

  const onInput = (e) => {
    setemployee(e.target.value);
  };
  console.log(employee);
  console.log(employeelist);

  const Register = () => {
    setcblueentials({ ...cblueentials, employees: { employeelist } });
  };
  console.log("here is final list");
  console.log(cblueentials);

  return (
    <div className="pt-[100px]">
      <div className="bg-blue-400 w-[80%] mx-auto p-7 rounded-md">
        <div className=" w-fit pr-2 h-full font-bold pt-3 text-[15px] mx-auto  md:text-2xl lg:text-3xl">
          <p>Welcome to authoRISE</p>
        </div>
        <br />
        <form>
          <div className="font-bold text-left flex justify-between text-[15px] w-[90%] md:text-md lg:text-xl m-2 ">
            <label for="email">Company Name</label>
            <input
              type="string"
              id="name"
              name="name"
              onChange={onchange}
              requiblue="requiblue"
              className="bg-[#ffffff] w-[60%] font-normal text-[15px]"
            />
          </div>
          <div className="font-bold text-left flex justify-between text-[15px] w-[90%] md:text-md lg:text-xl m-2 ">
            <label for="email">Description</label>
            <input
              type="string"
              id="description"
              name="description"
              onChange={onchange}
              requiblue="requiblue"
              className="bg-[#ffffff] w-[60%] font-normal text-[15px]"
            />
          </div>
          <div className="font-bold text-left flex justify-between text-[15px] w-[90%] md:text-md lg:text-xl m-2 ">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={onchange}
              requiblue="requiblue"
              className="bg-[#ffffff] w-[60%] font-normal text-[15px]"
            />
          </div>
          <div className="font-bold text-left flex justify-between text-[15px] w-[90%] md:text-md lg:text-xl m-2">
            <label for="password">Password</label>
            <input
              type="string"
              id="password"
              name="password"
              onChange={onchange}
              requiblue="requiblue"
              className="bg-[#ffffff] w-[60%] font-normal text-[15px]"
            />
          </div>
        </form>
        <form>
          <div className="bg-blue-200 p-1 mt-10 rounded-md">
            <div className="font-bold text-left flex justify-between mt-10 text-[15px] w-[90%] md:text-md lg:text-xl m-2">
              <label for="password">Add Employee</label>

              <input
                value={employee}
                type="string"
                id="add employee"
                name="add employee"
                onChange={onInput}
                requiblue="requiblue"
                className="bg-[#ffffff] w-[60%] font-normal text-[15px]"
              />
            </div>
            <div className="w-[100%] text-center">
              <button
                onClick={addList}
                className=" w-[26%] font-bold bg-blue-500 rounded-md text-[20px] mt-2 mb-6"
              >
                ADD
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="w-[100%] text-center">
        <button
          onClick={Register}
          className=" w-[26%] font-bold bg-[#9f9f9f] rounded-md text-[20px] mt-6 p-1"
        >
          Register
        </button>
      </div>
    </div>
  );
}
