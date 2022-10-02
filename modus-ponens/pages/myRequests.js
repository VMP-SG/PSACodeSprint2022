import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getRoleAndName } from "../utils/strings";

import DashBoardCard from "../components/Dashboard/DashboardCard";
import DashBoardHeader from "../components/Dashboard/DashboardHeader";
import getPONData from "../api/getPONData";
import Header from "../components/Text/Header";
import HeroHeader from "../components/Layout/HeroHeader";

const tasks = () => {
  const [data, setData] = useState({});
  const baseURL = "/requests"
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const [role, name] = getRoleAndName(user.displayName);

        var filteredData = {};

        getPONData("").then(({ data }) => {
          for (const [key, value] of Object.entries(data)) {
            if (value.requestorID === user.displayName) {
              filteredData[key] = value;
            }
          }
          setData(filteredData)
        });
      }
    });
  }, []);

  return (
    <div className="font-primary bg-light-blue-0 h-full">
      <HeroHeader title={"Tasks Dashboard"} subtitle={"View your requests here!"}/>
      <div className="flex justify-center">
        <div className="w-[1280px]">
          <div className="grid grid-cols-3 my-48 mx-20 gap-10">
            {Object.keys(data).map((id) => {
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
                  url={`${baseURL}/${id}`}
                  key={id}
                  status={data[id].status}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default tasks;
