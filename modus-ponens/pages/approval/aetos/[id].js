import React from "react";
import { useRouter } from "next/router";
import AETOSApproval from "../../../components/ApprovePages/AETOSApproval";
import DashBoardHeader from "../../../components/dashboard/DashboardHeader";
// import HeroHeader from "../../../components/Layout/HeroHeader";

export default function RequestPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <DashBoardHeader numItems={6} />
      <div className="flex flex-col items-center justify-center bg-light-blue-0">
        <AETOSApproval id={id} user="placeholder" />
      </div>
    </div>
  );
}
