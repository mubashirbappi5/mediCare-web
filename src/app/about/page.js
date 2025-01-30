import UserInfo from '@/Components/UserInfo';
import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';

const About = async() => {
    const session = await getServerSession( authOptions)
    return (
        <div>
            <p>{JSON.stringify(session)}</p>
            <h1>this is about section</h1>
            <UserInfo/>
        </div>
    );
};

export default About;