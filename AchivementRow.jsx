import React from 'react';
import { SiLeagueoflegends } from 'react-icons/si';
import { GiPublicSpeaker } from 'react-icons/gi';
import {GiTrophy} from "react-icons/gi";

const AchievementRow = ({ icon, competition, date }) => {
  return (
    <tr className="border-b">
      <td className="p-4">
        {icon === 'lol' ? (
          <SiLeagueoflegends className="text-2xl text-[#89C9B8]" />
        ) : (
          <GiPublicSpeaker className="text-2xl text-[#89C9B8]" />
        )}
      </td>
      <td className="p-4"><GiTrophy className='text-2xl text-[#89C9B8]'/></td>
      <td className='p-4'>{competition}</td>
      <td className="p-4">{date}</td>
    </tr>
  );
};

export default AchievementRow;
