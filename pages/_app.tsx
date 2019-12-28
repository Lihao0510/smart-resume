import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux/store';

class SmartResumeApp extends App {
	static async getInitialProps({ Component, ctx }: any) {
		// we can dispatch from here too
		// ctx.store.dispatch({ type: 'FOO', payload: 'foo' });

		const pageProps = Component.getInitialProps
			? await Component.getInitialProps(ctx)
			: {};

		return { pageProps };
	}

	render() {
		const { Component, pageProps, store }: any = this.props;
		return (
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		);
	}
}

export default withRedux(initStore)(SmartResumeApp);
