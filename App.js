import { useState } from "react";

export default function App() {
  return (
    <div className="container-fluid">
      {" "}
      <MyHeader />
    </div>
  );
}
function MyHeader(){
  const headerApp = "MyChatApp";
  const studentName = "Amit kumawat";
  const studentId = "210940520011";
  const [inputchat, setinputchat] = useState("");

  const handleinput = (e) => {
    const newvalue = e.target.value;
    setinputchat(newvalue);
  };
  const sendMesseage = () => {};


  return (
    <div>
      <div className="row bg-secondary p-3">
      <div className="col fs-1 ">{headerApp}</div>
      <div className="col fs-4">
      {studentName} {studentId}
      </div>
    </div>

    <div className="row mt-2">
      <div className="col-10 p-2 h-50">
        <input 
        type="text"
        name=""
        id=""
        placeholder="Lets Chat Here..."
        className="form-control w-100 p3 rounded-pill"
        onChange={handleinput} 
        />
      </div>

      <div className="col-2 p-2">
        <input
        type="button"
        value="send"
        className="form-control p-3 rounded-pill"
        onChange={sendMesseage}
        />
      </div>
    </div>

    <div className="row bg-bg-bg-primary">
      <div className="col-12 p-3 h-20">
        <input
          type=""
          name=""
          id=""
          className="form-control w-100 p-3 h-20"
          />
      </div>
    </div>

    <div className="row bg-bg-bg-primary">
      <div className="col-12 p-3 h-20">
        <input
        type=""
        name=""
        id=""
        className="form-control w-100 p-3 h-20"
        />
      </div>
    </div>
  </div>
  );
}