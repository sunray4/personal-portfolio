import React from 'react'
import Sun from '../assets/sun.svg'

function ExpCard({startTime, endTime, role, company, description, location, children}: {startTime: string, endTime?: string, role: string, company: string, description: string, location: string, children: React.ReactNode}) {

    return (
        <div className='my-10 flex justify-between w-full'>
            <div id='timeline-item' className='flex justify-between items-center w-45'>
                <Sun height={60} />
                <div id='duration' className='flex flex-col items-center text-xl gap-y-0'>
                    <p className='-mb-2'>{endTime}</p>
                    <p className='rotate-90'>-</p>
                    <p className='-mt-2'>{startTime}</p>
                </div>
            </div>
            <div id='exp-details' className='flex flex-col justify-center items-start mt-4 ml-20  w-2/3'>
                <div className='flex justify-between items-end w-full'>
                    <p className='flex gap-x-2 items-end text-yellow'>
                        <span className='font-title-bold text-3xl'>{company}</span>
                        <span className='text-2xl'>-</span>
                        <span className='italic text-2xl'>{role}</span>
                    </p>
                    <p className='text-lg font-light'>{location}</p>
                </div>
                <p className='text-lg mt-2'>{description}</p>
                {children}
            </div>
        </div>
    )
}

export default ExpCard;
