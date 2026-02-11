import Hero from "@/components/international/Hero";
import Fuutura from "@/components/international/Fuutura";
import Moderan from "@/components/international/Moderan";
import Trust from "@/components/international/Trust";
import React from "react";
import FuuturaUsage from "@/components/international/FuuturaUsage";
import Assetes from "@/components/international/Assetes";

const page = () => {
  return (
    <div>
      <Hero />
      <Moderan />
      <Fuutura />
      <FuuturaUsage />
      <Assetes />
      <Trust />
    </div>
  );
};

export default page;
