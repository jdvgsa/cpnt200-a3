

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f89b2878.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.79a65843.js","_app/immutable/chunks/singletons.8649c68b.js"];
export const stylesheets = [];
export const fonts = [];
