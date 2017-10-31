import { remote } from 'electron';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import * as IOActions from '../actions/IOActions';
import { AppState } from '../reducers/app';
import { getMessages } from '../selectors/localeSelectors';
import { getCurrentTab } from '../selectors/uilocationSelectors';
import { getTheme } from '../selectors/uisettingsSelectors';
import { App, AppDispatchProps, AppOwnProps, AppStateProps } from '../views/App';

function mapStateToProps(state: AppState) {
	return {
		currentTab: getCurrentTab(state),
		locale: getMessages(state),
		theme: getTheme(state),
		platform: remote.process.platform
	};
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
	return {
		minimize() {
			remote.getCurrentWindow().minimize();
		},
		maximize() {
			remote.getCurrentWindow().maximize();
		},
		restore() {
			remote.getCurrentWindow().unmaximize();
		},
		close() {
			dispatch(IOActions.requestClose());
		}
	};
}

export const AppContainer = connect<AppStateProps, AppDispatchProps, AppOwnProps>(mapStateToProps, mapDispatchToProps)(App);
