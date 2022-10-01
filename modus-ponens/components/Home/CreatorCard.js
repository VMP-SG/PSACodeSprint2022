export default function CreatorCard({ image, text, name, designation, url }) {
  return (
    <div className="flex flex-col justify-between w-[575px] bg-white rounded-md shadow-2xl p-10 my-[100px]">
      <div className="relative">
        <img
          src={image.src}
          alt={name}
          className="w-[100px] h-[100px] rounded-full absolute top-[-75px]"
        />
        <div className="text-grey-main my-5 mt-10">{text}</div>
        <div className="my-1 flex items-center">
          <div className="pr-2">{name}</div>
          <a href={url} target="_blank" rel="noreferrer noopener">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 cursor-pointer"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
        <div className="text-grey-main">{designation}</div>
      </div>
    </div>
  );
}
