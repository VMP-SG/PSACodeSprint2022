import HomeHeroImage from "../../assets/HomeHeroImage.png";
import HeroButton from "./HeroButton";
import MaxRow from "../Container/MaxRow";

const LeftChild = () => {
  return (
    <div className="pr-16">
      <div className="font-semibold text-5xl pb-5">
        Secure your Pass Out Notes with ModusPonens
      </div>
      <div className="font-thin text-lg text-grey-main my-5">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </div>
      <HeroButton text={"Learn More"} />
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
      <div className="w-[1280px]">
        <MaxRow leftChild={<LeftChild />} rightChild={<RightChild />} />
      </div>
    </div>
  );
}
