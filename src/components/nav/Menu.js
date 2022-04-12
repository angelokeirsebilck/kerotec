import React from "react";
import useGlobalState from "../../utils/useGlobalState";
import Button from "../base/Button";
import NavLink from "./Link";

const Menu = ({ mainNav }) => {
  const { globalSet: fieldMainNav } = mainNav;
  const { isNavOpen } = useGlobalState();

  const links = fieldMainNav.fieldMainNav.map((link) => {
    return link.itemLink[0];
  });
  const highlight = mainNav.globalSet?.fieldMainNavHighlight[0];

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
      {highlight && (
        <Button
          type="next"
          href={`/${highlight.slug}`}
          className="btn-black mb-6 md:mb-0 md:ml-16"
          label={highlight.title}
        />
      )}
    </div>
  );
};

export default Menu;
