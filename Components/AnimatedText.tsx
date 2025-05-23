"use client";
import { TypeAnimation } from "react-type-animation";

const AnimatedText = () => (
  <TypeAnimation
    sequence={[
      "puedes programarlo",
      1000,
      "puedes optimizarlo",
      1000,
      "puedes implementarlo",
      1000,
      "puedes desarrollarlo",
      1000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    className="block font-bold text-secondary"
  />
);

export default AnimatedText;