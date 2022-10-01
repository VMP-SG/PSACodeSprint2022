import DashBoardHeader from "./DashboardHeader";
import ComponentContainer from "../Container/ComponentContainer";
import FormHeader from "../Form/components/FormHeader";
import { useEffect, useState } from "react";
import getPONData from "../../api/getPONData";
import CompanyField from "../Form/components/CompanyField";
import RequestorField from "../Form/components/RequestorField";
import PurposeOfEntryField from "../Form/components/PurposeOfEntryField";
import Button from "../Button/Button";
import SpacedText from "../Text/SpacedText";
import BlueBorderedButton from "../Button/BlueBorderedButton";
import RedButton from "../Button/RedButton";
import GreenButton from "../Button/GreenButton";

const DO = ({ id }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    getPONData(id).then(({ data }) => setFormData(data));
  }, []);

  return (
    <div className="bg-light-blue-0 pb-24">
      <DashBoardHeader numItems={6} />
      <ComponentContainer>
        <div className="flex flex-col w-1/2">
          <FormHeader>Approve Request #{id}</FormHeader>
          <CompanyField formData={formData} isDisabled={true} />
          <RequestorField formData={formData} isDisabled={true} />
          <PurposeOfEntryField formData={formData} isDisabled={true} />
          <SpacedText styles={`flex justify-between`}>
            <BlueBorderedButton>Cancel</BlueBorderedButton>
            <RedButton>Deny</RedButton>
            <GreenButton>Approve</GreenButton>
          </SpacedText>
        </div>
        <img src="/psa_1.jpg" className="object-cover w-1/2 flex" />
      </ComponentContainer>
    </div>
  );
};

export default DO;
