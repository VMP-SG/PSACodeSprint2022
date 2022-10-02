import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getRoleAndName } from "../utils/strings";

import DashBoardCard from "../components/Dashboard/DashboardCard";
import DashBoardHeader from "../components/Dashboard/DashboardHeader";
import getPONData from "../api/getPONData";

const Tasks = () => {
  const [data, setData] = useState({});
  const [url, setURL] = useState("");
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const [role, name] = getRoleAndName(user.displayName);
        setURL(
          role === "DO"
            ? "/approval/do"
            : role === "PSA"
            ? "/approval/cso"
            : "/approval/aetos"
        );

        var filteredData = {};

        getPONData("").then(({ data }) => {
          for (const [key, value] of Object.entries(data)) {
            if (role === "DO" && value.status === 0) {
              filteredData[key] = value;
            } else if (role === "AETOS" && value.status === 2) {
              filteredData[key] = value;
            } else if (
              role === "PSA" &&
              value.counterSignee === user.displayName &&
              value.status === 1
            ) {
              if (
                value.requestorID === role + "/" + name ||
                value.counterSignee === role + "/" + name
              ) {
                filteredData[key] = value;
              }
            }

            setData(filteredData);
          }
        });
      }
    });
  }, []);

  return (
    <div className="font-primary bg-light-blue-0 h-full">
      <DashBoardHeader numItems={Object.keys(data).length} />
      <div className="flex justify-center">
        <div className="w-[1280px]">
          <div className="grid grid-cols-3 my-48 mx-20 gap-10">
            {Object.keys(data).map((id) => {
              console.log(data[id].items);
              return (
                <DashBoardCard
                  company={data[id].company}
                  description={data[id].mainDescription}
                  requestor={
                    data[id].requestorFirstName +
                    " " +
                    data[id].requestorLastName
                  }
                  time={data[id]?.time}
                  images={data[id].items}
                  url={`${url}/${id}`}
                  key={id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
