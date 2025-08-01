import {
    Backend_skill,
    Frontend_skill,
    Full_stack,
    Other_skill,
    Skill_data,
} from "@/appData/index";
import React from "react";
import SkillDataProvider from "../Skills/SkillDataProvider";
import SectionHeading from '../SectionHeading/SectionHeading'

const SkillPeramid = () => {
    return (
        <section
            id="skills"    
        >
            <SectionHeading
                title=""
                subtitle="** Skills"
              />
            
            <div className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-10 py-"
            style={{ transform: "scale(0.9" }}>
                
            
                <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                    {Skill_data.map((image, index) => (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    ))}
                </div>

                <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                    {Frontend_skill.map((image, index) => (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    ))}
                </div>
                <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                    {Backend_skill.map((image, index) => (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    ))}
                </div>
                <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                    {Full_stack.map((image, index) => (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    ))}
                </div>
                <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                    {Other_skill.map((image, index) => (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    ))}
                </div>

                <div className="w-full h-full absolute">
                    <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                        <video
                            className="w-full h-auto"
                            preload="false"
                            playsInline
                            loop
                            muted
                            autoPlay
                            src="/cards-video.webm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillPeramid;