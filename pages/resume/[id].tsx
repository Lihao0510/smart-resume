import * as React from 'react';
import { connect } from 'react-redux';
import '../../less/pages/resume-detail.less';

class ResumeDetail extends React.PureComponent<any> {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<div className={'page'}>
				<nav className={'navbar-box'}>
					<span>标题</span>
				</nav>
				<div className={'page-body'}>
					<h1>aslfejas;e</h1>
					<h1>aslfejas;e</h1>
					<h1>aslfejas;e</h1>
					<h1>aslfejas;e</h1>
					<h1>aslfejas;e</h1>
					<h1>aslfejas;e</h1>
					<h1>aslfejas;e</h1>
					<h1>aslfejas;e</h1>
					<h1>aslfejas;e</h1>
					<h1>aslfejas;e</h1>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: any) => ({
	appStatus: state.BasicReducer.appStatus
});

export default connect(mapStateToProps)(ResumeDetail);
