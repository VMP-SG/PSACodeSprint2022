import { useRouter } from "next/router";
import DashBoardCard from "../../components/Dashboard/DashboardCard";
import DashBoardHeader from "../../components/Dashboard/DashboardHeader";

const DashBoard = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="font-primary bg-light-blue-0 h-full">
      <DashBoardHeader numItems={6} />
      <div className="grid grid-cols-3 my-48 mx-20 gap-10">
        <DashBoardCard
          company={"ABC Pte Ltd"}
          description={"A cool wrench, A cool torch, Very Cool Earbuds, Ultra Amazing Things, The best items in the world no cap bro trust me"}
          requestor={"Ivan Loke"}
          time={"23:59"}
        />
        <DashBoardCard
          company={"ABC Pte Ltd"}
          description={"A cool wrench, A cool torch, Very Cool Earbuds, Ultra Amazing Things, The best items in the world no cap bro trust me"}
          requestor={"Ivan Loke"}
          time={"23:59"}
        />
        <DashBoardCard
          company={"ABC Pte Ltd"}
          description={"A cool wrench, A cool torch, Very Cool Earbuds, Ultra Amazing Things, The best items in the world no cap bro trust me"}
          requestor={"Ivan Loke"}
          time={"23:59"}
        />
        <DashBoardCard
          company={"ABC Pte Ltd"}
          description={"A cool wrench, A cool torch, Very Cool Earbuds, Ultra Amazing Things, The best items in the world no cap bro trust me"}
          requestor={"Ivan Loke"}
          time={"23:59"}
        />
        <DashBoardCard
          company={"ABC Pte Ltd"}
          description={"A cool wrench, A cool torch, Very Cool Earbuds, Ultra Amazing Things, The best items in the world no cap bro trust me"}
          requestor={"Ivan Loke"}
          time={"23:59"}
        />
        <DashBoardCard
          company={"ABC Pte Ltd"}
          description={"A cool wrench, A cool torch, Very Cool Earbuds, Ultra Amazing Things, The best items in the world no cap bro trust me"}
          requestor={"Ivan Loke"}
          time={"23:59"}
        />
      </div>
    </div>
  );
};

export default DashBoard;
