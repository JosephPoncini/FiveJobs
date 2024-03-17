import React from 'react'
import NasaHeroImageComponent from './NasaHeroImageComponent'

const NasaPageComponent = () => {
    return (
        <div>

            <NasaHeroImageComponent />
            <h1 className=' mb-16'><a className='text-black no-underline' target='_blank' href='https://nasa.usajobs.gov/job/780926100'>Computer Engineer, AST, Software Systems at NASA</a></h1>
            <div className='flex justify-between text-start mx-[5vw]'>
                <div className='flex flex-col justify-start text-start mx-[5vw]'>
                    <h2 className='underline tracking-wider'>Why I would like to work here?</h2>
                    <ul>
                        <li><h5>NASA is a very reputable organization</h5></li>
                        <li><h5>I would be putting my degree to use</h5></li>
                        <li><h5>I can help bring people to Mars</h5></li>
                    </ul>
                </div>
                <div className='flex flex-col justify-end text-end mx-[5vw]'>
                    <h2 className='underline tracking-wider'>What new skills would I need to learn?</h2>
                    <ul>
                        <li><h5>Proficiency in software, computer, or electrical engineering principles and practices for software system development.</h5></li>
                        <li><h5>Experience in designing, developing, testing, and deploying software applications or relational databases</h5></li>
                        <li><h5>Familiarity with AGILE lifecycle process and Atlassian Software Management Tools (Jira, Bitbucket, etc.) for software development.</h5></li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-between text-start mx-[5vw]'>
                <div className='flex flex-col justify-start text-start mx-[5vw]'>
                    <h2 className='underline tracking-wider'>What are my goals here?</h2>
                    <ul>
                        <li><h5>MARS 2030!!!</h5></li>
                        <li><h5>Experience in the field of Space</h5></li>
                    </ul>
                </div>
                <div className='flex flex-col justify-end text-end mx-[5vw]'>
                    <h2 className='underline tracking-wider'>Am I ready with my current skillset?</h2>
                    <ul>
                        <li><h5>I would need to get familiar with everything mentioned in in the qualifications,  </h5></li>
                        <li><h5>but it seems like I would not be too far off from an entry level version of this position</h5></li>
                    </ul>
                </div>
            </div>


        </div>
    )
}


export default NasaPageComponent


