import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};

// export default config;

// import adapter from '@sveltejs/adapter-netlify';

// export default {
//   kit: {
//     adapter: adapter()
//   }
// };