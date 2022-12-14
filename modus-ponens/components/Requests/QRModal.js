import Close from "../../assets/Close.svg";
import { Transition } from "@headlessui/react";
import ReactPortal from "./ReactPortal";

const QRModal = ({ children, open, headingText, onClose, className }) => {
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
            {children}
          </div>
        </div>
      </Transition>
    </ReactPortal>
  );
};

export default QRModal;
