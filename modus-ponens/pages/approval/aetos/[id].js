import React from "react";
import { useRouter } from "next/router";
import AETOSApproval from "../../../components/ApprovePages/AETOSApproval";
import Header from "../../../components/Text/Header";

export default function RequestPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Header title={"Approve Request"} />
      <div className="flex flex-col items-center justify-center bg-light-blue-0">
        <AETOSApproval id={id} user="placeholder" />
      </div>
    </div>
  );
}
