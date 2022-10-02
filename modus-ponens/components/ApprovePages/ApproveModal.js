import React from "react";
import ReactPortal from "../Requests/ReactPortal";
import { Transition } from "@headlessui/react";
import Close from "../../assets/Close.svg";
import BlueBorderedButton from "../Button/BlueBorderedButton";
import BlueButton from "../Button/BlueButton";

const ApproveModal = ({
  open,
  headingText,
  onClose,
  className,
  bodyText,
  rejectCount,
  onClickButton,
}) => {
  return (
    <ReactPortal wrapperId="modal">
      <Transition
        show={open}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0 inset-0 z-50 bg-black bg-opacity-40 fixed flex justify-center items-center font-primary"
        enterTo="opacity-100 inset-0 z-50 bg-black bg-opacity-40 fixed flex justify-center items-center font-primary"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100 inset-0 z-50 bg-black bg-opacity-40 fixed flex justify-center items-center font-primary"
        leaveTo="opacity-0 inset-0 z-50 bg-black bg-opacity-40 fixed flex justify-center items-center font-primary"
      >
        <div className={`${className}`}>
          <div className="w-[500.33px] bg-white shadow-md rounded-[13.33px] py-[50px] px-[50px]">
            <div className="flex justify-center w-full relative">
              <p className="text-blue-dark text-[24px] font-bold leading-[32.78px]">
                {headingText}
              </p>
              {onClose && (
                <img
                  src={Close.src}
                  alt="Close Modal"
                  className="absolute right-0 top-[4px] cursor-pointer h-[22.67px]"
                  onClick={onClose}
                />
              )}
            </div>
            {rejectCount && <div className="my-[20px] text-center font-secondary text-[16px]">
              <span className="font-bold underline">{rejectCount}</span> items were rejected.
            </div>}
            <div className="my-[30px] text-center font-secondary text-[16px]">
              {bodyText}
            </div>
            <div className="flex justify-between px-[25px]">
              <BlueBorderedButton onClick={onClose}>Cancel</BlueBorderedButton>
              <BlueButton onClick={onClickButton}>Approve</BlueButton>
            </div>
          </div>
        </div>
      </Transition>
    </ReactPortal>
  );
};

export default ApproveModal;
