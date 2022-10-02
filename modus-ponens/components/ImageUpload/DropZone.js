import React from "react";
import { useDropzone } from "React-dropzone";
import Image from "next/image";
import Ctext from "../Text/Ctext";
import Button from "../Button/Button";
import Upload from "../../assets/Upload.svg";
import ItemImage from "../ApprovePages/ItemImage";

function DropZone({ onDrop, accept, open, image, thumbnail, status }) {
  const dropzoneColour = status === 3 ? "green-0" : status === 2 ? "dark-red" : "blue-link";
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept,
      onDrop,
    });
  // const files = acceptedFiles.map((file) => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </li>
  // ));
  return (
    <div>
      {acceptedFiles.length === 0 && !thumbnail && <div {...getRootProps({ className: "dropzone" })}>
        <input className="input-zone" {...getInputProps()} />
        <div className="text-center py-16 border-2 border-blue-link rounded-2xl h-[140px]">
          {isDragActive ? (
            <p className="dropzone-content">Release to drop the files here</p>
          ) : (
            <Ctext styles={"flex justify-center items-center text-subtitle text-blue-link font-semibold cursor-pointer h-full"}>
              Drag image to upload
              <div className="px-2 flex items-center">
                <Image src={Upload} className="px-2"/>
              </div>
            </Ctext>
          )}
        </div>
        <div className="mt-6">
          <Button
            onClick={open}
            styles="px-5 py-3 bg-blue-link text-white primary-button cursor-pointer"
          >
            Open
          </Button>
        </div>
      </div>}
      {acceptedFiles.length > 0 && !thumbnail &&
        <div>
          <ItemImage src={image ? image.src : ""} />
          <Ctext styles={"text-card-body text-blue-link"}>Uploaded {acceptedFiles[0].path}</Ctext>
        </div>
      }
      {
        thumbnail && !image ?
        <div {...getRootProps({ className: "dropzone" })}>
          <input className="input-zone" {...getInputProps()} />
          {/* <div className="border-2 border-blue-link rounded-2xl h-[200px]"> */}
            {isDragActive ? (
              <div className="border-2 border-blue-link rounded-2xl h-[200px] flex items-center justify-center">
                <p className="dropzone-content">Release to drop the files here</p>
              </div>
            ) : (
              // <Ctext styles={"flex justify-center items-center text-subtitle text-blue-link font-semibold cursor-pointer h-full"}>
              //   Drag image to upload
              //   <div className="px-2 flex items-center">
              //     <Image src={Upload} className="px-2"/>
              //   </div>
              // </Ctext>
              <ItemImage src={thumbnail} styles={`border-${dropzoneColour}`} />
            )}
          <div className="mt-6">
            <Button
              onClick={open}
              styles={`px-5 py-3 bg-${dropzoneColour} text-white primary-button cursor-pointer`}
            >
              Open Cross-Reference Image
            </Button>
          </div>
        </div> :
        <div>
          <ItemImage src={image}/>
          <div className="mt-6">
            <Button
              onClick={open}
              styles={`px-5 py-3 bg-${dropzoneColour} text-white primary-button cursor-pointer`}
            >
              Open Cross-Reference Image
            </Button>
          </div>
        </div>
      }
      {/* <aside>
        <ul>{files}</ul>
      </aside> */}
    </div>
  );
}
export default DropZone;
