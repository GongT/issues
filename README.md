https://github.com/microsoft/web-build-tools/issues/991

### Description

Imagine I'm the owner of the package "debug".    
Currently there are "debug@4.x.x" on npm registry.

In this repo, I update it to "9.9.9", but not publish yet.

---
Now, I can do:
1. Modify `test/package.json`, add `"debug": "^9"`
1. run `rush update`

But I can not do:
1. in project `test2` *("debug" not in it's `package.json`)*
1. run `rush add --caret -p debug`

After that, rush added `"debug": "^4.1.1"` inside `package.json`.    
But it failed during "link"

I also can not do:
1. Modify `test2/package.json`, add `"debug": "^4"`
1. run `rush update`

Error message is like:
```
LINKING: test2

ERROR: Internal Error: Cannot find installed dependency "debug" in
"/data/DevelopmentRoot/github.com/gongt/issues/common/temp/node_modules/.local/%2Fdata%2FDevelopmentRoot%2Fgithub.com%2Fgongt%2Fissues%2Fcommon%2Ftemp%2Fprojects%2Ftest2.tgz/node_modules"
You have encountered a software defect. Please consider reporting the issue to the maintainers of this application.
```

---
By the way, I also can not do:
* run `rush add -p some-not-published-package` in any project
