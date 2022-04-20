import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import SparkHover from "../../../public/img/svg/spark-hover.svg";
import useGlobalState from "../../utils/useGlobalState";
import { useRouter } from "next/router";
import { useLockBodyScroll, useToggle } from "react-use";

const NavLink = ({ href, label }) => {
  const { changeIsNavOpen } = useGlobalState();
  const router = useRouter();
  const [locked, toggleLocked] = useToggle(false);
  useLockBodyScroll(locked);
  const isActive = href == router.asPath;

  return (
    <Link href={href}>
      <a
        onClick={() => {
          changeIsNavOpen(false);
          toggleLocked(false);
        }}
        className={`group relative mb-6 text-navlink font-medium md:mb-0 md:ml-16 ${
          isActive ? "link-active" : ""
        }`}
      >
        <span className="relative z-20 lowercase">{label}</span>
        <SparkHover
          alt="Spark"
          className="absolute top-[3.5px] left-1/2 z-10 -translate-x-1/2 rotate-12 transform opacity-0 transition-opacity group-hover:opacity-100"
        />
      </a>
    </Link>
  );
};

NavLink.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default NavLink;
