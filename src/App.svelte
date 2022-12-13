<script lang="ts">
    import Output from "./lib/Output.svelte";
import TreeBuilder from "./lib/TreeBuilder.svelte";
    import type { File } from "./types";
	let files: File[] = [];
</script>

<div class="p-4 flex flex-row gap-32">
	<TreeBuilder bind:files={files} />
	<Output files={files} />
</div>
