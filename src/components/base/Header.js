import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";
import Menu from "../nav/Menu";
import Container from "./Container";
import Headroom from "react-headroom";
import Logo from "../../../public/img/kerotec-logo.jpg";
import { useLockBodyScroll, useToggle } from "react-use";
import useGlobalState from "../../hooks/useGlobalState";

const Header = ({ mainNav, border }) => {
  const [locked, toggleLocked] = useToggle(false);
  const { isNavOpen, changeIsNavOpen } = useGlobalState();
  useLockBodyScroll(locked);

  const headerTranslateFix = isNavOpen ? "transform translate-y-0" : "";

  return (
    <header className={`relative z-50 bg-white `}>
      <Headroom disableInlineStyles className={isNavOpen ? "is-open" : ""}>
        <Container>
          <header
            className={`${headerTranslateFix} ${
              border ? " border-b-4 border-primary-light" : ""
            } flex  items-center justify-between bg-white py-4 md:py-10`}
          >
            <Link href="/">
              <a onClick={() => changeIsNavOpen(false)}>
                <div className="flex w-[120px] md:w-[250px]">
                  <Image
                    alt="Kerotec Logo"
                    src={Logo}
                    width={218}
                    height={46}
                    priority
                    placeholder="empty"
                  />
                </div>
              </a>
            </Link>
            <Menu mainNav={mainNav} />

            <div className="block md:hidden">
              <Hamburger
                toggled={isNavOpen}
                onToggle={(toggled) => {
                  changeIsNavOpen(toggled);
                  toggleLocked(toggled);
                }}
              />
            </div>
          </header>
        </Container>
      </Headroom>
    </header>
  );
};

export default Header;
