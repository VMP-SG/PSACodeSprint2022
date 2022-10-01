export default function CreatorCard({ image, text, name, designation }) {
  return (
    <div className="flex flex-col justify-between w-[575px] bg-white rounded-md shadow-2xl p-10 my-[100px]">
      <div className="relative">
        <img
          src={image.src}
          alt={name}
          className="w-[100px] h-[100px] rounded-full absolute top-[-75px]"
        />
        <div className="text-grey-main my-5 mt-10">{text}</div>
        <div className="my-1">{name}</div>
        <div className="text-grey-main">{designation}</div>
      </div>
    </div>
  );
}
