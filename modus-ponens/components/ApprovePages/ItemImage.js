export default function ItemImage({ src }) {
  return (
    <div className="flex justify-center">
      <img
        className="border-black border-2 rounded-lg w-[405px] max-h-[200px]"
        alt="item image"
        src={src}
      />
    </div>
  );
}
