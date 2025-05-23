"use client";

import Avatar from "@/Components/avatar";
import ContainerPage from "@/Components/container";
import TransitionPage from "@/Components/transition-page";
import CounterServices from "@/Components/counter-services";
import TimeLine from "@/Components/time-line";
import { motion } from "framer-motion";

const PageAboutMe = () => {
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <Avatar />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10"
        >
          Toda mi{" "}
          <span className="font-bold text-secondary">
            trayectoria profesional
          </span>
        </motion.h1>

        <CounterServices />
        <TimeLine />
      </ContainerPage>
    </>
  );
};

export default PageAboutMe;
