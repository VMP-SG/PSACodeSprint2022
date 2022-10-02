import HomeHeroImage from "../../assets/HomeHeroImage.png";
import HeroButton from "./HeroButton";
import MaxRow from "../Container/MaxRow";

const LeftChild = () => {
  return (
    <div className="pr">
      <div className="font-semibold text-5xl pb-5 leading-[60px]">
        Secure your Pass Out Notes with ModusPonens
      </div>
      <div className="font-thin text-lg text-grey-main my-5">
        Skip the need for multiple rounds of printing and signing physical
        carbon copies of PONs with our fully digital solution that heavily
        simplifies the issuance of PONs via thorough automation, user-friendly
        processes and computer vision.
      </div>
      <a
        href="https://github.com/VMP-SG/PSACodeSprint2022"
        target="_blank"
        rel="noreferrer noopener"
      >
        <HeroButton text={"Learn More"} />
      </a>
    </div>
  );
};

const RightChild = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${HomeHeroImage.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "590px",
    width: "588px",
  };
  return <div style={backgroundImageStyle} />;
};

export default function HeroSection() {
  return (
    <div className="flex justify-center">
      <div className="w-[1280px] pl-[55px] my-[60px]">
        <MaxRow leftChild={<LeftChild />} rightChild={<RightChild />} />
      </div>
    </div>
  );
}
