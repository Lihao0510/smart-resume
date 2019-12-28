import * as React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { connect } from 'react-redux';

const AboutPage: React.FunctionComponent = (props: any) => (
	<Layout title="About | Next.js + TypeScript Example">
		<h1>About {props.appStatus}</h1>
		<p>This is the about page</p>
		<p>
			<Link href="/">
				<a>Go home</a>
			</Link>
		</p>
	</Layout>
);

const mapStateToProps = (state: any) => ({
	appStatus: state.BasicReducer.appStatus
});

export default connect(mapStateToProps)(AboutPage);
