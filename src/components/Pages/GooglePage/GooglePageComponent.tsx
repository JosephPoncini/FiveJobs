import React from 'react'
import GoogleHeroImageComponent from './GoogleHeroImageComponent'

const GooglePageComponent = () => {
  return (
    <div>
        <GoogleHeroImageComponent/>
        <h1 className=' mb-16'><a className='text-black no-underline' target='_blank' href='https://www.google.com/about/careers/applications/jobs/results/80082773647205062-software-engineer-ii-infrastructure-core?target_level=EARLY&employment_type=INTERN&employment_type=FULL_TIME&degree=BACHELORS#!t=jo&jid=127025001&'>Software Engineer II at Google</a></h1>
            <div className='flex justify-between text-start mx-[5vw]'>
                <div className='flex flex-col justify-start text-start mx-[5vw]'>
                    <h2 className='underline tracking-wider'>Why I would like to work here?</h2>
                    <ul>
                        <li><h5>Google works on cutting-edge technologies and projects that can challenge and inspire me.</h5></li>
                        <li><h5>Google offers competitive benefits and perks that support my well-being and work-life balance</h5></li>
                        <li><h5>Google offers vast resources and opportunities for personal and professional growth.</h5></li>
                    </ul>
                </div>
                <div className='flex flex-col justify-end text-end mx-[5vw]'>
                    <h2 className='underline tracking-wider'>What new skills would I need to learn?</h2>
                    <ul>
                        <li><h5>I would need to get a Masters in Computer Science</h5></li>
                        <li><h5>And at least 1 year of work experience working on a large-scale infrastructure</h5></li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-between text-start mx-[5vw]'>
                <div className='flex flex-col justify-start text-start mx-[5vw]'>
                    <h2 className='underline tracking-wider'>What are my goals here?</h2>
                    <ul>
                        <li><h5>Career Growth: I would want to one day become level III</h5></li>
                        <li><h5>Mentorship and Support: Providing mentorship to junior engineers and seeking mentorship from my colleagues</h5></li>
                    </ul>
                </div>
                <div className='flex flex-col justify-end text-end mx-[5vw]'>
                    <h2 className='underline tracking-wider'>Am I ready with my current skillset?</h2>
                    <ul>
                        <li><h5>Absolutely not</h5></li>
                        <li><h5>Going back to school would be a pain, I think I would need to get in by being a Software Engineer I first</h5></li>
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default GooglePageComponent