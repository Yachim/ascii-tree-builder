<script lang="ts">
    import Output from "./lib/Output.svelte";
	import TreeBuilder from "./lib/TreeBuilder.svelte";
	
	import type { File } from "./types";
	
	let files: File[] = [];
	
	import { themeStore } from "./stores";
    import ThemeToggle from "./lib/ThemeToggle.svelte";

	function resetFiles() {
		files = [];
	}
</script>

<div class="{$themeStore} font-sans bg-siteBg w-screen h-screen text-textColor grid place-items-center">
	<div class="overflow-hidden p-4 flex flex-row gap-4 justify-between bg-bg h-4/6 w-8/12 rounded-xl shadow-2xl shadow-bg">
		<ThemeToggle/>
		<TreeBuilder clearFunc={resetFiles} bind:files={files} />
		<Output files={files} />
	</div>
</div>
