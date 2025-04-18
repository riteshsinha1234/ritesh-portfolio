"use client";
import store from "@/hooks/store";
import { themeColors, themesStore } from "@/hooks/theme";
import { Container, Flex, RingProgress, Text } from "@mantine/core";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const technicalSkills = [
  {
    value: 80,
    color: "#01579B",
    label: "Dart",
  },
  {
    value: 95,
    color: "#3FB6D3",
    label: "Flutter",
  },
  {
    value: 80,
    color: "#5382A1",
    label: "Java",
  },
  {
    value: 80,
    color: "#E64A19",
    label: "Git",
  },
  {
    value: 80,
    color: "#008008",
    label: "API",
  },
  {
    value: 80,
    color: "#44A8B3",
    label: "Tailwind Css",
  },
  {
    value: 70,
    color: "#52A044",
    label: "Node JS",
  },
  {
    value: 76,
    color: "#336791",
    label: "PostgreSQL",
  },
  {
    value: 80,
    color: "#01EC64",
    label: "MongoDB",
  },
  {
    value: 90,
    color: "#FFCA28",
    label: "Firebase",
  },
  {
    value: 75,
    color: "#FF9900",
    label: "AWS",
  },
  {
    value: 70,
    color: "#EC407A",
    label: "GraphQL",
  },
  {
    value: 77,
    color: "#8BC34A",
    label: "Android",
  },
  {
    value: 80,
    color: "#78909C",
    label: "iOS",
  },
];

const nonTechnicalSkills = [
  {
    value: 100,
    label: "Communication",
  },
  {
    value: 80,
    label: "JIRA",
  },
  {
    value: 80,
    label: "Management",
  },
  {
    value: 90,
    label: "Documentation",
  },
  {
    value: 90,
    label: "Collaboration",
  },
  {
    value: 90,
    label: "Mentorship",
  },
];

const Skills = () => {
  const theme = store((state) => state.theme);
  const currentTheme = themesStore[theme];

  const color = store((state) => state.color);
  const currentColor = themeColors[color];

  return (
    <Container
      size="xl"
      className="w-full py-10 lg:py-16 scroll-m-20"
      id="skills"
    >
      <ScrollAnimation animateIn="animate__rubberBand">
        <h2
          className={`mb-10 text-6xl text-center ${currentTheme["text-200"]}`}
        >
          Technical Skills
        </h2>
      </ScrollAnimation>
      <Flex wrap="wrap" gap={50} justify="center" className="mb-16">
        {technicalSkills.map((skill, index) => {
          return (
            <ScrollAnimation key={index} animateIn="animate__fadeInUp">
              <RingProgress
                size={210}
                sections={[{ value: skill.value, color: skill.color }]}
                label={
                  <Text c="#ffffff" fw={700} ta="center" size="xl">
                    {skill.label}
                  </Text>
                }
              />
            </ScrollAnimation>
          );
        })}
      </Flex>
      <ScrollAnimation animateIn="animate__rubberBand">
        <h2
          className={`mb-10 text-4xl text-center lg:text-6xl ${currentTheme["text-200"]}`}
        >
          Non-Technical Skills
        </h2>
      </ScrollAnimation>

      <Flex wrap="wrap" gap={50} justify="center">
        {nonTechnicalSkills.map((skill, index) => {
          return (
            <ScrollAnimation key={index} animateIn="animate__fadeInUp">
              <RingProgress
                size={240}
                sections={[{ value: skill.value, color: currentColor["500"] }]}
                label={
                  <Text c="#ffffff" fw={700} ta="center" size="xl">
                    {skill.label}
                  </Text>
                }
              />
            </ScrollAnimation>
          );
        })}
      </Flex>
    </Container>
  );
};

export default Skills;
