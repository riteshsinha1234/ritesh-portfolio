"use client";
import { Button, Container, Flex } from "@mantine/core";
import React from "react";
import SocialIcons from "./SocialIcons";
import Stats from "./Stats";
import store from "@/hooks/store";
import { themesStore } from "@/hooks/theme";
import DiscloseImage from "../DiscloseImage";

const Hero = () => {
  const theme = store((state) => state.theme);
  const currentTheme = themesStore[theme];

  return (
    <Container
      size="xl"
      className="w-full py-10 lg:py-16 scroll-m-20"
      id="introduction"
    >
      <Flex className="!block lg:!flex lg:justify-between">
        <div className="mb-10 lg:mb-0">
          <p className="mb-3 text-2xl text-slate-400 animate__animated animate__backInDown">
            Hi I am
          </p>
          <p className="mb-8 text-4xl text-slate-300 animate__animated animate__backInLeft">
            Ritesh Sinha
          </p>
          <h1
            className={`mb-5 font-serif text-5xl ${currentTheme["text-500"]} lg:text-6xl animate__animated animate__bounceIn`}
          >
            Software Engineer
          </h1>
          <SocialIcons />
          <Flex gap={40} wrap="wrap" className="mb-10">
            <Button
              size="lg"
              className={`animate__animated animate__fadeIn ${currentTheme["bg-500"]}`}
              component="a"
              href="https://docs.google.com/document/d/1znmVgQOs8M5N3NES2KsX4UQldJ86npR-XZg_7Ln1G38/edit?tab=t.0"
              download
            >
              Download CV
            </Button>
          </Flex>
          <Stats />
        </div>
        <DiscloseImage
          src="/Ritesh-profile.png"
          alt="Profile image"
          doorClassName={currentTheme["bg-100"]}
        />
      </Flex>
    </Container>
  );
};

export default Hero;
