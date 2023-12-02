## Submission Req

- Course Title [CPNT 200 Headless Content Management Systems]
- Assignment 3 - Content Management Configuration
- Code by: John Dagsa
- GitHub Repo Link: https://github.com/jdvgsa/cpnt200-a3

# Submission Instructions

Deploy with Netlify.

I followed all the steps in this [link](https://docs.netlify.com/integrations/frameworks/sveltekit/) as posted from the [sait-wbdv](https://sait-wbdv-f23.netlify.app/courses/cpnt-200/assessments/activity-3) but I am stil unable to deploy.

Here are my steps.

- npm install -D @sveltejs/adapter-netlify@next

- import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};

export default config;

- create a netlify.toml
[build]
  command = "npm run build"
  publish = "build"

- [create new project](https://docs.netlify.com/welcome/add-new-site/)

Full Error Log:

- 9:17:59 AM: Netlify Build                                                 
- 9:17:59 AM: ────────────────────────────────────────────────────────────────
- 9:17:59 AM: ​
- 9:17:59 AM: ❯ Version
- 9:17:59 AM:   @netlify/build 29.29.4
- 9:17:59 AM: ​
- 9:17:59 AM: ❯ Flags
- 9:17:59 AM:   baseRelDir: true
- 9:17:59 AM:   buildId: 656b58a71d7bce5c5a4baf92
- 9:17:59 AM:   deployId: 656b58a71d7bce5c5a4baf94
- 9:17:59 AM: ​
- 9:17:59 AM: ❯ Current directory
- 9:17:59 AM:   /opt/build/repo
- 9:17:59 AM: ​
- 9:17:59 AM: ❯ Config file
- 9:17:59 AM:   /opt/build/repo/netlify.toml
- 9:17:59 AM: ​
- 9:17:59 AM: ❯ Context
- 9:17:59 AM:   production
- 9:17:59 AM: ​
- 9:17:59 AM: build.command from netlify.toml                               
- 9:17:59 AM: ────────────────────────────────────────────────────────────────
- 9:17:59 AM: ​
- 9:17:59 AM: $ npm run build
- 9:17:59 AM: > cpnt200-a3@0.0.1 build
- 9:17:59 AM: > vite build
- 9:18:00 AM: vite v4.5.0 building SSR bundle for production...
- 9:18:00 AM: transforming...
- 9:18:00 AM: ✓ 76 modules transformed.
- 9:18:00 AM: ✓ built in 409ms
- 9:18:00 AM: "SECRET_SUPABASE_URL" is not exported by "virtual:$env/static/private", imported by "src/lib/supabaseClient.js".
- 9:18:00 AM: file: /opt/build/repo/src/lib/supabaseClient.js:2:9
- 9:18:00 AM: 1: import { createClient } from "@supabase/supabase-js"
- 9:18:00 AM: 2: import { SECRET_SUPABASE_URL, SECRET_SUPABASE_KEY } from "$env/static/private";
- 9:18:00 AM:             ^
- 9:18:00 AM: 3: export const supabase = createClient(SECRET_SUPABASE_URL, SECRET_SUPABASE_KEY);
- 9:18:00 AM: error during build:
- 9:18:00 AM: RollupError: "SECRET_SUPABASE_URL" is not exported by "virtual:$env/static/private", imported by "src/lib/supabaseClient.js".
- 9:18:00 AM:     at error (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:2287:30)
- 9:18:00 AM:     at Module.error (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:13745:16)
- 9:18:00 AM:     at Module.traceVariable (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:14175:29)
- 9:18:00 AM:     at ModuleScope.findVariable (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:12615:39)
- 9:18:00 AM:     at Identifier.bind (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:8319:40)
- 9:18:00 AM:     at CallExpression.bind (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:5888:28)
- 9:18:00 AM:     at CallExpression.bind (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:9890:15)
- 9:18:00 AM:     at VariableDeclarator.bind (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:5892:23)
- 9:18:00 AM:     at VariableDeclaration.bind (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:5888:28)
- 9:18:00 AM:     at ExportNamedDeclaration.bind (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:10673:27)
- 9:18:00 AM: ​
- 9:18:00 AM: "build.command" failed                                        
- 9:18:00 AM: ────────────────────────────────────────────────────────────────
- 9:18:00 AM: ​
- 9:18:00 AM:   Error message
- 9:18:00 AM:   Command failed with exit code 1: npm run build (https://ntl.fyi/exit-code-1)
- 9:18:00 AM: ​
- 9:18:00 AM:   Error location
- 9:18:00 AM:   In build.command from netlify.toml:
- 9:18:00 AM:   npm run build
- 9:18:00 AM: ​
- 9:18:00 AM:   Resolved config
- 9:18:00 AM:   build:
- 9:18:00 AM:     command: npm run build
- 9:18:00 AM:     commandOrigin: config
- 9:18:00 AM:     publish: /opt/build/repo/build
- 9:18:00 AM:     publishOrigin: config
- 9:18:01 AM: Failed during stage "building site": Build script returned non-zero exit code: 2
- 9:18:01 AM: Build failed due to a user error: Build script returned non-zero exit code: 2
- 9:18:01 AM: Failing build: Failed to build site
- 9:18:01 AM: Finished processing build request in 16.306s