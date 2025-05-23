"use client";

import MotionTransition from "./transition-component";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Avatar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <MotionTransition
      position="bottom"
      className="hidden md:inline-block md:absolute bottom-0 right-0"
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
          src="/avatar-1.png"
          width={300}
          height={300}
          alt="Ilustración de avatar desarrollador"
          priority
        />
      </motion.div>
    </MotionTransition>
  );
};

export default Avatar;