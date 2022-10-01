import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import getPONData from "../../api/getPONData";
import DashBoardHeader from "../Dashboard/DashboardHeader";
import ComponentContainer from "../Container/ComponentContainer";
import FormHeader from "../Form/components/FormHeader";
import CompanyField from "../Form/components/CompanyField";
import DriverField from "../Form/components/DriverField";
import ItemField from "../Form/components/ItemField";
import SpacedText from "../Text/SpacedText";
import BlueBorderedButton from "../Button/BlueBorderedButton";
import RedButton from "../Button/RedButton";
import GreenButton from "../Button/GreenButton";

const CounterSigningOfficerApproval = ({ user, id }) => {
  const [formData, setFormData] = useState({});
  const router = useRouter();

  useEffect(() => {
    getPONData(id).then(({ data }) => {
      setFormData(data);
    });
  }, []);

  const handleDeny = () => {
    updateStatus(id, 5).then(router.push(`/dashboard/${user}`));
  };

  const handleApprove = () => {
    updateStatus(id, 2).then(router.push(`/dashboard/${user}`));
  };

  return (
    <div className="bg-light-blue-0 pb-24">
      <DashBoardHeader numItems={6} />
      <ComponentContainer styles={"flex-col"}>
        <div className="flex">
          <div className="w-1/2">
            <FormHeader>Approve Request #{id}</FormHeader>
            <CompanyField formData={formData} isDisabled={true} />
            <DriverField formData={formData} isDisabled={true} />
            {/* <RequestorField formData={formData} isDisabled={true} />
              <PurposeOfEntryField formData={formData} isDisabled={true} />
              <SpacedText styles={`flex justify-between`}>
                <Link href={`/dashboard/${user}`}>
                  <BlueBorderedButton>Cancel</BlueBorderedButton>
                </Link>
                <RedButton onClick={handleDeny}>Deny</RedButton>
                <GreenButton onClick={handleApprove}>Approve</GreenButton>
              </SpacedText> */}
          </div>
          <img src="/psa_1.jpg" className="object-cover w-1/2 flex" />
        </div>
        <ItemField formData={formData} isDisabled={true} />
        <SpacedText styles={`flex justify-between`}>
          <Link href={`/dashboard/${user}`}>
            <BlueBorderedButton>Cancel</BlueBorderedButton>
          </Link>
          <div />
          <RedButton onClick={handleDeny}>Deny</RedButton>
          <GreenButton onClick={handleApprove}>Approve</GreenButton>
        </SpacedText>
      </ComponentContainer>
    </div>
  );
};

export default CounterSigningOfficerApproval;
