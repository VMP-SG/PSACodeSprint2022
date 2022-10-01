import Button from "../../Button/Button";
import CategoryHeader from "./CategoryHeader";
import InputField from "./InputField";
import QuantityField from "./Items/QuantityField";
import SpacedText from "../../Text/SpacedText";
import DropZone from "../../ImageUpload/DropZone";
import { useCallback } from "react";

const ItemField = ({
  onChange,
  formData,
  errorState,
  addAdditionalItems,
  images,
  setImages,
}) => {
  var rows = [],
    i = 0,
    len = (Object.keys(formData).length - 11) / 2;
  while (i++ < len) rows.push(i);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: Math.random(), src: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);
  return (
    <>
      <CategoryHeader>Items to be declared</CategoryHeader>
      {rows.map((idx) => {
        return (
          <div key={idx} className="grid grid-cols-2 mb-8">
            <div className="col-span-1">
              <InputField
                title={`Item ${idx} description`}
                name={`description_${idx - 1}`}
                span={2}
                onChange={onChange}
                formData={formData}
                errorState={errorState}
              />
              <QuantityField
                name={`quantity_${idx - 1}`}
                span={2}
                onChange={onChange}
                formData={formData}
                errorState={errorState}
              />
            </div>
            <div className="col-span-1 flex flex-col justify-end">
              <DropZone
                onDrop={onDrop}
                accept={"image/*"}
                image={images ? images[idx - 1] : ""}
              />
            </div>
          </div>
        );
      })}
      <SpacedText styles={"col-span-2"}>
        <Button
          onClick={addAdditionalItems}
          styles="px-5 py-2 bg-blue-link text-white"
        >
          Add Additional Items
        </Button>
      </SpacedText>
    </>
  );
};

export default ItemField;
