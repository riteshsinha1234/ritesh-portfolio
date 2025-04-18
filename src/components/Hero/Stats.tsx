"use client";
import store from "@/hooks/store";
import { themesStore } from "@/hooks/theme";
import { Flex } from "@mantine/core";
import React from "react";

const Stats = () => {
  const theme = store((state) => state.theme);
  const currentTheme = themesStore[theme];

  return (
    <Flex
      gap={40}
      wrap="wrap"
      className="p-5 rounded-lg bg-slate-800 lg:py-5 lg:px-8 w-fit animate__animated animate__lightSpeedInRight"
    >
      <div
        className={`text-xl text-white lg:pr-10 lg:border-r-2 lg:border-solid ${currentTheme["border-400"]}`}
      >
        <p className={`mb-2 font-bold ${currentTheme["text-400"]}`}>4+</p>
        <p className="font-semibold text-slate-200">Experience</p>
      </div>
      <div
        className={`text-xl text-white lg:pr-10 lg:border-r-2 lg:border-solid ${currentTheme["border-400"]}`}
      >
        <p className={`mb-2 font-bold ${currentTheme["text-400"]}`}>5+</p>
        <p className="font-semibold text-slate-200">Project worked</p>
      </div>
      <div className="text-xl text-white">
        <p className={`mb-2 font-bold ${currentTheme["text-400"]}`}>2</p>
        <p className="font-semibold text-slate-200">Tech stacks</p>
      </div>
    </Flex>
  );
};

export default Stats;
