import React, { useState } from "react";
import AccountPage from "./AccountPage";
import FormExterior from "./FormExterior";
import AccountButton from "./AccountButton";
import TextField from "./TextField";
import { useRouter } from "next/router";
import {signup} from "../../api/auth";

const Dropdown = ({ options, value, setValue }) => {
  return (
    <div className="flex flex-col my-5">
      <label className="my-1 text-gray-500 text-sm font-semibold">Role</label>
      <select
        className="border-0 border-b-2 bg-white focus:outline-none pb-2"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default function CreateAccount() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("PSA Staff");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = (link) => {
    router.push(link);
  };
  const roles = ["PSA Staff", "AETOS Staff", "Designated Officer"];

  const handleCreateAccount = async () => {
    const shortRole = "";
    switch(role){
      case "PSA Staff":
        shortRole = "PSA/"
        break
      case "AETOS Staff":
        shortRole = "AETOS/"
        break;
      case "Desginated Officer":
        shortRole = "DO/"
        break;
    }
    console.log(email)
    console.log(password)
    console.log(shortRole+name)
    
    const user = await signup(email, password, shortRole+name)
    if(user == null) console.log("Sign Up Failed!");
    else await router.push("/");
    window.location.reload();
  }
  return (
    <AccountPage>
      <FormExterior>
        <div className='text-black'>
          <TextField
            header={"Name"}
            type="text"
            placeholder="Bob"
            value={name}
            setValue={setName}
          />
          <TextField
            header={"Email"}
            type="text"
            placeholder="example@email.com"
            value={email}
            setValue={setEmail}
          />
          <Dropdown options={roles} value={role} setValue={setRole} />
          <TextField
            header={"Password"}
            type="password"
            placeholder="hunter2"
            value={password}
            setValue={setPassword}
          />
          <TextField
            header={"Confirm Password"}
            type="password"
            placeholder="hunter2"
            value={confirmPassword}
            setValue={setConfirmPassword}
          />
        </div>
        <div className="flex justify-between relative">
          <AccountButton
            text={"Cancel"}
            type={2}
            onclick={() => {
              navigate("/account/login");
            }}
          />
          <AccountButton text={"Create Account"} type={1} onclick={handleCreateAccount} />
        </div>
      </FormExterior>
    </AccountPage>
  );
}
