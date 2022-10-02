import { useState, useEffect } from "react"; 
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getRoleAndName } from "../utils/strings"

import DashBoardCard from "../components/Dashboard/DashboardCard";
import DashBoardHeader from "../components/Dashboard/DashboardHeader";

const tasks = () => {
  const [user, setUser] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [data, setData] = useState({});
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        const [role, name] = getRoleAndName(user.displayName);
        setRole(role);
        setName(name);
        console.log(role, name)
      }
    });
  }, []);

  return (
    <div className="font-primary bg-light-blue-0 h-full">
      <DashBoardHeader numItems={6} />
      <div className="flex justify-center">
        <div className="w-[1280px]">
          <div className="grid grid-cols-3 my-48 mx-20 gap-10">
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
            />
            <DashBoardCard
              company={"ABC Pte Ltd"}
              description={
                "A cool wrench, A cool torch, Very Cool Earbuds, Ultra Amazing Things, The best items in the world no cap bro trust me"
              }
              requestor={"Ivan Loke"}
              time={"23:59"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default tasks;
