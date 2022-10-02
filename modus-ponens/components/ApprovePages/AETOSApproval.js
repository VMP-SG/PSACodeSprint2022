import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import MaxRow from "../Container/MaxRow";
import FormExterior from "../Requests/FormExterior";
import UneditableTextField from "../Requests/UneditableTextField";
import TextFieldHeaders from "../Requests/TextFieldHeaders";
import ApproveModal from "./ApproveModal";
import ItemImage from "./ItemImage";
import getPONData from "../../api/getPONData";
import updateStatus from "../../api/updateStatus";
import BlueBorderedButton from "../Button/BlueBorderedButton";
import RedButton from "../Button/RedButton";
import GreenButton from "../Button/GreenButton";
import DropZone from "../ImageUpload/DropZone";
import objectDetect from "../../api/objectDetect";

const RequestLeft = ({ data }) => {
  return (
    <div className="w-full px-5">
      <TextFieldHeaders title={"Company Details"} />
      <UneditableTextField
        header={"Company"}
        type={"text"}
        value={data.company}
      />
      <TextFieldHeaders title={"Requestor Details"} />
      <UneditableTextField
        header={"First Name"}
        type={"text"}
        value={data.requestorFirstName}
      />
      <UneditableTextField
        header={"Last Name"}
        type={"text"}
        value={data.requestorLastName}
      />
      <UneditableTextField
        header={"Identification Number"}
        type={"text"}
        value={data.requestorID}
      />
      <TextFieldHeaders title={"Purpose of Entry"} />
      <UneditableTextField
        header={"Main Description"}
        type={"text"}
        value={data.mainDescription}
      />
      <UneditableTextField
        header={"Additional details"}
        type={"text"}
        value={data.additionalDetails}
      />
      <TextFieldHeaders title={"Driver Details"} />
      <UneditableTextField
        header={"First Name"}
        type={"text"}
        value={data.driverFirstName}
      />
      <UneditableTextField
        header={"Pass Number"}
        type={"text"}
        value={data.driverPassNumber}
      />
      <UneditableTextField
        header={"Vehicle Number"}
        type={"text"}
        value={data.vehicleNumber}
      />
    </div>
  );
};

const RequestRight = ({ data }) => {
  const [images, setImages] = useState([]);
  const [displayImage, setDisplayImage] = useState("");
  const [dropzoneStatus, setDropzoneStatus] = useState(1);
  const onDrop = useCallback(async (acceptedFiles) => {

    // add API request here

    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: Math.random(), src: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });

    console.log(images);
    // const base64 = images[images.length-1].src;
    // console.log(base64);
    // const result = await objectDetect(base64);
    // const data = result.data;
    // console.log(data.image);
    // setDisplayImage(data.image);
    // console.log(displayImage);

    // setDropzoneStatus() // change this to 1 for blue, 2 for red, 3 for green

  }, []);

  return (
    <div className="w-full px-5 mb-5">
      <TextFieldHeaders title={"Items to be declared"} />
      {Object.values(data.items).map((item, index) => {
        return (
          <>
            <UneditableTextField
              header={`Item ${index + 1} Description`}
              type={"text"}
              value={item.description}
            />
            <UneditableTextField
              header={"Quantity"}
              type={"text"}
              value={item.quantity}
            />
            <DropZone
              onDrop={onDrop}
              accept={"image/*"}
              image={displayImage}
              thumbnail={item.image}
              status={dropzoneStatus} // status 1 == blue (yet to receive image), status 2 == red (denied), status 3 == blue (accepted)
            />
            {/* <ItemImage src={item.image} /> */}
          </>
        );
      })}
    </div>
  );
};

export default function AETOSApproval({ user, id }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    if (id) {
      getPONData(id).then((res) => {
        setData(res.data);
      });
    }
  }, [id]);
  const handleDeny = () => {
    updateStatus(id, 6).then(router.push(`/dashboard/${user}`));
  };
  const handleApprove = () => {
    updateStatus(id, 3).then(router.push(`/dashboard/${user}`));
  };
  return data?.mainDescription ? (
    <div className="py-10">
      <FormExterior>
        <div className="font-bold text-3xl pb-10 pl-5">Request #{id}</div>
        <MaxRow
          leftChild={<RequestLeft data={data} />}
          rightChild={<RequestRight data={data} />}
          leftAlign="start"
          rightAlign="start"
        />
        <div>
          <div className="flex justify-between px-[20px]">
            <Link href={`/`}>
              <BlueBorderedButton>Cancel</BlueBorderedButton>
            </Link>
            <div className="flex justify-between w-[400px]">
              <RedButton onClick={handleDeny}>Deny</RedButton>
              <GreenButton
                onClick={() => {
                  setOpen(true);
                }}
              >
                Approve
              </GreenButton>
            </div>
          </div>
        </div>
      </FormExterior>
      <ApproveModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        headingText={"Approve Request"}
        bodyText={"Are you sure you want to approve the request?"}
        onClickButton={handleApprove}
      />
    </div>
  ) : (
    <div className="py-10">
      <FormExterior>
        <div className="font-bold text-3xl pb-10">
          Request #{id} was not found
        </div>
      </FormExterior>
    </div>
  );
}
