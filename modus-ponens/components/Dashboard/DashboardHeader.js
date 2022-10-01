import Image from "next/image";
import Ctext from "../../components/Text/Ctext";

const DashBoardHeader = ({ numItems }) => {
  return (
    <div className="bg-blue-0 py-36 space-y-7">
      <Ctext styles={"text-title font-bold"}>Tasks Dashboard</Ctext>
      {numItems > 0 && (
        <Ctext styles={"text-subtitle"}>
          {numItems} {numItems > 1 ? "Items" : "item"} {numItems > 1 ? "require" : "requires"} your attention! {<Image src="/warning.svg" height={15} width={15} />}
        </Ctext>
      )}
      {numItems == 0 && <Ctext>No outstanding tasks!</Ctext>}
    </div>
  );
};

export default DashBoardHeader;
