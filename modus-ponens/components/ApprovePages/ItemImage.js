export default function ItemImage({ src, styles }) {
  return (
    <div className="flex justify-center">
      <img
        className={`border-black border-2 rounded-lg w-[405px] h-[200px] ${styles}`}
        alt="item image"
        src={src}
      />
    </div>
  );
}
