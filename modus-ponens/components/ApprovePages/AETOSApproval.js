import React, { useState, useEffect } from "react";
import MaxRow from "../Container/MaxRow";
import FormExterior from "../Requests/FormExterior";
import UneditableTextField from "../Requests/UneditableTextField";
import TextFieldHeaders from "../Requests/TextFieldHeaders";
import FullWidthButton from "../Requests/FullWidthButton";
import ApproveModal from "./ApproveModal";
import getPONData from "../../api/getPONData";
import ItemImage from "./ItemImage";

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
    </div>
  );
};

export default function AETOSApproval({ id }) {
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
            text={"Approve"}
            type={1}
            onClick={() => {
              setOpen(true);
            }}
          />
        </div>
      </FormExterior>
      <ApproveModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        headingText={"Approve Request"}
        bodyText={"Are you sure you want to approve the request?"}
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
