import Image from "next/image";
import Ctext from "../../components/Text/Ctext";

const DashBoardHeader = ({ numItems }) => {
  return (
    <div className="bg-dark-blue-main space-y-7 text-white h-[400px] items-center flex flex-col justify-center">
      <Ctext styles={"text-title font-semibold text-6xl pb-10"}>Tasks Dashboard</Ctext>
      {numItems > 0 && (
        <Ctext styles={"text-lg pb-10"}>
          {numItems} {numItems > 1 ? "Items" : "item"}{" "}
          {numItems > 1 ? "require" : "requires"} your attention!{" "}
          {<Image src="/warning.svg" height={15} width={15} />}
        </Ctext>
      )}
      {numItems == 0 && <Ctext styles="pb-10 text-lg">No outstanding tasks!</Ctext>}
    </div>
  );
};

export default DashBoardHeader;
