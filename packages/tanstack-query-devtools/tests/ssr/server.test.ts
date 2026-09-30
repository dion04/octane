import { describe, expect, it, vi } from 'vitest';
import { renderToStaticMarkup } from 'octane/server';
import { ServerDevtools } from '../_fixtures/server.tsrx';

const { constructed } = vi.hoisted(() => ({ constructed: { core: 0, panel: 0 } }));

vi.mock('@tanstack/query-devtools', () => ({
	TanstackQueryDevtools: class {
		mount = vi.fn();
		constructor() {
			constructed.core += 1;
		}
	},
	TanstackQueryDevtoolsPanel: class {
		mount = vi.fn();
		constructor() {
			constructed.panel += 1;
		}
	},
}));

describe('@octanejs/tanstack-query-devtools SSR', () => {
	it('renders only the parent containers on the server and never mounts the core', () => {
		expect(typeof document).toBe('undefined');

		const { html } = renderToStaticMarkup(ServerDevtools);

		expect(html).toContain('class="tsqd-parent-container"');
		expect(html).toContain('dir="ltr"');
		expect(html).toContain('height:200px');
		expect(html.match(/tsqd-parent-container/g)).toHaveLength(2);
	});
});
