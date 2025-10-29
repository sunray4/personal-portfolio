import React, { useEffect, useState, useRef } from 'react'
import Sun from '../assets/sun.svg'
import Image from 'next/image'

function ExpCard({startTime, endTime, role, company, description, location, image}: {startTime: string, endTime?: string, role: string, company: string, description: string, location: string, image: {src: string, alt: string}}) {
    const [height, setHeight] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const imageWidth = 842; // Original image width for aspect ratio calculation
    const imageHeight = 254; // Original image height for aspect ratio calculation
    
    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                setHeight(containerWidth / imageWidth * imageHeight);
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='my-10 flex justify-between w-full'>
            <div id='timeline-item' className='flex flex-shrink-0 justify-between items-center w-47'>
                <Sun height={60} />
                <div id='duration' className='flex flex-col items-center text-2xl gap-y-0'>
                    <p className='-mb-2'>{endTime}</p>
                    <p className='rotate-90'>-</p>
                    <p className='-mt-2'>{startTime}</p>
                </div>
            </div>
            <div id='exp-details' className='flex flex-col justify-center items-start mt-4 ml-20 w-2/3'>
                <div className='flex justify-between items-end w-full'>
                    <p className='flex gap-x-2 items-end text-yellow'>
                        <span className='font-title-bold text-3xl'>{company}</span>
                        <span className='text-2xl'>-</span>
                        <span className='italic text-2xl'>{role}</span>
                    </p>
                    <p className='text-lg'>{location}</p>
                </div>
                <p className='text-lg mt-2'>{description}</p>
                <div ref={containerRef} className="relative w-full mt-4 flex-shrink-0" style={{height: `${height}px`}}>
                    <Image src={image.src} alt={image.alt} fill className="object-contain" sizes="(max-width: 768px) 100vw, 66vw" />
                </div>
            </div>
        </div>
    )
}

export default ExpCard;
