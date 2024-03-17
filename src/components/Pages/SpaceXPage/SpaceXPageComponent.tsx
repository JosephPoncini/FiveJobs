import React from 'react'
import SpaceXHeroImageComponent from './SpaceXHeroImageComponent'

const SpaceXPageComponent = () => {
  return (
    <div>
        
        <SpaceXHeroImageComponent/>

        <h1 className=' mb-16'><a className='text-black no-underline' target='_blank' href='https://boards.greenhouse.io/spacex/jobs/7233696002?gh_jid=7233696002'>Full Stack Software Engineer on Starlink at SpaceX</a></h1>
            <div className='flex justify-between text-start mx-[5vw]'>
                <div className='flex flex-col justify-start text-start mx-[5vw]'>
                    <h2 className='underline tracking-wider'>Why I would like to work here?</h2>
                    <ul>
                        <li><h5>Working at SpaceX has been a dream of mine since high school</h5></li>
                        <li><h5>I would be helping humankind advance into its SpaceAge</h5></li>
                        <li><h5>It would give some purpose to my major</h5></li>
                    </ul>
                </div>
                <div className='flex flex-col justify-end text-end mx-[5vw]'>
                    <h2 className='underline tracking-wider'>What new skills would I need to learn?</h2>
                    <ul>
                        <li><h5>Some languages I would need to add to my resume are Go, Scala, and Java</h5></li>
                        <li><h5>I would need to learn and know Docker and Kubernetes</h5></li>
                        <li><h5>I would need to vastly increase my knowledge in databases</h5></li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-between text-start mx-[5vw]'>
                <div className='flex flex-col justify-start text-start mx-[5vw]'>
                    <h2 className='underline tracking-wider'>What are my goals here?</h2>
                    <ul>
                        <li><h5>Make a decent salayr 130k+</h5></li>
                        <li><h5>Grow in experience in the aerospace industry</h5></li>
                        <li><h5>Not be consumed by my work</h5></li>
                    </ul>
                </div>
                <div className='flex flex-col justify-end text-end mx-[5vw]'>
                    <h2 className='underline tracking-wider'>Am I ready with my current skillset?</h2>
                    <ul>
                        <li><h5>I am surprisingly not too far off qualification wise</h5></li>
                        <li><h5>A lot of skills we learn in CodeStack are listed on the applicaiton page</h5></li>
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default SpaceXPageComponent