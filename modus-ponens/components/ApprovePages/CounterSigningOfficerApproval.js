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
import FormExterior from "../Requests/FormExterior";
import updatePONData from "../../api/updatePONData";

const CounterSigningOfficerApproval = ({ user, id }) => {
  const [formData, setFormData] = useState({});
  const router = useRouter();

  useEffect(() => {
    getPONData(id)
      .then((res) => {
        console.log(res.data);
        setFormData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleApprove = () => {
    updatePONData(id, { approvingAetosOfficer: "Chay Hui Xiang" }).then(
      updateStatus(id, 2).then(router.push(`/dashboard/${user}`))
    );
  };

  const handleDeny = () => {
    updateStatus(id, 3).then(router.push(`/dashboard/${user}`));
  };

  return formData?.mainDescription ? (
    <div className="bg-light-blue-0 pb-24">
      {console.log(formData)}
      <DashBoardHeader numItems={6} />
      <ComponentContainer styles={"flex-col"}>
        <div className="flex">
          <div className="w-1/2">
            <FormHeader>Approve Request</FormHeader>
            <FormHeader>#{id}</FormHeader>
            <CompanyField formData={formData} isDisabled={true} />
            <DriverField formData={formData} isDisabled={true} />
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

export default CounterSigningOfficerApproval;
