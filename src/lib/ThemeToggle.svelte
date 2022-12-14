<script lang="ts">
	import { themeStore } from "../stores";

	const themes = [
		"red", 
		"orange", 
		"yellow", 
		"yellow-green", 
		"green", 
		"dark-green", 
		"green-blue", 
		"gray", 
		"dark-purple",
		"purple", 
		"pink-red"
	].map(theme => `${theme}-theme`)
</script>

<div class="flex flex-col gap-2 w-20">
	{#each themes as theme}
		<button 
			class="{theme} transition-colors
				   bg-panelBg w-full aspect-square rounded-full 
				   box-border border-2 border-themeBorderColor 
				   hover:ring-4 hover:ring-themeBorderColorHover
	 		"
			class:border-themeBorderColorSelected={theme === $themeStore}
			on:click={() => themeStore.set(theme)}
		></button>
	{/each}
</div>
