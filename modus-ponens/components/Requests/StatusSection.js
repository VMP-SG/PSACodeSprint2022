import React from "react";

const StatusChip = ({ type }) => {
  // type == 1: pending, 2: approved, 3: Submitted
  const greyed = {
    background: "#FFFFFF",
    color: "#9597A0",
    border: "1px solid",
    fontWeight: 600,
  };
  const primary = {
    background: "#FFFFFF",
    color: "#185CFF",
    border: "1px solid",
    fontWeight: 600,
  };
  return (
    <div
      style={type === 2 || type === 3 ? primary : greyed}
      className="flex flex-row justify-center items-center w-[70px] m-2 rounded-md text-xs text-grey-main"
    >
      {type === 1 ? "Pending" : type === 2 ? "Approved" : "Submitted"}
    </div>
  );
};

const StatusCircle = ({ type, by, text, line }) => {
  const submittedStyle = "bg-blue-link";
  const pendingStyle = "bg-grey-main";
  return (
    <div>
      <div className="flex items-center">
        <div
          className={`w-[30px] h-[30px] my-2 mr-2 rounded-full ${
            type !== 1 ? submittedStyle : pendingStyle
          }`}
        />
        <div className={"font-semibold"}>{text}</div>
      </div>
      <div
        className={`flex items-center text-xs text-grey-main ml-4 pl-7 ${
          line ? "border-l border-l-grey-main border-dashed" : ""
        }`}
      >
        <div>by: {by}</div>
        <StatusChip type={type} />
      </div>
    </div>
  );
};

export default function StatusSection({}) {
  return (
    <div className="py-5">
      <StatusCircle
        type={3}
        text={"Submission of Request"}
        by={"Ivan Loke Zhi Hao"}
        line
      />
      <StatusCircle
        type={2}
        text={"Approval by Designated Officer"}
        by={"Koh Ming En"}
        line
      />
      <StatusCircle
        type={2}
        text={"Approval by Counter Signing Officer"}
        by={"Chang Dao Zheng"}
        line
      />
      <StatusCircle type={1} text={"Submission to AETOS"} by={"Ng Ho Chi"} />
    </div>
  );
}
