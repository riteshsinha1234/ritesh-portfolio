"use client";
import { Container, Flex } from "@mantine/core";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import store from "@/hooks/store";
import { themesStore } from "@/hooks/theme";
import DetailExperience from "./DetailExperience";

const Experience = () => {
  const theme = store((state) => state.theme);
  const currentTheme = themesStore[theme];
  return (
    <Container
      size="xl"
      className="w-full py-10 lg:py-16 lg:!px-0 scroll-m-20"
      id="experience"
    >
      <ScrollAnimation animateIn="animate__rubberBand">
        <h2
          className={`mb-10 text-6xl text-center ${currentTheme["text-200"]}`}
        >
          Experiences
        </h2>
      </ScrollAnimation>
      <Flex justify="space-around" align="center" wrap="wrap">
        <DetailExperience />
      </Flex>
    </Container>
  );
};

export default Experience;
