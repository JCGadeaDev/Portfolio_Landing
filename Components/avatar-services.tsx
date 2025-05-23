"use client";

import Image from "next/image";
import MotionTransition from "./transition-component";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AvatarServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <MotionTransition
      position="right"
      className="hidden md:inline-block md:absolute bottom-0 left-0"
    >
      <motion.div
        ref={ref}
        animate={isInView ? { y: [0, -10, 0] } : { y: 0 }}
        transition={{
          duration: 3,
          repeat: isInView ? Infinity : 0,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/services.png"
          width={300}
          height={300}
          alt="Ilustración representativa de servicios"
          className="w-[350px] h-auto md:ml-[-31px]"
          priority
        />
      </motion.div>
    </MotionTransition>
  );
};

export default AvatarServices;
