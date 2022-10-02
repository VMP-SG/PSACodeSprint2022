import FormExterior from "../Requests/FormExterior";
import CompanyField from "./components/CompanyField";
import RequestorField from "./components/RequestorField";
import PurposeOfEntryField from "./components/PurposeOfEntryField";
import Button from "../Button/Button";
import SpacedText from "../Text/SpacedText";

const Form = ({
  onChange,
  formData,
  errorState,
  togglePage,
  mouseOverHandler,
}) => {
  return (
    <div className="font-primary w-1/2 grid grid-cols-2 mr-6">
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
      <SpacedText styles="flex col-span-2 justify-between font-primary items-center">
        <p className="text-[0.7rem]">*Indicates compulsory fields</p>
        <Button
          styles="w-fit px-5 py-2 bg-blue-link text-white primary-button my-0"
          onClick={togglePage}
          onMouseOver={mouseOverHandler}
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
  mouseOverHandler,
}) => {
  return (
    <div className="flex flex-col py-10">
      <FormExterior>
        <div className="font-bold text-3xl pb-10">Submit New Request</div>
        <div className="flex">
          <Form
            onChange={handleChange}
            formData={formData}
            errorState={errorState}
            togglePage={togglePage}
            mouseOverHandler={mouseOverHandler}
          />
          <img
            src={"/psa_0.png"}
            className="object-cover w-[600px] flex ml-6 mr-10"
          />
        </div>
      </FormExterior>
    </div>
  );
};

export default Page1;
