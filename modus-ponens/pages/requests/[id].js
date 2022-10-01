import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ViewRequest from "../../components/Requests/ViewRequest";
import HeroHeader from "../../components/Layout/HeroHeader";

export default function RequestPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="flex flex-col items-center justify-center bg-light-blue-0">
      <HeroHeader
        title="My Requests"
        subtitle="View the status of your requests here!"
      />
      <ViewRequest id={id} />
    </div>
  );
}
