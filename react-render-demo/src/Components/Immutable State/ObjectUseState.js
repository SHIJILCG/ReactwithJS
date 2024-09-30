import React, { useState } from "react";
const intialstate = {
  fname: "Bruce",
  lname: "wayne",
};

export default function ObjectUseState() {
  const [name, setname] = useState(intialstate);

  const changename = () => {
     const newName ={...name}
     newName.fname ='Clark'
     newName.lname ='Kent'
     setname(newName)
  };
  console.log("Objectusestate render");
  return (
    <div>
      <button onClick={changename} className="border-2 border-black ">
        {name.fname} {name.lname}
      </button>
    </div>
  );
}
