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
          "Hello! I am currently a Year 2 undergraduate pursuing a degree in Computer Science at the School of Computer Science and Engineering at Nanyang Technological University (NTU), Singapore. I am also under the CN Yang Scholars' Programme, which is an interdisciplinary, research-focused programme."
        }
        name={"Koh Ming En"}
        designation={"Team Lead, VMP"}
        image={Mingen}
        url={"https://www.linkedin.com/in/ming-en-koh-703325233/"}
      />
      <CreatorCard
        text={
          "I'm a Year 2 Renaissance Engineering Programme Scholar specialising in the field of computer science. Through my years of tinkering in the field of science and research, I've developed a strong passion for computer science and software. So far, my software skillsets include web development, app development, backend development, firmware programming, cybersecurity and machine learning."
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
          "I’m a second year student studying Computer Science at Nanyang Technological University under the CN Yang Scholars Programme. I’m extremely interested in anything related to technology, and have dabbled in multiple different areas of tech, including but not limited to Software Development, Cybersecurity, Machine Learning as well as Blockchain technologies."
        }
        name={"Ng Ho Chi"}
        designation={"Web Developer, VMP"}
        image={Hochi}
        url={"https://www.linkedin.com/in/nghochi/"}
      />
      <CreatorCard
        text={
          "I'm a Year 2 Renaissance Engineering Programme Scholar specialising in the field of computer science. Through my years of tinkering in the field of science and research, I've developed a strong passion for computer science and software. So far, my software skillsets include web development, app development, backend development, firmware programming, cybersecurity and machine learning."
        }
        designation={"Web Developer & UI/UX Designer, VMP"}
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
