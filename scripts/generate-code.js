"use strict";

const fs = require('fs');
const path = require('path');

module.exports = class GenearteCodePlugin {
	async apply(session, configuration) {
		session.hooks.runIncremental.tapPromise('GenearteCodePlugin', async (opt) => {
			const sourceFile = path.resolve(__dirname, '../test/input.txt');
			const targetFile = path.resolve(__dirname, '../src/generated.ts');

			const ch = await opt.watchGlobAsync(path.basename(sourceFile), { cwd: path.dirname(sourceFile) });

			const somethingChanged = [...ch.values()].some(item => item.changed);
			if (!somethingChanged) {
				session.logger.terminal.writeLine("input not change.");
				return;
			}

			const text = fs.readFileSync(sourceFile);
			fs.writeFileSync(targetFile, `/* DO NOT MODIFY*/\nexport const text = ${JSON.stringify(text)};`);

			session.logger.terminal.writeLine("file created.");
		});
	}
};
