import React from "react";

const statusTypes = {
  0: [3, 1, 1, 1],
  1: [3, 2, 1, 1],
  2: [3, 2, 2, 1],
  3: [3, 2, 2, 2],
  4: [3, 4, 4, 4],
  5: [3, 2, 4, 4],
  6: [3, 2, 2, 4],
};

const StatusChip = ({ type }) => {
  // type == 1: pending, 2: approved, 3: Submitted, 4: Rejected
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
  const rejected = {
    background: "#FFFFFF",
    color: "#C14040",
    border: "1px solid",
    fontWeight: 600,
  };
  return (
    <div
      style={
        type === 2 || type === 3 ? primary : type === 4 ? rejected : greyed
      }
      className="flex flex-row justify-center items-center w-[70px] m-2 rounded-md text-xs text-grey-main"
    >
      {type === 1
        ? "Pending"
        : type === 2
        ? "Approved"
        : type === 4
        ? "Rejected"
        : "Submitted"}
    </div>
  );
};

const StatusCircle = ({ type, by, text, line }) => {
  const submittedStyle = "bg-blue-link";
  const pendingStyle = "bg-grey-main";
  const rejectedStyle = "bg-dark-red";
  return (
    <div>
      <div className="flex items-center">
        <div
          className={`w-[30px] h-[30px] my-2 mr-2 rounded-full ${
            type === 4
              ? rejectedStyle
              : type !== 1
              ? submittedStyle
              : pendingStyle
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

export default function StatusSection({ data }) {
  const status = data.status;
  return (
    <div className="py-5">
      <StatusCircle
        type={statusTypes[status][0]}
        text={"Submission of Request"}
        by={data.requestorID}
        line
      />
      <StatusCircle
        type={statusTypes[status][1]}
        text={"Approval by Designated Officer"}
        by={data.designatedOfficer}
        line
      />
      <StatusCircle
        type={statusTypes[status][2]}
        text={"Approval by Counter Signing Officer"}
        by={data.counterSignee}
        line
      />
      <StatusCircle
        type={statusTypes[status][3]}
        text={"Submission to AETOS"}
        by={data.approvingAetosOfficer}
      />
    </div>
  );
}
