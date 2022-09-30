import React, { useEffect } from "react";
import getPONData from "../api/getPONData";
import submitPONData from "../api/submitPONData";

export default function Home() {
  useEffect(() => {
    submitPONData({ fuck: "you" }).then((res) => console.log(res));
    getPONData().then((res) => console.log(res));
  }, []);
  return <h1 className="text-3xl font-bold underline">PENIS</h1>;
}
