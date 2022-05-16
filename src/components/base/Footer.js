import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import Logo from "../../../public/img/kerotec-logo.png";
import Container from "./Container";
import ThemeButton from "./Button";

const Footer = ({ footer }) => {
  const linkSlug = footer.link?.fieldKerotecFooterLink[0].slug;
  const footerNav = footer.nav?.fieldFooterNav;
  const socials = footer?.socials;
  const info = footer?.info;

  return (
    <div className="">
      <div className="bg-primary-bg py-8 text-footer md:py-16">
        <Container>
          <div className="gap-6 text-body md:grid-cols-12 lg:grid">
            <div className="col-span-6 mb-10 flex flex-col md:mb-0">
              <div className="mb-6 inline-block md:mb-12">
                <Link href="/">
                  <a>
                    <Image
                      alt="Kerotec Logo"
                      src={Logo}
                      width={218}
                      height={46}
                    />
                  </a>
                </Link>
              </div>

              <div className="mb-2 flex">
                <span className="mr-2.5 font-bold text-secondary">T</span>
                <a
                  href={`tel:${info.fieldTel1.replace(/\s+/g, "")}`}
                  className="font-medium transition-colors hover:text-secondary"
                >
                  {info.fieldTel1} - <span className="text-secondary">Ke</span>
                  irsebilck Diego
                </a>
              </div>
              <div className="mb-2 flex">
                <span className="mr-2.5 font-bold text-secondary">T</span>
                <a
                  href={`tel:${info.fieldTel2.replace(/\s+/g, "")}`}
                  className="font-medium transition-colors hover:text-secondary"
                >
                  {info.fieldTel2} - <span className="text-secondary">Ro</span>
                  sseel Jeroen
                </a>
              </div>
              <div className="flex">
                <span className="mr-2.5 font-bold text-secondary">E</span>
                <a
                  href={`mailto:${info.fieldEmail.replace(/\s+/g, "")}`}
                  className="font-medium transition-colors  hover:text-secondary"
                >
                  {info.fieldEmail}
                </a>
              </div>
            </div>
            <div className="col-span-3 mb-10 flex flex-col md:mb-0">
              <span className="heading4-clamp mb-6 font-semibold tracking-2 md:mb-14 lg:mt-4">
                Menu
              </span>
              <ul className="ml-0 mb-0 columns-2 break-inside-avoid">
                <li>
                  <Link href="/">
                    <a className="mb-2 inline-block break-inside-avoid font-medium  transition-colors hover:text-secondary">
                      Home
                    </a>
                  </Link>
                </li>
                {footerNav.map((link, index) => {
                  return (
                    <li key={index}>
                      <Link href={`/${link.itemLink[0].slug}`}>
                        <a className="mb-2 inline-block break-inside-avoid font-medium  transition-colors hover:text-secondary">
                          {" "}
                          {link.itemLink[0].title}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-span-3 flex flex-col lg:items-end">
              <span className="heading4-clamp mb-6 font-semibold tracking-2 md:mb-14 lg:mt-4">
                Get in touch
              </span>
              <div className="flex items-center">
                <ThemeButton
                  className="btn-sm btn-black"
                  type="next"
                  href={`/${linkSlug}`}
                  label="contact"
                  footer
                />
                {socials.fieldFacebook !== null && (
                  <a
                    href={socials.fieldFacebook}
                    target="_blank"
                    className="ml-6 text-body transition-colors hover:text-secondary"
                    rel="nofollow noreferrer"
                  >
                    <FaFacebookF color="text-inherit" size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-white py-6 text-body">
        <Container>
          <div className="flex flex-col items-center justify-between md:flex-row md:items-start">
            <div className="flex flex-col items-center md:flex-row md:items-start">
              <span> © {new Date().getFullYear()} kerotec</span>
              <div className="flex items-center md:ml-6 md:items-start">
                <Link
                  href="/privacy-policy"
                  className="transition-colors hover:text-secondary"
                >
                  <a className="transition-colors hover:text-secondary">
                    {" "}
                    Privacy Policy
                  </a>
                </Link>
                <span className="mx-1">-</span>
                <Link href="/cookies">
                  <a className="transition-colors hover:text-secondary">
                    Cookies
                  </a>
                </Link>
              </div>
            </div>
            <div className="">
              <a
                href="mailto:info@angelokeirsebilck.be"
                className="transition-colors hover:text-secondary"
              >
                website by aK
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
