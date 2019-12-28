import * as React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { NextPage } from 'next';
import { connect } from 'react-redux';

const IndexPage: NextPage = (props: any) => {
	return (
		<Layout title="Home | Next.js + TypeScript Example">
			<h1>Hello {props.appStatus} 👋</h1>
			<p>
				<Link href="/about">
					<a>About</a>
				</Link>
			</p>
		</Layout>
	);
};

const mapStateToProps = (state: any) => ({
	appStatus: state.BasicReducer.appStatus
});

export default connect(mapStateToProps)(IndexPage);
