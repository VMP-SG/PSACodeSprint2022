export default function HeroHeader({ title, subtitle }) {
  return (
    <div className="flex flex-col justify-center items-center h-[400px] w-full bg-dark-blue-main">
      <div className="text-white font-semibold text-6xl pb-10">{title}</div>
      <div className="text-white font-regular text-lg pb-10 mt-[28px]">{subtitle}</div>
    </div>
  );
}
