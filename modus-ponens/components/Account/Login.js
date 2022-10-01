import React, { useState } from "react";
import AccountPage from "./AccountPage";
import FormExterior from "./FormExterior";
import AccountButton from "./AccountButton";
import MPLogo from "../../assets/MPLogo.png";
import TextField from "./TextField";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = (link) => {
    router.push(link);
  };
  return (
    <AccountPage>
      <FormExterior>
        <div>
          <img className="pb-10" src={MPLogo.src} alt="MP Logo" />
          <TextField
            header={"Email"}
            type="text"
            placeholder="example@email.com"
            value={email}
            setValue={setEmail}
          />
          <TextField
            header={"Password"}
            type="password"
            placeholder="hunter2"
            value={password}
            setValue={setPassword}
          />
        </div>
        <div className="flex justify-between relative">
          <AccountButton
            text={"Create Account"}
            type={2}
            onclick={() => {
              navigate("/account/create");
            }}
          />
          <AccountButton text={"Login"} type={1} onclick={() => {}} />
        </div>
      </FormExterior>
    </AccountPage>
  );
}
