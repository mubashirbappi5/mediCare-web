import React from 'react';
import docto from '../assets/doctor-with-his-arms-crossed-white-background.jpg'
import Image from 'next/image';
const Doc = ({doctor}) => {
     const {name,company,phone,website,address,email}=doctor
    return (
        <div>
        <div className='border rounded-lg p-4 space-y-4 '>
               <div >
                <Image className='w-full h-72 rounded-lg border' src={docto } alt='doctor'/>
               </div>
               <div className='space-y-2'>
                <h1 className='text-lg font-semibold'>{name}</h1>
                <h5 className=''> Email:{email}</h5>
                
                <h5 className=''> Phone:{phone}</h5>
                <h5 className=''>Address:{address.street}</h5>
                <button className='w-full border-2 rounded-lg p-2 border-blue-400 text-blue-400 font-semibold hover:bg-blue-400 hover:text-white'>View Profile</button>
                
               </div>

        </div>

        </div>
    );
};

export default Doc;