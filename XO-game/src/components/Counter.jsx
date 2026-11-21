import { useState } from "react";

export default function Counter() {
  const [status, setStatus] = useState("loading");

  const handleStatus = () => {
    setStatus("success");
    console.log("change status");
  };

  return (
    <div>
      <div>{status}</div>

      <button
        className="border rounded-md bg-sky-100 hover:cursor-pointer"
        onClick={handleStatus}
      >
        Change Status
      </button>
    </div>
  );
}
