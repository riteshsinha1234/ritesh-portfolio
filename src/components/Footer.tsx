"use client";
import store from "@/hooks/store";
import { themesStore } from "@/hooks/theme";
import { Container, Flex, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import SocialIcons from "./Hero/SocialIcons";

const Footer = () => {
  const theme = store((state) => state.theme);
  const currentTheme = themesStore[theme];
  return (
    <Container
      size="xl"
      className="!max-w-full !mx-0 lg:flex lg:justify-center lg:items-center bg-slate-950"
    >
      <div className="py-10 lg:py-16">
        <Flex justify="center" wrap="wrap">
          <SocialIcons />
        </Flex>
        <Flex
          justify="center"
          wrap="wrap"
          gap={40}
          className="pb-10 mb-5 border-b-2 border-b-white/20"
        >
          <div>
            <Link
              href="mailto:ritesh.sinha.cse2024@gmail.com"
              className={`${currentTheme["text-200"]} text-xl`}
            >
              ritesh.sinha.cse2024@gmail.com
            </Link>
          </div>
          <div>
            <Link
              href="tel:+916209849405"
              className={`${currentTheme["text-200"]} text-xl`}
            >
              +91 6209849405
            </Link>
          </div>
        </Flex>
        <Text className={`${currentTheme["text-200"]} text-xl text-center`}>
          Developed by Ritesh Sinha
        </Text>
      </div>
    </Container>
  );
};

export default Footer;
