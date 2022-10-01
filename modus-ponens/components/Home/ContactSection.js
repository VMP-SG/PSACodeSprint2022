import React, { useState } from "react";
import MaxRow from "../Container/MaxRow";
import TextField from "../Account/TextField";
import HeroButton from "./HeroButton";

const LeftChild = () => {
  return (
    <div className="pr-[200px]">
      <div className="font-semibold text-4xl font-primary mt-10 mb-10 self-start relative">
        <div className="absolute left-0 bottom-[-15px] w-[95px] h-[4px] bg-[#185CFF] z-[-1]" />
        <div>Contact Information</div>
      </div>
      <div className="font-thin text-grey-main text-2xl mb-10">
        Fill up the form and our team will get back to you within 24 hours.
      </div>
      <div>
        <div className="flex items-center my-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-[#185CFF] mr-2"
          >
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          vmp@vmpsg.xyz
        </div>
        <div className="flex items-center my-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-[#185CFF] mr-2"
          >
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
          Singapore, SG
        </div>
      </div>
    </div>
  );
};

const RightChild = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [theme, setTheme] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <TextField
          header="Name"
          type="text"
          placeholder="Bob"
          value={name}
          setValue={setName}
          className={"w-full mr-5"}
        />
        <TextField
          header="Email"
          type="text"
          placeholder="Bob@bob.com"
          value={email}
          setValue={setEmail}
          className={"w-full ml-5"}
        />
      </div>
      <TextField
        header="Theme"
        type="text"
        placeholder="Job"
        value={theme}
        setValue={setTheme}
      />
      <TextField
        header="Message"
        type="text"
        placeholder="Your message"
        value={message}
        setValue={setMessage}
      />
      <div className="flex flex-row-reverse">
        <HeroButton text="Send" onclick={() => {}} />
      </div>
    </div>
  );
};

export default function ContactInformation() {
  return (
    <div className="flex justify-center">
      <div className="w-[1280px] my-10">
        <MaxRow leftChild={<LeftChild />} rightChild={<RightChild />} />
      </div>
    </div>
  );
}
