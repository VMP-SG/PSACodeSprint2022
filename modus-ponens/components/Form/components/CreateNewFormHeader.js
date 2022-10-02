import Ctext from "../../Text/Ctext";

const CreateNewFormHeader = () => {
  return (
    <div className="bg-dark-blue-main py-36 space-y-7 text-white">
      <Ctext styles={"text-title font-bold"}>Create Request</Ctext>
      <Ctext styles={"text-subtitle"}>Create your requests here!</Ctext>
    </div>
  );
};

export default CreateNewFormHeader;
