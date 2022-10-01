import React, { useState, useEffect } from "react";
import MaxRow from "../Container/MaxRow";
import FormExterior from "./FormExterior";
import UneditableTextField from "./UneditableTextField";
import TextFieldHeaders from "./TextFieldHeaders";
import FullWidthButton from "./FullWidthButton";
import StatusSection from "./StatusSection";
import QRCode from "react-qr-code";
import QRModal from "./QRModal";

const RequestLeft = ({}) => {
  return (
    <div className="w-full px-5">
      <TextFieldHeaders title={"Company Details"} />
      <UneditableTextField header={"Company"} type={"text"} value={"ABC"} />
      <TextFieldHeaders title={"Requestor Details"} />
      <UneditableTextField header={"Last Name"} type={"text"} value={"Bob"} />
      <UneditableTextField
        header={"Identification Number"}
        type={"text"}
        value={"1231231"}
      />
      <TextFieldHeaders title={"Purpose of Entry"} />
      <UneditableTextField
        header={"Main Description"}
        type={"text"}
        value={"Bring toilet paper"}
      />
      <UneditableTextField
        header={"Additional details"}
        type={"text"}
        value={"500 rolls"}
      />
      <TextFieldHeaders title={"Driver Details"} />
      <UneditableTextField
        header={"First Name"}
        type={"text"}
        value={"Muthu"}
      />
      <UneditableTextField
        header={"Pass Number"}
        type={"text"}
        value={"123123123"}
      />
      <UneditableTextField
        header={"Vehicle Number"}
        type={"text"}
        value={"SAD1241D"}
      />
    </div>
  );
};
const RequestRight = ({}) => {
  return (
    <div className="w-full px-5">
      <TextFieldHeaders title={"Items to be declared"} />
      <UneditableTextField
        header={"Item 1 Description"}
        type={"text"}
        value={"Fan"}
      />
      <UneditableTextField header={"Quantity"} type={"text"} value={"100"} />
      <UneditableTextField
        header={"Item 2 Description"}
        type={"text"}
        value={"Toilet paper"}
      />
      <UneditableTextField header={"Quantity"} type={"text"} value={"100"} />
      <TextFieldHeaders title={"Status"} />
      <StatusSection />
    </div>
  );
};

export default function ViewRequest({ id }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-10">
      <FormExterior>
        <div className="font-bold text-3xl pb-10">Request #{id}</div>
        <MaxRow
          leftChild={<RequestLeft />}
          rightChild={<RequestRight />}
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
          <QRCode size={256} value={id ? id : ""} />
        </div>
      </QRModal>
    </div>
  );
}
