import React from 'react';
import Skills from './Skills';
import { GiBrain } from "react-icons/gi";
import { PiStrategyBold } from "react-icons/pi";
import { GiSatelliteCommunication } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { MdLoyalty } from "react-icons/md";
import { GiAbdominalArmor } from "react-icons/gi";
import { PricingCard } from './PricingCard';

export const Pricing = () => {
  return (
    <div id="pricing">
      <h1 className='text-center text-[#89C9B8] text-3xl pt-10'>Pricing</h1>
      <p className='text-center text-[#89C9B8] m-14 text-xl max-md:text-sm'>Step into the realm of elite friendship and experience a bond like no other. For a limited time, we're offering exclusive access to our prestigious group, where passion for debate and League of Legends converges with unwavering determination to excel.

        Joining us means becoming part of a dynamic mosaic of friendships fueled by shared goals and relentless pursuit of greatness. It's more than just camaraderie; it's a commitment to pushing boundaries and achieving success together.

        Unlock the door to our exclusive community with our limited-time pricing:
      </p>
      <h2 className='text-center text-[#89C9B8] text-2xl pt-10 m-4'>Skills you need</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 max-md:grid-cols-2 gap-2'>
        <Skills skillIcon={GiBrain} skill="Critical Thinking"/>
        <Skills skillIcon={GiSatelliteCommunication} skill="Effective Communication"/>
        <Skills skillIcon={PiStrategyBold} skill="Strategic Thinking"/>
        <Skills skillIcon={RiTeamFill} skill="Team Coordination"/>
        <Skills skillIcon={GiAbdominalArmor} skill="Respect"/>
        <Skills skillIcon={MdLoyalty} skill="Loyalty"/>
      </div>
      <div className='flex flex-wrap justify-center gap-4 md:gap-8 md:justify-between m-10'>
        <PricingCard h1="99.9$/mnth" h2="Noob pack" of1="Talk to us" of2="Play league with us once in a while" of3= "Go out with us once"/>
        <PricingCard h1="149.9$/mnth" h2="Gold pack" of1="Join group chat" of2="Play league with us couple of times" of3= "Go out with us once a week"/>
        <PricingCard h1="349.9$/mnth" h2="Legend pack" of1="Go to Sirogojno" of2="Play league with us" of3= "Go out with us whenever you want"/>
      </div>
    </div>
  )
}
