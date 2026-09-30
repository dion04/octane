import * as Devtools from './ReactQueryDevtools.tsrx';
import * as DevtoolsPanel from './ReactQueryDevtoolsPanel.tsrx';

export const ReactQueryDevtools: (typeof Devtools)['ReactQueryDevtools'] =
	process.env.NODE_ENV !== 'development'
		? function () {
				return null;
			}
		: Devtools.ReactQueryDevtools;

export const ReactQueryDevtoolsPanel: (typeof DevtoolsPanel)['ReactQueryDevtoolsPanel'] =
	process.env.NODE_ENV !== 'development'
		? function () {
				return null;
			}
		: DevtoolsPanel.ReactQueryDevtoolsPanel;

export type DevtoolsPanelOptions = DevtoolsPanel.DevtoolsPanelOptions;
