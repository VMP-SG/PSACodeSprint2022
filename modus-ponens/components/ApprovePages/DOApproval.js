import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DashBoardHeader from "../Dashboard/DashboardHeader";
import UneditableTextField from "../Requests/UneditableTextField";
import TextFieldHeaders from "../Requests/TextFieldHeaders";
import FormExterior from "../Requests/FormExterior";
import FormHeader from "../Form/components/FormHeader";
import getPONData from "../../api/getPONData";
import CompanyField from "../Form/components/CompanyField";
import RequestorField from "../Form/components/RequestorField";
import PurposeOfEntryField from "../Form/components/PurposeOfEntryField";
import SpacedText from "../Text/SpacedText";
import BlueBorderedButton from "../Button/BlueBorderedButton";
import RedButton from "../Button/RedButton";
import GreenButton from "../Button/GreenButton";
import Link from "next/link";
import updateStatus from "../../api/updateStatus";
import updatePONData from "../../api/updatePONData";

const DOApproval = ({ user, id }) => {
  const [formData, setFormData] = useState({});
  const router = useRouter();

  useEffect(() => {
    getPONData(id)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleDeny = () => {
    updateStatus(id, 4).then(router.push(`/dashboard/${user}`));
  };

  const handleApprove = () => {
    updatePONData(id, { counterSignee: "Ng Ho Chi" }).then(
      updateStatus(id, 1).then(router.push(`/dashboard/${user}`))
    );
  };

  return formData?.mainDescription ? (
    <div>
      {/* {console.log(formData)} */}
      <DashBoardHeader numItems={6} />
      <div className="flex flex-col items-center justify-center bg-light-blue-0">
        <div className="py-10">
          <FormExterior>
            <div className="font-bold text-3xl pb-10">
              Approve Request #{id}
            </div>
            <div className="flex">
              <div className="flex flex-col w-1/2">
                <TextFieldHeaders title={"Company Details"} />
                <UneditableTextField
                  header={"Company"}
                  type={"text"}
                  value={formData.company}
                  className="mr-5"
                />
                <TextFieldHeaders title={"Requestor Details"} />
                <UneditableTextField
                  header={"First Name"}
                  type={"text"}
                  value={formData.requestorFirstName}
                />
                <UneditableTextField
                  header={"Last Name"}
                  type={"text"}
                  value={formData.requestorLastName}
                />
                <UneditableTextField
                  header={"Identification Number"}
                  type={"text"}
                  value={formData.requestorID}
                />
                <TextFieldHeaders title={"Purpose of Entry"} />
                <UneditableTextField
                  header={"Main Description"}
                  type={"text"}
                  value={formData.mainDescription}
                />
                <UneditableTextField
                  header={"Additional details"}
                  type={"text"}
                  value={formData.additionalDetails}
                />
                <SpacedText styles={`flex justify-between`}>
                  <Link href={`/dashboard/${user}`}>
                    <BlueBorderedButton>Cancel</BlueBorderedButton>
                  </Link>
                  <RedButton onClick={handleDeny}>Deny</RedButton>
                  <GreenButton onClick={handleApprove}>Approve</GreenButton>
                </SpacedText>
              </div>
              <img src="/psa_1.jpg" className="object-cover w-1/2 flex" />
            </div>
          </FormExterior>
        </div>
      </div>
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
};

export default DOApproval;
