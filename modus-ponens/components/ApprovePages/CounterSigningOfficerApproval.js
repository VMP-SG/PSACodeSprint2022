import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import getPONData from "../../api/getPONData";
import DashBoardHeader from "../Dashboard/DashboardHeader";
import UneditableTextField from "../Requests/UneditableTextField";
import TextFieldHeaders from "../Requests/TextFieldHeaders";
import ItemField from "../Form/components/ItemField";
import SpacedText from "../Text/SpacedText";
import BlueBorderedButton from "../Button/BlueBorderedButton";
import RedButton from "../Button/RedButton";
import GreenButton from "../Button/GreenButton";
import FormExterior from "../Requests/FormExterior";
import updatePONData from "../../api/updatePONData";
import updateStatus from "../../api/updateStatus";
import HeroHeader from "../Layout/HeroHeader";

const CounterSigningOfficerApproval = ({ id, numItems }) => {
  const [formData, setFormData] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (id) {
      getPONData(id).then((res) => {
        setFormData(res.data);
      });
    }
  }, [id]);

  const handleApprove = () => {
    updatePONData(id, { approvingAetosOfficer: "Chay Hui Xiang" }).then(
      updateStatus(id, 2).then(router.push(`/tasks`))
    );
  };

  const handleDeny = () => {
    updateStatus(id, 3).then(router.push(`/tasks`));
  };

  return formData?.mainDescription ? (
    <div>
      <HeroHeader title={"Approve Request"} />
      <div className="flex flex-col items-center justify-center bg-light-blue-0">
        <div className="py-10">
          <FormExterior>
            <div className="font-bold text-3xl pb-10">
              Approve Request #{id}
            </div>
            <div className="flex">
              <div className="w-1/2">
                <TextFieldHeaders title={"Company Details"} />
                <UneditableTextField
                  header={"Company"}
                  type={"text"}
                  value={formData.company}
                  className="mr-5"
                />
                <TextFieldHeaders title={"Driver Details"} />
                <div className="flex justify-between">
                  <UneditableTextField
                    header={"First Name"}
                    type={"text"}
                    value={formData.driverFirstName}
                    className="mr-5"
                  />
                  <UneditableTextField
                    header={"Last Name"}
                    type={"text"}
                    value={formData.driverLastName}
                    className="mr-5"
                  />
                </div>
                <UneditableTextField
                  header={"Pass Number"}
                  type={"text"}
                  value={formData.driverPassNumber}
                  className="mr-5"
                />
                <UneditableTextField
                  header={"Vehicle Number"}
                  type={"text"}
                  value={formData.vehicleNumber}
                  className="mr-5"
                />
              </div>
              <img src="/psa_1.jpg" className="object-cover w-1/2 flex" />
            </div>
            <ItemField formData={formData} isDisabled={true} />
            <SpacedText styles={`flex justify-between`}>
              <Link href={`/tasks`}>
                <BlueBorderedButton>Cancel</BlueBorderedButton>
              </Link>
              <div />
              <RedButton onClick={handleDeny}>Deny</RedButton>
              <GreenButton onClick={handleApprove}>Approve</GreenButton>
            </SpacedText>
          </FormExterior>
        </div>
      </div>
    </div>
  ) : (
    <div className="py-10">
      <div className="flex flex-col items-center justify-center bg-light-blue-0">
        <FormExterior>
          <div className="font-bold text-3xl pb-10">
            Request #{id} was not found
          </div>
        </FormExterior>
      </div>
    </div>
  );
};

export default CounterSigningOfficerApproval;
