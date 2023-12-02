import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.9804a1b6.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.79a65843.js"];
export const stylesheets = ["_app/immutable/assets/2.824e06ce.css"];
export const fonts = [];
