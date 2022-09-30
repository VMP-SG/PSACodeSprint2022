import { useRef } from "react";
// import useIsVisible from "../../hooks/useIsVisible";
import { COMPONENT_WIDTH } from "../../misc/constants";


const ComponentContainer = ({ children, styles, isLoading }) => {
  const elemRef = useRef();
  // const isVisible = useIsVisible(elemRef);

  return <div className={`${COMPONENT_WIDTH} m-auto mb-16 ${styles}`} ref={elemRef}>
    {isLoading ? 'Loading...': children}
  </div>;
  // if (isLoading) {
  //   return <div className={`${COMPONENT_WIDTH} m-auto mb-16 ${styles}`}>Loading...</div>
  // } else {
  //   return <div className={`${COMPONENT_WIDTH} m-auto mb-16 ${styles}`}>{children}</div>;
  // }
};

export default ComponentContainer;
