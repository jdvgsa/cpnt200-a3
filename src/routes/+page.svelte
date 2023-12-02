<script>
	export let data;
</script>

<h1>My First Blog</h1>

<main>
 <ul>
  {#each data.blog as post (post.id)}
    <li>
      <h2>{post.Title}</h2>
      <p>Author: {post.Author}</p>           
      <p>{post.Paragraph}</p>
			<p>{post.date_created}</p>
			<p>{post.test}</p>
      
    </li>
  {/each}
</ul>
</main>

<style>
	:global(body) {
		font-family: 'Arial', sans-serif;
      background-color: #f8f8f8;
      color: #333;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
			max-width: 85ch;
	}

	main {
		display: flex;
      justify-content: center;
      align-items: center;
	}
	
	:global(main) {
		max-width: 800px;
      margin: 2rem auto;
      padding: 1rem;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
			display: flex;
      justify-content: center;
      align-items: center;
			padding-left: 1.5rem;
	}

	h2 {
		color: #3498db;
	}



	ul {
		list-style: none;
		padding: 0;
	}

	li {
		margin-bottom: 2rem;
	}
</style>