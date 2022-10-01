import React, { useEffect } from "react";
import getPONData from "../api/getPONData";
import RequestForm from "../components/Form/RequestForm";
import QueryRequest from "../components/test/QueryRequest";

import updateStatus from "../api/updateStatus";
import DashBoard from "./dashboard/[id]";
import MainHeader from "../components/Layout/MainHeader";
import MainFooter from "../components/Layout/MainFooter";


export default function Home() {
  // useEffect(() => {
  //   // submitPONData({ fuck: "you" }).then((res) => console.log(res));
  //   updateStatus("-NDDSfgNxziYq9czpWDx", 1).then((res) => console.log(res));
  //   getPONData("-NDDSfgNxziYq9czpWDx").then((res) => console.log(res));
  // }, []);
  return (
  <div>
    <RequestForm />
    <QueryRequest filterKey={"company"} filter={"asdfasdf"}/>
    <DashBoard />
  </div>
  )
}
