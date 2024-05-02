import React, { useEffect, useState } from "react";
import data from "./data.json";

function Calender() {
  const [textarea, setTextarea] = useState("");
  const [dropdownValue, setDropdownValue] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      const jsonData = JSON.parse(textarea);
      setData(jsonData);
      console.log("valid json");
    } catch (error) {
      console.log("not valid json format!", error);
    }
  }, [textarea]);
  return (
    <div className="main">
      <div className="calender"></div>
      <div className="calender__data">
        <textarea
          name="text"
          id="text"
          value={textarea}
          cols="30"
          rows="10"
          onChange={(e) => setTextarea(e.target.value)}
        ></textarea>
        <select
          name="years"
          id="year-select"
          value={dropdownValue}
          onChange={(e) => setDropdownValue(e.target.value)}
        >
          <option value="">Select year</option>
          {Array.from(
            { length: new Date().getFullYear() - 1999 },
            (_, index) => (
              <option key={index} value={2000 + index}>
                {2000 + index}
              </option>
            )
          )}
        </select>
      </div>
    </div>
  );
}

export default Calender;
