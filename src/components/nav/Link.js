import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import SparkHover from "../../../public/img/svg/spark-hover.svg";
import useGlobalState from "../../utils/useGlobalState";
import { useRouter } from "next/router";

const NavLink = ({ href, label }) => {
  const { changeIsNavOpen } = useGlobalState();
  const router = useRouter();

  const isActive = href == router.asPath;

  return (
    <Link
      href={href}
      onClick={() => changeIsNavOpen(false)}
      activeClassName="link-active"
    >
      <a
        className={`text-navlink mb-6 md:mb-0 md:ml-16 font-medium group relative ${
          isActive ? "link-active" : ""
        }`}
      >
        <span className="relative z-20 lowercase">{label}</span>
        <SparkHover
          alt="Spark"
          className="absolute z-10 opacity-0 transition-opacity group-hover:opacity-100 top-[3.5px] left-1/2 transform -translate-x-1/2 rotate-12"
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
