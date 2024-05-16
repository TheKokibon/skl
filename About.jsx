import React from 'react'
import CardPeople from './CardPeople';
import b from "../assets/Bgray.png";
import Lp from "../assets/Lp.png";
import k from "../assets/k.png";
import brka from "../assets/brka.png";
import djm from "../assets/Djm.png";
import prokic from "../assets/prokic.png";
import paja from "../assets/paja.png";
import y from "../assets/y.png";
import o from "../assets/o.png";
import s from "../assets/S.png";

 const About = () => {
  return (
    <div id="about" className='  w-full'>
        <h1 className='text-center text-[#89C9B8] text-3xl pt-10'>About</h1>
        <p className='text-center  text-[#89C9B8] m-14 text-xl max-md:text-sm'>In the dynamic mosaic of friendships, our group shines as a tight-knit unit defined by our dual passions for debate and League of Legends. Each member brings a unique blend of intellect and strategic prowess to the table, akin to champions in the Summoner's Rift. We're relentless in our pursuit of excellence, whether dissecting complex issues in heated debates or dominating the virtual battlefield with synchronized teamwork and strategic finesse.

Fuelled by an unwavering determination to improve and succeed, we're more than just friends—we're a force to be reckoned with. Our relentless hustle and grind define us, pushing us to excel in every arena we step into, be it the arena of ideas or the digital battlegrounds of League of Legends. With us, the pursuit of victory is not just a goal; it's a way of life, driving us to push our limits and emerge victorious, time and time again.</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mx-auto max-w-6xl'>
            <CardPeople
            img={b} 
            h2= "Mihailo Babic"
            debate1="Retorics"
            debate2="Rebuttal"
            debate3 = "Analysis"
            champion1 = "Galio"
            champion2 = "Rakan"
            champion3 = "Varus"
            
            />
          
            <CardPeople 
                img={Lp}
                h2= "Lazar Popovic"
                debate1="Analysis"
                debate2="Charac."
                debate3 ="Principles"
                champion1 = "Braum"
                champion2 = "Yummi"
                champion3 = "Karma"
                
            />
            <CardPeople 
                img={k}
                h2= "Konstantin Popovic"
                debate1="Rebuttal"
                debate2="Analysis"
                debate3 ="Structure"
                champion1 = "Udyr"
                champion2 = "Lee"
                champion3 = "Nidalee"
                
            />
             <CardPeople 
                img={brka}
                h2= "Stefan Josipovic"
                debate1="Framing"
                debate2="Analysis"
                debate3 ="Strategy"
                champion1 = "Dr. Mundo"
                champion2 = "Poppy"
                champion3 = "Shen"
                
            />

                <CardPeople 
                img={djm}
                h2= "Djordje Mirkovic"
                debate1="Retorics"
                debate2="Analysis"
                debate3 ="Framing"
                champion1 = "Alistar"
                champion2 = "Ezrael"
                champion3 = "Lucian"
                
            />

            <CardPeople 
                img={prokic}
                h2= "Milos Prokic"
                debate1="Rebuttal"
                debate2="Framing"
                debate3 ="Strategy"
                champion1 = "Bard"
                champion2 = "Aurelian sol"
                champion3 = "Zoe"
                
            />

             
            <CardPeople 
                img={paja}
                h2= "Pavle Antonijevic"
                debate1="Analysis"
                debate2="Structure"
                debate3 ="Strategy"
                champion1 = "Gnar"
                champion2 = "Gwen"
                champion3 = "Fiora"
                
            />
            
            <CardPeople 
                img={y}
                h2= "Vasilije Milacic"
                debate1="Analysis"
                debate2="Rebuttal"
                debate3 ="Framing"
                champion1 = "Lux"
                champion2 = "Syndra"
                champion3 = "Vex"
                
            />

                <CardPeople 
                img={o}
                h2= "Obrad Kostic"
                debate1="Analysis"
                debate2="Strategy"
                debate3 ="Framing"
                champion1 = "Ekko"
                champion2 = "Taric"
                champion3 = "Thresh"
                
            />

            <div className="hidden md:block"></div> {/* Empty grid cell to create space */}
                <CardPeople 
                img={s}
                h2= "Strahinja Batanjski"
                debate1="Analysis"
                debate2="Strategy"
                debate3 ="Rebuttal"
                champion1 = "Azir"
                champion2 = "Yone"
                champion3 = "Sylas"
                
            />
        </div>
    </div>
  )
}

export default About;
