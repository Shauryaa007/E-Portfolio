import React from 'react'
import Title from '../layouts/Title'
import { eportfolio, major,pixel,Sharp,text,blood } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="BLOOD CONNECT | A Blood Bank's Web Application"
          des="Developed a Web App that connects blood donors with people in need.
          This application allows users to register as 1-blood donors or 2-blood requesters
          and search for blood donors based on location and blood type."
          src={blood}
          git="https://github.com/Shauryaa007/BloodConnect"
          live="https://bloodconnect007.netlify.app/"
        />
        <ProjectsCard
          title="TEXT ANALYZER | A React-Based Web Application"
          des=" Designed a Web App that analyzes user-provided text and displays various metrics
          such as 1-word count, 2-character count, and 3-UpperCase/LoweCase, 4-Copy the
          Text and many more using ReactJS"
          src={text}
          git="https://github.com/Shauryaa007/TextUtils-React"
          live="https://textanalyzer007.netlify.app/"
        />
       
        <ProjectsCard
          title="Pixel WhiteBoard"
          des="Accomplished React JS Developer | Proudly Completed a Robust Pixel board Project in React | Leveraging State-of-the-Art Techniques for Showcasing Creativity"
          src={pixel}
          git="https://github.com/Shauryaa007/React-pixel-board"
          live="https://pixelboard07.netlify.app/"
        />
         <ProjectsCard
          title="Sharp Studios"
          des=" Studio website frontend , used HTML CSS for the frontend designing and 
                it also contain a form for getting signed in. this was one of the initial project that i made when i started Web-Development"
          src={Sharp}
          git="https://github.com/Shauryaa007/sharpstudios"
          live="https://sharpstudios.netlify.app/"
        />
        <ProjectsCard
          title="E-Portfolio Website"
          des=
          "Innovative React JS Developer | Crafting Stunning E-Portfolio Projects with React | Showcasing Skills, Achievements, and Professional Growth in a Seamless and Engaging Manner"
          src={eportfolio}
          git="https://github.com/Shauryaa007/E-Portfolio"
          live="https://shaurya-eportfolio.netlify.app/"
        />
        <ProjectsCard
          title="AUTOMATIC ATTENDANCE MARKER | Major Project"
          des="Implemented an Automatic Attendance Marker that uses OpenCV’s face
          recognition technology to recognize and mark the attendance of students ."
          src={major}
        />
      </div>
    </section>
  );
}

export default Projects