import React from 'react';

export default function HeaderSection() {
    return (
        <div className="w-[51rem] h-[66rem] bg-white">
            <h1 className="text-2xl font-bold text-center text-black">
                Marion L. McWilliams III
            </h1>
            <div className='flex text-xs gap-2'>
                <p>302-563-0316</p>
                <p><a href="https://github.com/marleomac3" target='_blank'>https://github.com/marleomac3</a></p>
                <p><a href='https://www.linkedin.com/in/marion-mcwilliams/' target='_blank'>https://www.linkedin.com/in/marion-mcwilliams/</a></p>
                <p><a href='https://github.com/marleomac3' target='_blank'>https://github.com/marleomac3</a></p>
            </div>
            <hr />
        </div>
    );
}