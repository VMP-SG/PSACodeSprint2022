const Container = ({ children, getRootProps, isDragAccept, isFocused, isDragReject }) => {
  return (
    <div
      className="flex flex-col items-center p-[40px] rounded-lg border-2 border-dashed text-black font-bold"
      {...getRootProps({ isDragAccept, isFocused, isDragReject })}
    >
      {children}
    </div>
  );
};

export default Container;
