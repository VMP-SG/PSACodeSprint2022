import Image from "next/image";
import Link from "next/link";
import FramerMotion from "../../components/FramerMotion/FramerMotion";
import TwoLinesText from "../../components/Text/TwoLinesText";

const DashBoardCard = ({
  company,
  description,
  requestor,
  time,
  url = "/",
}) => {
  return (
    <div className="col-span-1">
        <FramerMotion />
        <div className="text-black">
          <div className="p-10 font-primary bg-white rounded-b-md drop-shadow-lg">
              <p className="text-card-header font-semibold">{company}</p>
              <div className="py-8">
                  <TwoLinesText styles="text-card-body text-slate-300">Items: {description}</TwoLinesText>
                  <p className="text-card-body">
                    {requestor} | {time}
                  </p>
              </div>
              <Link href={url}>
                <a className="text-card-body text-blue-link font-medium">View More →</a>
              </Link>
              <div className="h-[30px]"/>
          </div>
        </div>
    </div>
  );
};

export default DashBoardCard;
