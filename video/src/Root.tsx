import React from "react";
import { Composition } from "remotion";
import { Intro } from "./Intro";
import { Testimonials, TESTIMONIALS_FRAMES } from "./Testimonials";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="Intro"
        component={Intro}
        durationInFrames={600}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="Testimonials"
        component={Testimonials}
        durationInFrames={TESTIMONIALS_FRAMES}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};
