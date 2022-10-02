import Ctext from "./Ctext";

const Header = ({ title, subtitle }) => {
  return (
    <div className="bg-dark-blue-main py-36 space-y-7 text-white">
      <Ctext styles={"text-title font-bold"}>{title}</Ctext>
      <Ctext styles={"text-subtitle"}>{subtitle}</Ctext>
    </div>
  );
};

export default Header;
