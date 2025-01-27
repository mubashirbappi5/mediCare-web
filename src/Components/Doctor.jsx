import React from 'react';
import Doc from './Doc';

  
const Doctor = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data)
    return (
        <div className='w-11/12 mx-auto'>
           <div className='space-y-4'>
            <h1 className='text-3xl font-bold text-center'>Our Expert Doctors</h1>
            <p className='text-gray-500 text-center'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <br /> quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
           </div>

           <section className='grid grid-cols-3 gap-6 my-10'>
  
          {
            data.slice(0,3).map(doctor=><Doc key={doctor.id} doctor={doctor} />)
          }            

           </section>



        </div>
    );
};

export default Doctor;