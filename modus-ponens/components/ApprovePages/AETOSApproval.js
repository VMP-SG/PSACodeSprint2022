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
import updatePONData from "../../api/updatePONData";

const THRESHOLD = 0.1;

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

const RequestRight = ({ data, setStatusArray, setnewImages }) => {
  // const [images, setImages] = useState([]);
  const [displayImage, setDisplayImage] = useState("");
  const [dropzoneStatus, setDropzoneStatus] = useState(1);
  const onDrop = useCallback((acceptedFiles) => {
    // add API request here
    var newImages = {};

    acceptedFiles.map((file, index) => {
      const reader = new FileReader();
      reader.onload = async function (e) {
        const base64 = e.target.result;
        const result = await objectDetect(base64);
        const newData = result.data;
        newImages[`item${index}`] = newData;
        const image = newData.image;
        const imagenobytes = image.substring(2, image.length - 1);
        const itemObj = newData.item_dict;
        const initialItemObj = data.cvInitial[`item${index}`].item_dict;
        var totalObjects = Object.values(initialItemObj).reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        var sum = 0;
        for (var key of Object.keys(initialItemObj)) {
          var num = key in itemObj ? itemObj[key] : 0;
          console.log("num", num);
          sum += Math.min(initialItemObj[key], num);
        }
        console.log("sum", sum);
        setDropzoneStatus(sum / totalObjects < THRESHOLD ? 2 : 3);
        setDisplayImage(`data:image/png;base64,${imagenobytes}`);
        setStatusArray((prevState) => {
          var arr = [...prevState];
          arr[index] = sum / totalObjects < THRESHOLD ? 2 : 3;
          return arr;
        });
        setnewImages(newImages);
        // setImages((prevState) => [
        //   ...prevState,
        //   { id: Math.random(), src: e.target.result },
        // ]);

        // setDropzoneStatus() // change this to 1 for blue, 2 for red, 3 for green
      };
      reader.readAsDataURL(file);
      return file;
    });
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
          </>
        );
      })}
    </div>
  );
};

export default function AETOSApproval({ id }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [newImages, setnewImages] = useState({});
  const [statusArray, setStatusArray] = useState([]);
  useEffect(() => {
    if (id) {
      getPONData(id).then((res) => {
        setData(res.data);
        var arr = [];
        for (var i = 0; i < Object.keys(res.data.items).length; i++) {
          arr.push(0);
        }
        setStatusArray(arr);
      });
    }
  }, [id]);
  const handleDeny = () => {
    updateStatus(id, 6).then(router.push(`/tasks`));
  };
  const handleApprove = () => {
    updatePONData(id, { cvFinal: newImages }).then(
      updateStatus(id, 3).then(router.push(`/tasks`))
    );
  };
  return data?.mainDescription ? (
    <div className="py-10">
      <FormExterior>
        <div className="font-bold text-3xl pb-10 pl-5">Request #{id}</div>
        <MaxRow
          leftChild={<RequestLeft data={data} />}
          rightChild={
            <RequestRight
              data={data}
              setStatusArray={setStatusArray}
              setnewImages={setnewImages}
            />
          }
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
        rejectCount={statusArray.filter((status) => status === 2).length}
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
