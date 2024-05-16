import React from 'react';
import { SiLeagueoflegends } from 'react-icons/si';
import { GiPublicSpeaker } from 'react-icons/gi';

const AchievementHeader = ({ setFilter, activeFilter }) => {
  return (
    <div className="flex justify-center items-center gap-4 p-2">
      <span className={`text-lg text-[#89C9B8] cursor-pointer ${activeFilter === 'all' && 'bg-[#cccccc] text-white rounded-xl px-4 py-2'}`} onClick={() => setFilter('all')}>
        <span className="inline-block">
          ALL
        </span>
      </span>
      <span className={`text-2xl text-[#89C9B8] cursor-pointer ${activeFilter === 'lol' && 'bg-[#cccccc] text-white rounded-xl px-4 py-2'}`} onClick={() => setFilter('lol')}>
        <span className="inline-block">
          <SiLeagueoflegends />
        </span>
      </span>
      <span className={`text-2xl text-[#89C9B8] cursor-pointer ${activeFilter === 'debate' && 'bg-[#cccccc] text-white rounded-xl px-4 py-2'}`} onClick={() => setFilter('debate')}>
        <span className="inline-block">
          <GiPublicSpeaker />
        </span>
      </span>
    </div>
  );
};

export default AchievementHeader;
