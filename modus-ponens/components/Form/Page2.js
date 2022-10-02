import FormHeader from "./components/FormHeader";
import FormExterior from "../Requests/FormExterior";
import ComponentContainer from "../../components/Container/ComponentContainer";
import SpacedText from "../Text/SpacedText";
import DriverField from "./components/DriverField";
import ItemField from "./components/ItemField";
import BlueBorderedButton from "../Button/BlueBorderedButton";
import BlueButton from "../Button/BlueButton";

const Page2 = ({
  formData,
  errorState,
  handleChange,
  handleItems,
  handleSubmit,
  togglePage,
  addAdditionalItems,
  images,
  setImages,
  mouseOverHandler,
}) => {
  return (
    <div className="flex flex-col py-10">
      <FormExterior>
        <div className="grid grid-cols-4 pr-10 pl-5">
          <div className="col-span-2">
            <div className="font-bold text-3xl pb-10">Submit New Request</div>
            <DriverField
              onChange={handleChange}
              formData={formData}
              errorState={errorState}
            />
          </div>
          <div className="col-span-2">
            <img
              src="/psa_0.jpg"
              className="h-full object-cover mt-6 w-[580px] ml-6"
            />
          </div>
          <div className="col-span-4">
            <ItemField
              onChange={handleItems}
              formData={formData}
              errorState={errorState}
              addAdditionalItems={addAdditionalItems}
              images={images}
              setImages={setImages}
            />
          </div>
          <SpacedText styles="flex col-span-2 justify-between font-primary text-[12px] items-center">
            *Indicates compulsory fields
          </SpacedText>
          <SpacedText styles="flex col-span-2 justify-between font-primary pr-0">
            <BlueBorderedButton onClick={togglePage}>Back</BlueBorderedButton>
            <BlueButton onClick={handleSubmit} onMouseOver={mouseOverHandler}>
              Submit
            </BlueButton>
          </SpacedText>
        </div>
      </FormExterior>
    </div>
  );
};

export default Page2;
