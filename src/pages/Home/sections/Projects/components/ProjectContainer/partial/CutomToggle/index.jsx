import { useAccordionButton } from "react-bootstrap";
import "./index.scss";

function CustomToggle({ children, eventKey, handleClick, cat }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    console.log("totally custom!");
    handleClick(cat);
  });

  return (
    <div className="projectToggleBtn" type="button" onClick={decoratedOnClick}>
      {children}
    </div>
  );
}

export default CustomToggle;
