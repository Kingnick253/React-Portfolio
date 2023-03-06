import React from "react";
import Css from "../icons/css.svg";
import Html from "../icons/html.svg";
import Java from "../icons/java-4.svg";
import JavaScript from "../icons/javascript-2.svg";
import Mongodb from "../icons/mongodb-icon-1.svg";
import Mysql from "../icons/mysql-6.svg";
import ReactIcon from "../icons/react-1.svg";
import Tailwind from "../icons/tailwind-css-1.svg";

import SkillsData from "../components/SkillsData";

const Skills = () => {
  return (
    <div id="skills">
      <div className="bg-gradient-to-b from-FrostTwo to-FrostOne w-full h-screen">
        <div className="flex max-w-screen-lg mx-auto p-4 flex-col justify-center w-full h-full text-white">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 ">
              Technologies
            </p>
            <p className="pt-2">I have experience with</p>
          </div>
          <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-9 px-12 sm:px-0">
            {SkillsData.map(({ id, icon, style }) => {
              <div
                key={id}
                className=" shadow-md hover:scale-105 duration-500 py-2 rounded-lg"
              >
                <img src={icon} alt="" className=" w-20 mx-auto" />
                <p className="mt-3">CSS</p>
              </div>
            })}

            {/* <div className=' shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img  src={Css} alt="" className=' w-20 mx-auto'/>
                    <p className='mt-3'>CSS</p>
                  </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
