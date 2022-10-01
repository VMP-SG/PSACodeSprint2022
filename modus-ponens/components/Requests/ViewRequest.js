import React, { useState, useEffect } from "react";
import MaxRow from "../Container/MaxRow";
import FormExterior from "./FormExterior";
import UneditableTextField from "./UneditableTextField";
import TextFieldHeaders from "./TextFieldHeaders";
import FullWidthButton from "./FullWidthButton";
import StatusSection from "./StatusSection";
import QRCode from "react-qr-code";
import QRModal from "./QRModal";
import getPONData from "../../api/getPONData";
import ItemImage from "../ApprovePages/ItemImage";

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
        value={data.id}
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
        value={data.passNumber}
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
  return (
    <div className="w-full px-5">
      <TextFieldHeaders title={"Items to be declared"} />
      <UneditableTextField
        header={"Item 1 Description"}
        type={"text"}
        value={data.description_0}
      />
      <UneditableTextField
        header={"Quantity"}
        type={"text"}
        value={data.quantity_0}
      />
      <ItemImage src={data.image_0} />
      <UneditableTextField
        header={"Item 2 Description"}
        type={"text"}
        value={"Toilet paper"}
      />
      <UneditableTextField header={"Quantity"} type={"text"} value={"100"} />
      <TextFieldHeaders title={"Status"} />
      <StatusSection status={data.status} />
    </div>
  );
};

export default function ViewRequest({ id }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    getPONData(id).then((res) => {
      setData(res.data);
    });
  }, [id]);
  return data?.additionalDetails ? (
    <div className="py-10">
      <FormExterior>
        <div className="font-bold text-3xl pb-10">Request #{id}</div>
        <MaxRow
          leftChild={<RequestLeft data={data} />}
          rightChild={<RequestRight data={data} />}
          leftAlign="start"
          rightAlign="start"
        />
        <div>
          <FullWidthButton text={"Back"} type={2} onClick={() => {}} />
          <FullWidthButton
            text={"Generate QR Code"}
            type={1}
            onClick={() => {
              setOpen(true);
            }}
          />
        </div>
      </FormExterior>
      <QRModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        headingText={"Generated QR Code"}
      >
        <div className="flex flex-col justify-center items-center pb-5">
          <div className="flex justify-center items-center py-5">
            Please show this to the AETOS Officer to complete your E-PON
            Submission
          </div>
          <QRCode
            size={256}
            value={id ? `localhost:3000/approval/aetos/${id}` : ""}
          />
        </div>
      </QRModal>
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
