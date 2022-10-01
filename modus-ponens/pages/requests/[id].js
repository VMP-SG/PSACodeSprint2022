import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ViewRequest from "../../components/Requests/ViewRequest";

export default function RequestPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="flex justify-center bg-light-blue-0 p-10">
      <ViewRequest id={id} />
    </div>
  );
}
