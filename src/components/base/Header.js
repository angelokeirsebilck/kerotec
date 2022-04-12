import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";
import Menu from "../nav/Menu";
import Container from "./Container";
import Headroom from "react-headroom";
import Logo from "../../../public/img/elektro-diego-logo.png";
import { useLockBodyScroll, useToggle } from "react-use";
import useGlobalState from "../../utils/useGlobalState";

const Header = ({ mainNav }) => {
  const [locked, toggleLocked] = useToggle(false);
  const { isNavOpen, setIsNavOpen } = useGlobalState;
  useLockBodyScroll(locked);

  const headerTranslateFix = isNavOpen ? "transform translate-y-0" : "";

  return (
    <div className={` bg-white relative z-50`}>
      <Headroom disableInlineStyles className={isNavOpen ? "is-open" : ""}>
        <Container>
          <header
            className={`${headerTranslateFix} flex  justify-between items-center bg-white py-6`}
          >
            <Link href="/" onClick={() => setIsNavOpen(false)}>
              <a>
                <Image
                  alt="Elektro Diego Logo"
                  src={Logo}
                  width={174}
                  height={71}
                  priority
                />
              </a>
            </Link>
            <Menu mainNav={mainNav} />
            <div className="block md:hidden">
              <Hamburger
                toggled={isNavOpen}
                onToggle={(toggled) => {
                  setIsNavOpen(toggled);
                  toggleLocked(toggled);
                }}
              />
            </div>
          </header>
        </Container>
      </Headroom>
    </div>
  );
};
const mapStateToProps = (state) => ({
  global: state.global,
});

export default Header;
