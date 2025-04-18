"use client"
import store from "@/hooks/store";
import { themesStore } from "@/hooks/theme";
import { Flex } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
  const theme = store((state) => state.theme);
  const currentTheme = themesStore[theme];
  return (
    <Flex gap={40} wrap={"wrap"} className="mb-10">
      <Link href="https://github.com/riteshsinha1234" target="_blank" className={`p-2 rounded-full ${currentTheme["bg-200"]} animate__animated animate__rotateIn`}><FaGithub color="black" size="1.75rem" /></Link>
      <Link href="https://www.linkedin.com/in/ritesh-sinha-/" target="_blank" className={`p-2 rounded-full ${currentTheme["bg-200"]} animate__animated animate__rotateIn`} ><FaLinkedin color="black" size="1.75rem" /></Link>
    </Flex>
  );
};

export default SocialIcons;
