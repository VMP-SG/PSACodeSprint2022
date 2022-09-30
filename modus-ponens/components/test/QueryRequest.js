import { useState } from "react";
import getPONData from "../../api/getPONData";

const QueryRequest = ({ filterKey, filter }) => {
  const [ID, setID] = useState("  ");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setID(e.target.value);
  };

  const handleSubmit = () => {
    getPONData(ID).then(({ data }) => {
      console.log(data);
      var returnResult = {};
      for (const [key, value] of Object.entries(data)) {
        if (value[filterKey] === filter) {
          returnResult[key] = value;
        }
      }
      setResult(returnResult);
    });
  };

  return (
    <div className="flex flex-col w-1/3">
      <p>Enter ID</p>
      <input
        type="text"
        name={`idField`}
        value={ID}
        onChange={handleChange}
        className="bg-white text-black"
      />
      <input
        type="submit"
        value="Submit"
        onClick={handleSubmit}
        className="bg-white text-black"
      />
      {JSON.stringify(result, null, 2)}
    </div>
  );
};

export default QueryRequest;
