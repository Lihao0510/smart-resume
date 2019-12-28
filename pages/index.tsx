import * as React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { NextPage } from 'next';
import { connect } from 'react-redux';
import { updateAppStatusAsync } from '../redux/action/BasicAction';
import { Button } from 'antd';

const IndexPage: NextPage = (props: any) => {
	return (
		<Layout title="Home | Next.js + TypeScript Example">
			<h1>Hello {props.appStatus} 👋</h1>
			<p>
				<Link href="/about">
					<a>About</a>
				</Link>
				<br />
				<Link href="/resume">
					<a>Resume</a>
				</Link>
				<br />
				<Link href="/resume/123456">
					<a>ResumeDetail</a>
				</Link>
			</p>
			<Button
				onClick={() => {
					props.updateAppStatusAsync('APP');
				}}
			>
				点击发送事件
			</Button>
		</Layout>
	);
};

IndexPage.getInitialProps = async () => {
	return {};
};

const mapStateToProps = (state: any) => ({
	appStatus: state.BasicReducer.appStatus
});

const mapDispatchToProps = (dispatch: Function) => {
	return {
		updateAppStatusAsync: (appStatus: string) => {
			dispatch(updateAppStatusAsync(appStatus));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
