import BlueButton from "../../Button/BlueButton";
import TextFieldHeaders from "../../Requests/TextFieldHeaders";
import SpacedText from "../../Text/SpacedText";
import DropZone from "../../ImageUpload/DropZone";
import UneditableTextField from "../../Requests/UneditableTextField";
import { useCallback } from "react";

const ItemField = ({
  onChange,
  formData,
  errorState,
  addAdditionalItems,
  images,
  setImages,
  isDisabled,
}) => {
  var rows = [],
    i = 0,
    len = Object.keys(formData.items).length;
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
    <div className="mt-5">
      <TextFieldHeaders title={"Items to be declared"} />
      {Object.values(formData.items).map((item, index) => {
        return (
          <div key={index} className="grid grid-cols-2 mb-8 gap-12">
            <div className="col-span-1">
              <UneditableTextField
                header={`Item ${index + 1} Description`}
                type={"text"}
                value={item.description}
                className="mr-5"
              />
              <UneditableTextField
                header={"Quantity"}
                type={"text"}
                value={item.quantity}
                className="mr-5"
              />
            </div>
            <div className="col-span-1 flex flex-col justify-end mt-6">
              {console.log(images)}
              {!isDisabled && (
                <DropZone
                  onDrop={onDrop}
                  accept={"image/*"}
                  image={images ? images[index - 1] : ""}
                />
              )}
              {isDisabled && <img src={item.image} />}
            </div>
          </div>
        );
      })}
      {!isDisabled && (
        <SpacedText styles={"col-span-2 pr-0"}>
          <BlueButton
            onClick={addAdditionalItems}
            styles="px-5 py-3 bg-blue-link text-white w-full"
          >
            Add Additional Items
          </BlueButton>
        </SpacedText>
      )}
    </div>
  );
};

export default ItemField;
