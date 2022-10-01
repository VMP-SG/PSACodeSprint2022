import React, { useState, useEffect } from "react";
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
  return (
    <div className="w-full px-5">
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
            <ItemImage src={item.image} />
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
    getPONData(id).then((res) => {
      setData(res.data);
    });
  }, [id]);
  const handleDeny = () => {
    updateStatus(id, 6).then(router.push(`/dashboard/${user}`));
  };
  const handleApprove = () => {
    updateStatus(id, 3).then(router.push(`/dashboard/${user}`));
  };
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
          <div className="flex justify-between">
            <Link href={`/`}>
              <BlueBorderedButton>Cancel</BlueBorderedButton>
            </Link>
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
