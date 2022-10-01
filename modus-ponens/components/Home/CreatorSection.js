import React from "react";
import MaxRow from "../Container/MaxRow";
import CreatorCard from "./CreatorCard";

import Mingen from "../../assets/Mingen.png";
import Huix from "../../assets/Huix.jpg";
import Hochi from "../../assets/Hochi.jpg";
import Daozheng from "../../assets/Daozheng.jpg";

const LeftChild = () => {
  return (
    <div>
      <CreatorCard
        text={
          "“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.” "
        }
        name={"Koh Ming En"}
        designation={"Team Lead, VMP"}
        image={Mingen}
        url={"https://www.linkedin.com/in/ming-en-koh-703325233/"}
      />
      <CreatorCard
        text={
          "“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.” "
        }
        name={"Chang Dao Zheng"}
        designation={"Web Developer, VMP"}
        image={Daozheng}
        url={"https://www.linkedin.com/in/dao-zheng-chang/"}
      />
    </div>
  );
};

const RightChild = () => {
  return (
    <div>
      <CreatorCard
        text={
          "“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.” "
        }
        name={"Ng Ho Chi"}
        designation={"Web Developer, VMP"}
        image={Hochi}
        url={"https://www.linkedin.com/in/nghochi/"}
      />
      <CreatorCard
        text={
          "“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.” "
        }
        designation={"Web Developer, UI/UX Designer, VMP"}
        name={"Chay Hui Xiang"}
        image={Huix}
        url={"https://www.linkedin.com/in/hui-xiang/"}
      />
    </div>
  );
};

export default function CreatorSection() {
  return (
    <div className="flex justify-center bg-light-blue-1">
      <div className="w-[1280px] py-[100px]">
        <div className="text-5xl font-semibold text-center mb-10">
          Meet the Creators
        </div>
        <MaxRow
          leftChild={<LeftChild />}
          rightChild={<RightChild />}
          leftAlign={"center justify-center"}
          rightAlign={"center justify-center"}
        />
      </div>
    </div>
  );
}
