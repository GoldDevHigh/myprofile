import React from "react";

const skillsContent = [
  { skillClass: "p100", skillPercent: "100", skillName: "HTML" },
  { skillClass: "p99", skillPercent: "99", skillName: "JAVASCRIPT" },
  { skillClass: "p80", skillPercent: "80", skillName: "CSS" },
  { skillClass: "p95", skillPercent: "95", skillName: "REACT" },
  { skillClass: "p73", skillPercent: "73", skillName: "NEXT" },
  { skillClass: "p65", skillPercent: "65", skillName: "VUE" },
  { skillClass: "p55", skillPercent: "55", skillName: "ANGULAR" },
  { skillClass: "p90", skillPercent: "90", skillName: "NODE" },
  { skillClass: "p85", skillPercent: "85", skillName: "MONGODB" },
  { skillClass: "p95", skillPercent: "95", skillName: "SOLIDITY" },
  { skillClass: "p89", skillPercent: "89", skillName: "WEB3" },
  { skillClass: "p98", skillPercent: "98", skillName: "BOOTSTRAP" },
  { skillClass: "p98", skillPercent: "98", skillName: "MATERIAL UI" },
  { skillClass: "p70", skillPercent: "70", skillName: "GIT" },
  { skillClass: "p80", skillPercent: "80", skillName: "C#" },
  { skillClass: "p85", skillPercent: "85", skillName: "C++" },
  { skillClass: "p75", skillPercent: "75", skillName: "UNITY" },
  { skillClass: "p99", skillPercent: "99", skillName: "MICRO C" },
  { skillClass: "p99", skillPercent: "99", skillName: "PIC C" },
  { skillClass: "p80", skillPercent: "80", skillName: "KEIL" },
  { skillClass: "p83", skillPercent: "83", skillName: "ALTIUM" },
  { skillClass: "p94", skillPercent: "94", skillName: "PROTEUS" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
