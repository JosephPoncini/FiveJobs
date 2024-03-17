import React from 'react'
import HeroImage from './HeroImageComponent'
import { Col, Row } from 'react-bootstrap'

const HomePageComponent = () => {
  return (
    <div className=' text-black'>
      <HeroImage />
      <h1 className="underline">Summary</h1>
      <div className='mx-[5vw] flex flex-row justify-between'>
        <div className='flex flex-col'>
          <div className=' font-bold'>Company/Org</div>
          <div>Nintendo</div>
          <div>Google</div>
          <div>SpaceX</div>
          <div>Nvidia</div>
          <div>NASA</div>
        </div>
        <div className='flex flex-col'>
          <div className=' font-bold'>Position</div>
          <div>Sr. Software Engineer</div>
          <div>Software Engineer II, Infrastructure, Core</div>
          <div>Full Stack Software Engineer (Starlink)</div>
          <div>Senior Solution Engineer - AI and ML Storage Architecture</div>
          <div>Computer Engineer, AST, Software Systems (Direct Hire)</div>
        </div>
        <div className='flex flex-col'>
        <div className=' font-bold'>Application Link</div>
        <a target="_blank" href='https://careers.nintendo.com/job-openings/listing/240000000G.html?src=CWS-10000'>Link</a>
        <a target="_blank" href='https://www.google.com/about/careers/applications/jobs/results/80082773647205062-software-engineer-ii-infrastructure-core?target_level=EARLY&employment_type=INTERN&employment_type=FULL_TIME&degree=BACHELORS#!t=jo&jid=127025001&'>Link</a>
        <a target="_blank" href='https://boards.greenhouse.io/spacex/jobs/7233696002?gh_jid=7233696002'>Link</a>
        <a target="_blank" href='https://nvidia.wd5.myworkdayjobs.com/en-US/NVIDIAExternalCareerSite/details/Senior-Solution-Engineer---AI-and-ML-Storage-Architecture_JR1980968'>Link</a>
        <a target="_blank" href='https://nasa.usajobs.gov/job/780926100'>Link</a>
        </div>
      </div>



    </div>
  )
}

export default HomePageComponent