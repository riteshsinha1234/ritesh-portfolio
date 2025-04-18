"use client";
import store from "@/hooks/store";
import { themesStore } from "@/hooks/theme";
import { Button, Container, Flex } from "@mantine/core";
import Image from "next/image";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const AboutMe = () => {
  const theme = store((state) => state.theme);
  const currentTheme = themesStore[theme];

  return (
    <Container
      size="xl"
      className="w-full py-10 lg:py-16 scroll-m-20"
      id="about"
    >
      <ScrollAnimation animateIn="animate__rubberBand">
        <h2
          className={`mb-5 text-6xl text-center lg:mb-0 ${currentTheme["text-200"]}`}
        >
          About me
        </h2>
      </ScrollAnimation>

      <Flex justify="space-around" align="center" wrap="wrap">
        <Image
          src="/about-me-banner.png"
          alt="About me illutstration"
          width={500}
          height={500}
          className="object-cover"
        />
        <ul
          className={`max-w-xl space-y-5 text-xl lg:text-2xl ${currentTheme["text-300"]} rounded-xl font-medium [text-shadow:1px_1px_2px_rgba(0,0,0,1)]`}
        >
          <ScrollAnimation animateIn="animate__pulse">
            <li className="!mb-12">
              Hi, my name is Ritesh Sinha. I have over 4 years of experience in
              full stack Flutter app development, particularly in building
              scalable mobile solutions using Flutter. I have built multiple
              applications, used databases like Firestore, MongoDb, and
              PostgreSQL. I also have experience with API development in Node.js
              at my previous organization, and I enjoy optimizing cloud-based
              services for performance and security. I’m excited about this
              opportunity because it aligns with my expertise and passion for
              innovative and scalable applications.
            </li>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__swing">
            <li>
              <Button
                className={currentTheme["bg-500"]}
                size="lg"
                component="a"
                href="https://docs.google.com/document/d/1znmVgQOs8M5N3NES2KsX4UQldJ86npR-XZg_7Ln1G38/edit?tab=t.0"
                download
              >
                Download CV
              </Button>
            </li>
          </ScrollAnimation>
        </ul>
      </Flex>
    </Container>
  );
};

export default AboutMe;
