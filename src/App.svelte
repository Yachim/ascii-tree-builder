<script lang="ts">
    import Output from "./lib/Output.svelte";
	import TreeBuilder from "./lib/TreeBuilder.svelte";
	
	import type { File } from "./types";
	
	let files: File[] = [];
	
	import { themeStore } from "./stores";

	function resetFiles() {
		files = [];
	}
</script>

<div class="{$themeStore} font-sans bg-siteBg w-screen h-screen text-textColor grid place-items-center">
	<div
		class="
			overflow-hidden p-4 flex gap-4 bg-bg rounded-xl shadow-2xl shadow-bg
			w-11/12 sm:w-10/12 lg:w-9/12 2xl:w-8/12
			h-5/6 md:h-4/6
			flex-col lg:flex-row
		"
	>
		<!--<ThemeToggle/>-->

		<TreeBuilder clearFunc={resetFiles} bind:files={files} />
		<Output files={files} />
	</div>
</div>
