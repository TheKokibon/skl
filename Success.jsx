import React, {useState} from 'react';
import AchievementHeader from './AchivementHeader';
import AchievementRow from './AchivementRow';
import AchievementTable from './AchivementTable';
import { GiTrophy } from "react-icons/gi";

const Success = () => {
  const [filter, setFilter] = useState('all');

  const achievements = [
    { icon: 'lol', place: GiTrophy, competition: 'Clash', date: 'May 8, 2024' },
    { icon: 'lol', place: GiTrophy, competition: 'Clash', date: 'November 23, 2023' },
    { icon: 'lol', place: GiTrophy, competition: 'Clash', date: 'September 5, 2020' },
    { icon: 'lol', place: GiTrophy, competition: 'Clash', date: 'September 6, 2020' },
    { icon: 'debate', place: GiTrophy, competition: 'WUDC-ESL', date: 'January 2, 2024' },
    { icon: 'debate', place: GiTrophy, competition: 'WUDC-EFL', date: 'January 2, 2024' },
    { icon: 'debate', place: GiTrophy, competition: 'Zagreb IV', date: 'March 2, 2024' },
    { icon: 'debate', place: GiTrophy, competition: 'Monopoly', date: 'April 13, 2024' },
    { icon: 'debate', place: GiTrophy, competition: 'MiddleMen', date: 'November 3, 2023' },
    { icon: 'debate', place: GiTrophy, competition: 'Monopoly', date: 'April 23, 2023' },
  ];

  const filteredAchievements = achievements.filter(achievement => 
    filter === 'all' || achievement.icon === filter
  );

  return (
    <div id="success" className="p-6 text-[#89C9B8]">
      <h1 className="text-center text-[#89C9B8] text-3xl pt-10">Success</h1>
      <p className="text-center  text-[#89C9B8] m-14 text-xl max-md:text-sm">
        Our success story speaks volumes about the effectiveness of these skills. By combining our intellectual prowess with our strategic finesse on the Rift, we've climbed the ranked ladder with remarkable consistency, earning accolades and recognition in the competitive gaming community. Simultaneously, our dominance in debate tournaments, including prestigious events like WUDC and EUDC, showcases our ability to excel in the arena of ideas, breaking records and setting new standards of excellence. With every local tournament victory, we reaffirm our status as a force to be reckoned with, demonstrating the power of relentless determination and unwavering teamwork.
      </p>
      <AchievementHeader setFilter={setFilter} activeFilter={filter}/>
      <hr className='w-1/2 m-auto'/>      
      <AchievementTable>
      {filteredAchievements.map((achievement, index) => (
          <AchievementRow 
            key={index}
            icon={achievement.icon} 
            place={achievement.place} 
            competition={achievement.competition} 
            date={achievement.date} 
          />
        ))}
      </AchievementTable>
    </div>
  );
};

export default Success;
