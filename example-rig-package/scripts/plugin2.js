
const PLUGIN_NAME = 'plugin2';

module.exports = class SecondPlugin {
	apply(session, configuration, options) {
		session.hooks.run.tapPromise(PLUGIN_NAME, async (_opt) => {
			session.logger.terminal.writeLine("this is plugin 2");
		});
	}
};

module.exports.PLUGIN_NAME = PLUGIN_NAME;
