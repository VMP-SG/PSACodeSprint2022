import FormHeader from "./components/FormHeader";
import ComponentContainer from "../../components/Container/ComponentContainer";
import Button from "../Button/Button";
import SpacedText from "../Text/SpacedText";
import DriverField from "./components/DriverField";
import ItemField from "./components/ItemField";

const Page2 = ({
  formData,
  errorState,
  handleChange,
  handleSubmit,
  togglePage,
  addAdditionalItems,
  images,
  setImages,
}) => {
  return (
    <ComponentContainer>
      <div className="grid grid-cols-4">
        <div className="col-span-2">
          <FormHeader>Submit New Request</FormHeader>
          <DriverField
            onChange={handleChange}
            formData={formData}
            errorState={errorState}
          />
        </div>
        <div className="col-span-2">
          <img src="/psa_0.jpg" className="h-full object-cover" />
        </div>
        <div className="col-span-4">
          <ItemField
            onChange={handleChange}
            formData={formData}
            errorState={errorState}
            addAdditionalItems={addAdditionalItems}
            images={images}
            setImages={setImages}
          />
        </div>
        <SpacedText styles="flex col-span-2 m-auto justify-between font-primary text-[0.7rem]">
          *Indicates compulsory fields
        </SpacedText>
        <SpacedText styles="flex col-span-2 m-auto justify-between font-primary text-[0.7rem]">
          <Button
            styles="w-fit px-5 py-2 bg-white border border-blue-link text-blue-link font-semibold"
            onClick={togglePage}
          >
            Back
          </Button>
          <Button
            styles="w-fit px-5 py-2 bg-blue-link text-white"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </SpacedText>
      </div>
    </ComponentContainer>
  );
};

export default Page2;
