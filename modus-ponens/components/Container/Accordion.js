import { useState } from "react";
import AccordionButton from "../Buttons/AccordionButton";
import CenteredContainer from "./CenteredContainer";

const Accordion = ({ expandIcon, collapseIcon, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandHandler = () => {
    setIsExpanded(true);
  };
  const collapseHandler = () => {
    setIsExpanded(false);
  };

  return (
    <CenteredContainer>
      {!isExpanded && (
        <AccordionButton icon={expandIcon} onClick={expandHandler} />
      )}
      {isExpanded && (
        <div className="w-full space-y-2 mt-4 text-justify">
          {content}
          <CenteredContainer>
            <AccordionButton icon={collapseIcon} onClick={collapseHandler} />
          </CenteredContainer>
        </div>
      )}
    </CenteredContainer>
  );
};

export default Accordion;
