import React from 'react';

const Skills = ({ skillIcon: SkillIcon, skill }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <SkillIcon className="w-8 h-8 mb-2 text-[#89C9B8]" /> {/* Adjust size and spacing as needed */}
      <p className="text-[#89C9B8]">{skill}</p>
    </div>
  );
};

export default Skills;

