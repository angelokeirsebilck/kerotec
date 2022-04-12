import React from "react";
import useGlobalState from "../../utils/useGlobalState";
import Container from "../base/Container";
import NavLink from "./Link";

const Menu = ({ mainNav }) => {
  const { globalSet: fieldMainNav } = mainNav;
  const { isNavOpen } = useGlobalState();

  const links = fieldMainNav.fieldMainNav.map((link) => {
    return link.itemLink[0];
  });

  const navStyle = isNavOpen
    ? "opacity-1 visible md:visible md:opacity-100 -left-4"
    : "invisible md:visible opacity-0 md:opacity-100 left-[-17px] ";

  return (
    <div
      className={`${navStyle} top-24  md:left-0 md:top-0 transition-opacity bg-primary md:visible md:bg-white fixed md:relative w-screen md:w-auto h-[calc(100vh_-_96px)] md:h-auto flex flex-col md:flex-row justify-center md:justify-end items-center`}
    >
      {links.map((link, index) => {
        return (
          <NavLink key={index} href={`/${link.slug}`} label={link.title} />
        );
      })}
    </div>
  );
};

export default Menu;
