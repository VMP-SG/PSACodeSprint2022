import React from "react";
import { useRouter } from "next/router";
import DOApproval from "../../../components/ApprovePages/DOApproval";

export default function RequestPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <DOApproval id={id} user="placeholder" />
  );
}