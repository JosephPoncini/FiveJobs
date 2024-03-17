import React from 'react'
import NintendoHeroImageComponent from './NintendoHeroImageComponent'

const NintendoPageComponent = () => {
    return (
        <div>
            <NintendoHeroImageComponent />
            <h1 className=' mb-16'><a className='text-black no-underline' target='_blank' href='https://careers.nintendo.com/job-openings/listing/240000000G.html?src=CWS-10000'>Sr. Software Engineer at Nintendo</a></h1>
            <div className='flex justify-between text-start mx-[5vw]'>
                <div className='flex flex-col justify-start text-start mx-[5vw]'>
                    <h2 className='underline tracking-wider'>Why I would like to work here?</h2>
                    <ul>
                        <li><h5>Nintendo is an iconic brand. I grew up playing Nintendo games and I would love to help produce some for the upcoming generations.</h5></li>
                        <li><h5>I want to have a good work life balance and Nintendo is known to offer this to its employees</h5></li>
                        <li><h5>Nintendo has a very creative atmosphere, I think it would be fun just to work there</h5></li>
                    </ul>
                </div>
                <div className='flex flex-col justify-end text-end mx-[5vw]'>
                    <h2 className='underline tracking-wider'>What new skills would I need to learn?</h2>
                    <ul>
                        <li><h5>I need years of previous work experience (at least 5)</h5></li>
                        <li><h5>Expertise in AWS, relational databases such as MySQL and Oracle and nonrelational databases like MongoDB and DynamoDB</h5></li>
                        <li><h5>I would need to get greater at the languages I do know and add languages such as Java and some other libraries like Spring to it</h5></li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-between text-start mx-[5vw]'>
                <div className='flex flex-col justify-start text-start mx-[5vw]'>
                    <h2 className='underline tracking-wider'>What are my goals here?</h2>
                    <ul>
                        <li><h5>My goal is to work on a Zelda Game</h5></li>
                        <li><h5>and make $200k+</h5></li>
                    </ul>
                </div>
                <div className='flex flex-col justify-end text-end mx-[5vw]'>
                    <h2 className='underline tracking-wider'>Am I ready with my current skillset?</h2>
                    <ul>
                        <li><h5>I am not ready for a senior development role</h5></li>
                        <li><h5>Definitely need some years as a Junior and Mid first, maybe at least 10</h5></li>
                    </ul>
                </div>
            </div>




        </div>
    )
}

export default NintendoPageComponent