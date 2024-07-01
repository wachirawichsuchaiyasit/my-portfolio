import SubLayout from "@/components/SubLayout";
import Interview from "@/pages/Interview";
import IntroHome from "@/pages/Intro";
import Section from "@/components/Section";
import React, { ReactNode } from "react";
import Stack from "@/pages/Stack";
import MyProject from "@/pages/Project";
import Contact from "@/pages/Contact";

export default function Home() {
  return (
    <>
      
      <div className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll  relative  ">
        <Section>
          <IntroHome />
        </Section>
        <Section>
          <SubLayout>
            <div className="w-screen h-screen ">
              <Section>
                <Interview />
              </Section>
              <Section>
                <Stack />
              </Section>
              <Section>
                <MyProject />
              </Section>
              <Section>
                <Contact />
              </Section>
            </div>
          </SubLayout>
        </Section>
      </div >
    </>
  );
}
