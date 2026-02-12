import Hero from "../../components/international/Hero";
import Fuutura from "../../components/international/Fuutura";
import Moderan from "../../components/international/Moderan";
import Trust from "../../components/international/Trust";
import React from "react";
import FuuturaUsage from "../../components/international/FuuturaUsage";
import Assetes from "../../components/international/Assetes";
import Markets from "../../components/international/Markets";
import Calm from "../../components/international/Calm";
import Explore from "../../components/international/Explore";
import Platoform from "../../components/international/Platoform";

const page = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Moderan />
      <Fuutura />
      <Platoform />
      <FuuturaUsage />
      <Assetes />
      <Trust />
      <Markets />
      <Calm />
      <Explore />
    </div>
  );
};

export default page;
