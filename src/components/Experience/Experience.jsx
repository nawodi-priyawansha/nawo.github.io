"use client";

import { Timeline } from "./Timeline";
import data from "../../../content/experience/experience-data";
import SectionHeading from '../SectionHeading/SectionHeading'

const Education = () => {
  
  return (
    <section id="experience">
        <SectionHeading
            title="// Experience"
            subtitle=""
        />
    
        <div className="w-full">
            <Timeline data={data} className="" />
        </div>
    </section>
  );
};

export default Education;
