"use client";
import store from "@/hooks/store";
import { themesStore } from "@/hooks/theme";
import { Button, Container, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import ThemeChanger from "./ThemeChanger";

const Links = [
  {
    label: "Introduction",
    href: "#introduction",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
];

const Navbar = () => {
  const [show, setShow] = React.useState(false);
  const [active, setActive] = React.useState("#introduction");

  const theme = store((state) => state.theme);
  const currentTheme = themesStore[theme];
  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-gradient-to-r from-slate-900 to-neutral-900 font-[sans-serif] min-h-[70px] tracking-wide fixed top-0 z-50 w-full border-b-2 border-b-white/20">
      <Container size="xl" className="w-full !px-0 lg:!px-5">
        <div className="flex flex-wrap items-center justify-between gap-5 w-full">
          <div
            id="collapseMenu"
            className={`${
              show
                ? "[&_ul]:max-lg:min-w-[300px] max-lg:before:bg-black"
                : "[&_ul]:max-lg:min-w-0 [&_ul]:max-lg:p-0 [&_ul]:max-lg:w-0 max-lg:before:bg-transparent max-lg:before:!static"
            } max-lg:before:fixed max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50 transition-all duration-200 ease-in-out`}
          >
            <button
              id="toggleClose"
              onClick={() => setShow(!show)}
              className={`lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 items-center justify-center border ${
                show ? "flex" : "hidden"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <ul className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-slate-900 max-lg:w-1/2 max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 transition-all duration-200 ease-in-out text-xl">
              {Links.map((link) => (
                <li
                  key={link.href}
                  className="max-lg:border-b border-gray-300 max-lg:py-3 lg:first:px-0 lg:px-3"
                  onClick={() => setShow(!show)}
                >
                  <Link
                    href={link.href}
                    className={`hover:${currentTheme["text-500"]} block ${
                      active === link.href
                        ? currentTheme["text-300"]
                        : "text-slate-300"
                    }`}
                    onClick={() => setActive(link.href)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li
                className="max-lg:border-b border-gray-300 max-lg:py-3 lg:first:px-0 lg:px-3 flex items-center gap-2"
                onClick={() => setShow(!show)}
              ></li>
            </ul>
          </div>

          <div className="flex justify-between items-center w-full lg:w-fit space-x-4">
            <Button
              size="md"
              component="a"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ritesh.sinha.cse2024@gmail.com&su=Hiring%20Opportunity&body=Hi%20Ritesh,%0D%0AWe%20would%20like%20to%20connect%20with%20you%20regarding%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className={`${currentTheme["bg-500"]}`}
            >
              Hire me
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
