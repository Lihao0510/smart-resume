import * as React from 'react';
import { connect } from 'react-redux';

class ResumeDetail extends React.PureComponent<any> {
	constructor(props: any) {
		super(props);
	}

	render() {
		return <div>简历详情页 {this.props.appStatus}</div>;
	}
}

const mapStateToProps = (state: any) => ({
	appStatus: state.BasicReducer.appStatus
});

export default connect(mapStateToProps)(ResumeDetail);
