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
	].map(theme => `${theme}-theme`);
</script>

<div class="flex flex-col gap-2 w-20">
	{#each themes as theme}
		<button 
			class="{theme} bg-panelBg w-full aspect-square rounded-full box-border border border-bg hover:ring-2 hover:ring-bg"
			on:click={() => themeStore.set(theme)}
		></button>
	{/each}
</div>
