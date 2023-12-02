import { supabase } from "$lib/supabaseClient";

  export async function load() {
    const { data } = await supabase.from("blog").select();
    return {
      props: {
        data,
      },
      blog: data ?? [],
    };
  }


// export async function load() {
//   const { data } = await fetchBlogData(); // Replace with your actual fetch function
//   return {
//     props: {
//       data,
//     },
//   };
// }



