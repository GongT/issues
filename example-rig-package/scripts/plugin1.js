
const PLUGIN_NAME = 'plugin1';

module.exports = class FirstPlugin {
	apply(session, configuration, options) {
		session.hooks.run.tapPromise(PLUGIN_NAME, async (_opt) => {
			session.logger.terminal.writeLine("this is plugin 1");
		});
	}
};

module.exports.PLUGIN_NAME = PLUGIN_NAME;
