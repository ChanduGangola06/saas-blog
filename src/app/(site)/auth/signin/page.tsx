import React from 'react';
import { Metadata } from "next";
import Signin from '@/components/Auth/Signin';

export const metadata: Metadata = {
    title: `Sign in - ${process.env.SITE_NAME}`,
	description: `This is Sign in page for ${process.env.SITE_NAME}`,
}

const SigninPage = () => {
	return (
		<main className='pt-[150px]'>
			<Signin />
		</main>
	);
};

export default SigninPage;