import { c as create_ssr_component, d as each, e as escape } from "../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{font-family:'Arial', sans-serif;background-color:#f8f8f8;color:#333;margin:auto;display:flex;justify-content:center;align-items:center;height:100vh;max-width:85ch}main.svelte-1jvb9f7{display:flex;justify-content:center;align-items:center;padding-left:5rem}main{max-width:800px;margin:2rem auto;padding:1rem;background-color:#fff;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);display:flex;justify-content:center;align-items:center;padding-left:1.5rem}h2.svelte-1jvb9f7{color:#3498db}ul.svelte-1jvb9f7{list-style:none;padding:0}li.svelte-1jvb9f7{margin-bottom:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main class="svelte-1jvb9f7"><ul class="svelte-1jvb9f7">${each(data.blog, (post) => {
    return `<li class="svelte-1jvb9f7"><h2 class="svelte-1jvb9f7">${escape(post.Title)}</h2> <p>Author: ${escape(post.Author)}</p> <p>${escape(post.Paragraph)}</p> <p>${escape(post.date_created)}</p> <p>${escape(post.test)}</p> </li>`;
  })}</ul> </main>`;
});
export {
  Page as default
};
