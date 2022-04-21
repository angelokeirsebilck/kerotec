import React from "react";
import { MdChevronRight } from "react-icons/md";

const ButtonNext = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className="flex h-12 w-12 cursor-pointer items-center justify-center bg-primary transition-colors hover:bg-body hover:text-white"
  >
    <MdChevronRight style={{ fontSize: "40px" }} />
  </div>
));

export default ButtonNext;
