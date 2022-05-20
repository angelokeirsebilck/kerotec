import React from "react";
import { MdChevronLeft } from "react-icons/md";

const ButtonPrev = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className="flex h-12 w-12 cursor-pointer items-center justify-center bg-primary transition hover:bg-primary-light hover:text-white"
  >
    <MdChevronLeft style={{ fontSize: "40px" }} />
  </div>
));

ButtonPrev.displayName = "ButtonPrev";

export default ButtonPrev;
