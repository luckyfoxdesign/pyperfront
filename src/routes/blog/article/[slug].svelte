<script context="module">
	import { goto } from "$app/navigation"
	import { onMount } from "svelte"
	export async function load({ page }) {
		let queryArticleTitle = page.params.slug.slice(0, -25)
		// console.log(queryArticleTitle)
		let queryArticleId = page.params.slug.substring(page.params.slug.length - 24)
		// console.log(page.params.slug)
		// console.log(queryArticleId)
		return {
			props: {
				queryArticleTitle: queryArticleTitle,
				queryArticleId: queryArticleId,
			},
		}
	}
</script>

<script>
	import ArticleSkeleton from "../_components/ArticleSkeleton.svelte"

	export let queryArticleTitle, queryArticleId
	let isArticleLoaded = false
	let articleContent = null
	// console.log(`index page sid=${sid} and data=${data}`)

	onMount(async () => {
		console.log(queryArticleTitle)
		console.log(queryArticleId)
		const address = "https://bs.devcodebox.com"
		await fetch(encodeURI(`${address}/article/${queryArticleTitle}-${queryArticleId}`), {
			method: "GET",
			headers: {
				"Content-Type": "text/plain;charset=utf-8",
				Accept: "application/json",
			},
		})
			.then((responseResult) => {
				if (responseResult.status === 200) {
					return responseResult.json()
				} else {
					goto("/")
					throw new Error("Something went wrong")
				}
			})
			.then((responseResultJSON) => {
				isArticleLoaded = true
				articleContent = responseResultJSON.result
				// console.log(articleContent)
			})
			.catch((getArticleError) => {
				console.error(getArticleError)
			})
	})
</script>

<svelte:head>
	<title>{queryArticleTitle}</title>
</svelte:head>

<article style="padding-top: 32px;">
	{#if isArticleLoaded && articleContent != null}
		<div class="article-container">
			<h1 class="article-title" class:is-bottom-element-empty={articleContent.subtitle === ""}>
				{@html articleContent.title}
			</h1>
			{#if articleContent.subtitle != ""}
				<p class="article-subtitle">{@html articleContent.subtitle}</p>
			{/if}
			<section class="article-content">
				{#each articleContent.content as contentElement}
					{#if contentElement.type === "p"}
						<p class="article-paragraph">{@html contentElement.text}</p>
					{/if}
					{#if contentElement.type === "h2"}
						<h2 class="article-stitle">{@html contentElement.text}</h2>
					{/if}
					{#if contentElement.type === "figure"}
						<figure class="image">
							<div class="image-container">
								<img class="article-image" src={contentElement.src} alt={contentElement.alt} />
							</div>
							{#if contentElement.caption != ""}
								<figcaption class="image-caption">{@html contentElement.caption}</figcaption>
							{/if}
						</figure>
					{/if}
				{/each}
			</section>
		</div>
	{:else}
		<ArticleSkeleton />
	{/if}
</article>

<style>
	article {
		font-family: Charter, Bitstream Charter, serif;
		/* padding-top: 48px; */
		padding-bottom: 96px;
	}
	.article-title {
		font-size: 3.429em;
	}
	.article-subtitle {
		font-size: 1.5em;
		margin-bottom: 32px;
		color: var(--Gray75);
	}
	.article-paragraph {
		font-size: 1.5em;
	}
	.image-container {
		position: relative;
		overflow: hidden;
		text-align: center;
		position: relative;
		white-space: pre-wrap;
		word-wrap: break-word;
	}
	.is-bottom-element-empty {
		padding-bottom: 32px;
	}
	.article-image {
		max-width: 100%;
		vertical-align: top;
		white-space: pre-wrap;
		cursor: text;
		text-align: center;
		word-wrap: break-word;
		max-height: 600px;
	}
	.article-stitle {
		outline: 0;
		font-size: 2em;
		padding-top: 24px;
		padding-bottom: 8px;
	}
	.image {
		margin-top: 32px;
		margin-bottom: 32px;
	}
	.image-caption {
		outline: 0;
		text-align: center;
		padding-top: 8px;
		cursor: text;
		color: var(--Gray75);
	}
</style>
