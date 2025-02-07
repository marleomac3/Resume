import React from 'react';

export default function HeaderSection() {
    return (
        <div className="">
            <h1 className="text-2xl font-bold text-center text-black">
                Marion L. McWilliams III
            </h1>
            <div className='flex text-xs gap-[6px]'>
                <p>302-563-0316</p>
                <p>|</p>
                <p><a href="https://github.com/marleomac3" target='_blank' className='text-blue-700 underline cursor-pointer'>https://github.com/marleomac3</a></p>
                <p>|</p>
                <p><a href='https://www.linkedin.com/in/marion-mcwilliams/' target='_blank' className='text-blue-700 underline cursor-pointer'>https://www.linkedin.com/in/marion-mcwilliams/</a></p>
                <p>|</p>
                <p><a href='https://github.com/marleomac3' target='_blank' className='text-blue-700 underline cursor-pointer'>https://github.com/marleomac3</a></p>
            </div>
            <hr />
        </div>
    );
}