import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DashBoardHeader from "../Dashboard/DashboardHeader";
import ComponentContainer from "../Container/ComponentContainer";
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

const DOApproval = ({ user, id }) => {
  const [formData, setFormData] = useState({
    status: 0,
    company: "",
    requestorFirstName: "",
    requestorLastName: "",
    requestorID: "",
    mainDescription: "",
    additionalDetails: "",
    driverFirstName: "",
    driverLastName: "",
    driverPassNumber: "",
    vehicleNumber: "",
    items: {
      item0: {
        description: "",
        quantity: "",
        image: "",
      },
    },
    designatedOfficer: "Koh Ming En",
    counterSignee: "",
    approvingAetosOfficer: "",
  });
  const router = useRouter();

  useEffect(() => {
    getPONData(id)
      .then(({ data }) => {
        console.log(data);
        setFormData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDeny = () => {
    updateStatus(id, 4).then(router.push(`/dashboard/${user}`));
  };

  const handleApprove = () => {
    updateStatus(id, 1).then(router.push(`/dashboard/${user}`));
  };

  return (
    <div className="bg-light-blue-0 pb-24">
      {/* {console.log(formData)} */}
      <DashBoardHeader numItems={6} />
      <ComponentContainer>
        <div className="flex flex-col w-1/2">
          <FormHeader>Approve Request</FormHeader>
          <FormHeader>#{id}</FormHeader>
          <CompanyField formData={formData} isDisabled={true} />
          <RequestorField formData={formData} isDisabled={true} />
          <PurposeOfEntryField formData={formData} isDisabled={true} />
          <SpacedText styles={`flex justify-between`}>
            <Link href={`/dashboard/${user}`}>
              <BlueBorderedButton>Cancel</BlueBorderedButton>
            </Link>
            <RedButton onClick={handleDeny}>Deny</RedButton>
            <GreenButton onClick={handleApprove}>Approve</GreenButton>
          </SpacedText>
        </div>
        <img src="/psa_1.jpg" className="object-cover w-1/2 flex" />
      </ComponentContainer>
    </div>
  );
};

export default DOApproval;
