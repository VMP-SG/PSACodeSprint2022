import React, { useEffect, useState } from "react";
import AccountPage from "./AccountPage";
import FormExterior from "./FormExterior";
import AccountButton from "./AccountButton";
import TextField from "./TextField";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("PSA Staff");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const roles = ["PSA Staff", "AETOS Staff", "Designated Officer"];
  return (
    <AccountPage>
      <FormExterior>
        <div>
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
          <AccountButton text={"Cancel"} type={2} onclick={() => {}} />
          <AccountButton text={"Create Account"} type={1} onclick={() => {}} />
        </div>
      </FormExterior>
    </AccountPage>
  );
}
