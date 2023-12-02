export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".env","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.c8f2dcd6.js","app":"_app/immutable/entry/app.d75e59cf.js","imports":["_app/immutable/entry/start.c8f2dcd6.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.69a24cc5.js","_app/immutable/entry/app.d75e59cf.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.79a65843.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
