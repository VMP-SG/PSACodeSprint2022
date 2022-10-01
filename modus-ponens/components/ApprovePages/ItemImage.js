export default function ItemImage({ src }) {
  return (
    <div className="flex justify-center">
      <img
        className="border-blue-link border rounded-lg w-[300px]"
        alt="item image"
        src={src}
      />
    </div>
  );
}
