import * as React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { NextPage } from 'next';
import Style from '../less/pages/home.less';

const IndexPage: NextPage = () => {
	const name = { name: 'fuck' };
	return (
		<Layout title="Home | Next.js + TypeScript Example">
			<h1 className={Style.title}>Hello Next.js 👋</h1>
			<p>
				<Link href="/about">
					<a>About{name.name}</a>
				</Link>
			</p>
		</Layout>
	);
};

export default IndexPage;
