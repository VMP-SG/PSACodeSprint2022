import Link from "next/link";
import FramerMotion from "../FramerMotion/FramerMotion";
import TwoLinesText from "../Text/TwoLinesText";

const DashBoardCard = ({
  company,
  description,
  requestor,
  time,
  images,
  url = "/",
}) => {
  var imageURLs = [];
  for (var val of Object.values(images)) {
    imageURLs.push(val.image)
  }

  return (
    <div className="col-span-1">
      <FramerMotion images={imageURLs}/>
      <div className="text-black">
        <div className="p-10 font-primary bg-white rounded-b-md drop-shadow-lg">
          <div className="font-semibold text-xl">{company}</div>
          <div className="py-2">
            <TwoLinesText styles="text-md text-slate-300">
              Items: {description}
            </TwoLinesText>
            <p className="text-md">
              {requestor} | {time}
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
