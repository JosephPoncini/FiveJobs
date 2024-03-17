import React from 'react'
import NvidiaHeroImageComponent from './NvidiaHeroImageComponent'

const NvidiaPageComponent = () => {
  return (
    <div>
        
        <NvidiaHeroImageComponent/>
        <h1 className=' mb-16'><a className='text-black no-underline' target='_blank' href='https://nvidia.wd5.myworkdayjobs.com/en-US/NVIDIAExternalCareerSite/details/Senior-Solution-Engineer---AI-and-ML-Storage-Architecture_JR1980968'>Senior Solution Engineer - AI and ML Storage Architecture at Nvidia</a></h1>
            <div className='flex justify-between text-start mx-[5vw]'>
                <div className='flex flex-col justify-start text-start mx-[5vw]'>
                    <h2 className='underline tracking-wider'>Why I would like to work here?</h2>
                    <ul>
                        <li><h5>Nvidia is an industry leader in graphics and computing software</h5></li>
                        <li><h5>They have better than most benefits and perks</h5></li>
                        <li><h5>They might be playing a big influence in the upcoming years with the emergence of AI</h5></li>
                    </ul>
                </div>
                <div className='flex flex-col justify-end text-end mx-[5vw]'>
                    <h2 className='underline tracking-wider'>What new skills would I need to learn?</h2>
                    <ul>
                        <li><h5>Experience in designing and implementing scalable storage architectures for AI/ML workloads</h5></li>
                        <li><h5>Strong technical expertise in storage technologies, AI/ML frameworks, and proficiency in Python</h5></li>
                        <li><h5>Three years of relevant work experience</h5></li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-between text-start mx-[5vw]'>
                <div className='flex flex-col justify-start text-start mx-[5vw]'>
                    <h2 className='underline tracking-wider'>What are my goals here?</h2>
                    <ul>
                        <li><h5>Learn everything there is to know about AI</h5></li>
                        <li><h5>Make a good salary, $300k+</h5></li>
                        <li><h5>Develp a good work life balance</h5></li>
                    </ul>
                </div>
                <div className='flex flex-col justify-end text-end mx-[5vw]'>
                    <h2 className='underline tracking-wider'>Am I ready with my current skillset?</h2>
                    <ul>
                        <li><h5>No, I need a lot of work experience and experience working with AI frameworks</h5></li>
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default NvidiaPageComponent