import Link from "next/link";
import FramerMotion from "../FramerMotion/FramerMotion";
import TwoLinesText from "../Text/TwoLinesText";
import StatusButton from "../Button/StatusButton";

const parseStatusFlag = (statusFlag) => {
  return statusFlag >= 4
    ? "Rejected"
    : statusFlag === 1
    ? "Pending CSO"
    : statusFlag === 2
    ? "Approved"
    : statusFlag === 3
    ? "Completed"
    : "Pending DO";
};

const DashBoardCard = ({
  company,
  description,
  requestor,
  time,
  images,
  status = null,
  url = "/",
}) => {
  var imageURLs = [];
  for (var val of Object.values(images)) {
    imageURLs.push(val.image);
  }

  return (
    <div className="col-span-1">
      <FramerMotion images={imageURLs} />
      <div className="text-black">
        <div className="p-5 font-primary bg-white rounded-b-md drop-shadow-lg">
          <div className="flex justify-between items-center">
            <div className="font-semibold text-xl">{company}</div>
            {status !== null && <StatusButton status={parseStatusFlag(status)} />}
          </div>
          <div className="py-2">
            <TwoLinesText styles="text-md text-slate-300">
              Items: {description}
            </TwoLinesText>
            <p className="text-md">
              {requestor} | {time ? time : "23:59"}
            </p>
          </div>
          <Link href={url}>
            <a className="text-md text-blue-link font-medium">View More →</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashBoardCard;
