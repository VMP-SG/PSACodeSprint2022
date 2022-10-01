import React from "react";
import { useDropzone } from "React-dropzone";
import Image from "next/image";
import Ctext from "../Text/Ctext";
import Button from "../Button/Button";
import Upload from "../../assets/Upload.svg";

function DropZone({ onDrop, accept, open, image }) {
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
      {acceptedFiles.length === 0 && <div {...getRootProps({ className: "dropzone" })}>
        <input className="input-zone" {...getInputProps()} />
        <div className="text-center py-16 border-2 border-blue-link rounded-2xl">
          {isDragActive ? (
            <p className="dropzone-content">Release to drop the files here</p>
          ) : (
            <Ctext styles={"flex justify-center items-center text-subtitle text-blue-link font-semibold cursor-pointer"}>
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
            styles="px-5 py-3 bg-blue-link text-white primary-button"
          >
            Open
          </Button>
        </div>
      </div>}
      {acceptedFiles.length > 0 &&
        <div>
          <img src={image ? image.src : ""} />
          <Ctext styles={"text-card-body text-blue-link"}>Uploaded {acceptedFiles[0].path}</Ctext>
        </div>
      }
      {/* <aside>
        <ul>{files}</ul>
      </aside> */}
    </div>
  );
}
export default DropZone;
