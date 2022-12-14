<script lang="ts">
    import { getContext } from "svelte";

    import Output from "./lib/Output.svelte";
	import TreeBuilder from "./lib/TreeBuilder.svelte";
	
	import type { File } from "./types";
	
	let files: File[] = [];
	
	import { themeStore } from "./stores";
</script>

<div class="{$themeStore} bg-siteBg w-screen h-screen text-textColor py-32 px-64">
	<div class="p-4 flex flex-row gap-4 justify-between bg-bg h-full w-full rounded-xl shadow-2xl shadow-bg">
		<TreeBuilder bind:files={files} />
		<Output files={files} />
	</div>
</div>
