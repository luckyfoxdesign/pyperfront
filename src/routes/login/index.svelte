<script context="module">
	const address = "https://bs.devcodebox.com"
	export async function load({ fetch }) {
		const fetchResult = await fetch(`${address}/api/auth/check-availability`, {
			method: "GET",
			credentials: "include",
		})
		if (fetchResult.ok) {
			return {
				status: 302,
				redirect: "/",
			}
		} else {
			return {}
		}
	}
</script>

<script>
	import { sessionData } from "./../../lib/store.js"
	// const ADDRESS = "https://bs.devcodebox.com/"
	const ADDRESS = "http://localhost:9000/"
	let password = "",
		email = ""
	$: msg = undefined

	import { session } from "$app/stores"
	import { goto } from "$app/navigation"

	async function handleLogin() {
		console.log($sessionData.data)
		await fetch(`${ADDRESS}api/auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			credentials: "include",
			body: JSON.stringify({ email, password }),
		})
			.then((responseResult) => {
				if (responseResult.status === 200) {
					return responseResult.json()
				} else {
					throw new Error("Something went wrong")
				}
			})
			.then((responseResultJSON) => {
				$sessionData.data = responseResultJSON.data
				$session.data = responseResultJSON.data
				goto("/dashboard")
			})
			.catch((getMyArticlesError) => {
				console.log(getMyArticlesError)
			})
	}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="content">
	<div class="header">
		<h1>Вход</h1>
	</div>
	<div class="login-form">
		<form on:submit|preventDefault={handleLogin} method="post">
			<div class="input-label">
				<label for="email-input">Почта</label>
				<input type="email" bind:value={email} />
			</div>
			<div class="input-label">
				<label for="email-input">Пароль</label>
				<input type="password" bind:value={password} />
			</div>
			<button class="create-article-button" type="submit">Войти</button>
		</form>
	</div>
</div>

{#if msg != undefined}
	<p>{msg}</p>
{/if}

<style>
	.header {
		padding-top: 32px;
	}
	.input-label {
		display: flex;
		flex-direction: column;
		padding-bottom: 12px;
	}
	.login-form {
		display: grid;
		grid-template-columns: 50% 50%;
		column-gap: 32px;
		padding-top: 24px;
	}
	.create-article-button {
		border-radius: 4px;
		border: none;
		height: 32px;
		background-color: var(--Green500);
		cursor: pointer;
		color: var(--WhiteFF);
		margin-top: 12px;
	}
	.create-article-button:hover {
		background-color: var(--Green600);
	}
	input {
		padding: 4px 8px 6px 8px;
		border: 1px solid var(--GrayCC);
		border-radius: 4px;
		margin-top: 4px;
	}
</style>
