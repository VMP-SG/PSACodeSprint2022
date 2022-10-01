import FormHeader from "./components/FormHeader";
import ComponentContainer from "../../components/Container/ComponentContainer";
import CompanyField from "./components/CompanyField";
import RequestorField from "./components/RequestorField";
import PurposeOfEntryField from "./components/PurposeOfEntryField";
import Button from "../Button/Button";
import SpacedText from "../Text/SpacedText";

const Form = ({ onChange, formData, errorState, togglePage }) => {
  return (
    <div className="font-primary w-1/2 grid grid-cols-2">
      <FormHeader>Submit New Request</FormHeader>
      <CompanyField
        onChange={onChange}
        formData={formData}
        errorState={errorState}
      />
      <RequestorField
        onChange={onChange}
        formData={formData}
        errorState={errorState}
      />
      <PurposeOfEntryField
        onChange={onChange}
        formData={formData}
        errorState={errorState}
      />
      <SpacedText styles="flex col-span-2 m-auto justify-between font-primary text-[0.7rem]">
        *Indicates compulsory fields
        <Button
          styles="w-fit px-5 py-2 bg-blue-link text-white"
          onClick={togglePage}
        >
          Next
        </Button>
      </SpacedText>
    </div>
  );
};

const Page1 = ({
  formData,
  errorState,
  handleChange,
  togglePage,
}) => {
  return (
    <div className="flex flex-col">
      <ComponentContainer>
        <Form
          onChange={handleChange}
          formData={formData}
          errorState={errorState}
          togglePage={togglePage}
        />
        <img src="/psa_0.jpg" className="object-cover w-1/2 flex" />
      </ComponentContainer>
    </div>
  );
};

export default Page1;
