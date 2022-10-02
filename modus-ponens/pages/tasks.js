import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getRoleAndName } from "../utils/strings";

import DashBoardCard from "../components/Dashboard/DashboardCard";
import DashBoardHeader from "../components/Dashboard/DashboardHeader";
import getPONData from "../api/getPONData";

const tasks = () => {
  const [data, setData] = useState({});
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const [role, name] = getRoleAndName(user.displayName);

        var filteredData = {};

        getPONData("").then(({ data }) => {
          for (const [key, value] of Object.entries(data)) {
            if (role === "DO" && value.status === 0) {
              filteredData[key] = value;
            } else if (role === "AETOS" && value.status === 2) {
              filteredData[key] = value;
            } else if (role === "PSA") {
              if (
                value.requestorID === role + "/" + name ||
                value.counterSignee === name
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
                console.log(data[id].items)
              return (
                <DashBoardCard
                  company={data[id].company}
                  description={data[id].mainDescription}
                  requestor={
                    data[id].requestorFirstName +
                    " " +
                    data[id].requestorLastName
                  }
                  time={"23:59"}
                  key={id}
                  images={data[id].items}
                />
              );
            })}
            {/* <DashBoardCard
              company={"ABC Pte Ltd"}
              description={
                "A cool wrench, A cool torch, Very Cool Earbuds, Ultra Amazing Things, The best items in the world no cap bro trust me"
              }
              requestor={"Ivan Loke"}
              time={"23:59"}
            />
            <DashBoardCard
              company={"ABC Pte Ltd"}
              description={
                "A cool wrench, A cool torch, Very Cool Earbuds, Ultra Amazing Things, The best items in the world no cap bro trust me"
              }
              requestor={"Ivan Loke"}
              time={"23:59"}
            />
            <DashBoardCard
              company={"ABC Pte Ltd"}
              description={
                "A cool wrench, A cool torch, Very Cool Earbuds, Ultra Amazing Things, The best items in the world no cap bro trust me"
              }
              requestor={"Ivan Loke"}
              time={"23:59"}
            />
            <DashBoardCard
              company={"ABC Pte Ltd"}
              description={
                "A cool wrench, A cool torch, Very Cool Earbuds, Ultra Amazing Things, The best items in the world no cap bro trust me"
              }
              requestor={"Ivan Loke"}
              time={"23:59"}
            />
            <DashBoardCard
              company={"ABC Pte Ltd"}
              description={
                "A cool wrench, A cool torch, Very Cool Earbuds, Ultra Amazing Things, The best items in the world no cap bro trust me"
              }
              requestor={"Ivan Loke"}
              time={"23:59"}
            />
            <DashBoardCard
              company={"ABC Pte Ltd"}
              description={
                "A cool wrench, A cool torch, Very Cool Earbuds, Ultra Amazing Things, The best items in the world no cap bro trust me"
              }
              requestor={"Ivan Loke"}
              time={"23:59"}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default tasks;
