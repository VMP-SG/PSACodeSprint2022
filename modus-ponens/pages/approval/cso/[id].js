import React from "react";
import { useRouter } from "next/router";
import CounterSigningOfficerApproval from "../../../components/ApprovePages/CounterSigningOfficerApproval";

export default function RequestPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <CounterSigningOfficerApproval id={id} />
  );
}