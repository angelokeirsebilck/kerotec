import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import SparkHover from "../../../public/img/svg/spark-hover.svg";
import useGlobalState from "../../utils/useGlobalState";
import { useRouter } from "next/router";

const ThemeButton = ({ className, type, label, href }) => {
  const { changeIsNavOpen } = useGlobalState();
  const router = useRouter();

  const isActive = href == router.asPath;
  const defaultClass = "btn relative group ";
  const btnClass = defaultClass + className;

  switch (type) {
    case "button":
      return <button className={btnClass}>{label}</button>;
    case "submit":
      return (
        <button type="submit" className={btnClass}>
          {label}
        </button>
      );
    case "next":
      return (
        <Link href={href}>
          <a
            onClick={() => changeIsNavOpen(false)}
            className={`${btnClass} ${isActive ? "link-active" : ""}`}
          >
            <span className="relative z-50"> {label}</span>

            <SparkHover
              alt="Spark hover"
              className="absolute z-10 opacity-0 transition-opacity group-hover:opacity-0 top-0 md:top-[3.5px] left-1/2 transform -translate-x-1/2 rotate-12"
            />
          </a>
        </Link>
      );
    default:
      return <a href="">{label}</a>;
  }
};

ThemeButton.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ThemeButton;
