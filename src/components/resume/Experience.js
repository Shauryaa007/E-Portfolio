import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2> */}
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="AMAZON | ML Summer School 2022"
            subTitle="1 July 2022- 30 July 2022"
            result="Online"
            des="
            This 6-week program provided me with a Basic understanding of various ML
            techniques, including regression, classification, clustering, and deep learning"
          />
          <ResumeCard
            //title="Web Developer & Trainer"
            //subTitle="Apple Developer Team - (2012 - 2016)"
            result="coming soon"
            //des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            //title="Front-end Developer"
            //subTitle="Nike - (2020 - 2011)"
            result="coming soon"
            //des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
         */}
         </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="IIPC KIET | 120+ Hours Of Online Training"
            subTitle="1 July 2021- 30 July 2021"
            result="online"
            des="• Completed this online web development training program, where I gained hands-on
            experience in HTML, CSS JavaScript."/>
          <ResumeCard
           result="coming soon"
           />
          <ResumeCard
           result="coming soon"
           />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
