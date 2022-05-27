import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

function Spinner() {
  return (
    <div className="flex items-center justify-center md:h-[calc(100vh_-_8rem)]">
      <BeatLoader color="#006134" loading={true} size={30} />
    </div>
  );
}

export default Spinner;
