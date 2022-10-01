import React from "react";
import { useRouter } from "next/router";
import AETOSApproval from "../../../components/ApprovePages/AETOSApproval";
import HeroHeader from "../../../components/Layout/HeroHeader";

export default function RequestPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="flex flex-col items-center justify-center bg-light-blue-0">
      <HeroHeader
        title="Tasks Dashboard"
        subtitle="items require your attention"
      />
      <AETOSApproval id={id} />
    </div>
  );
}
