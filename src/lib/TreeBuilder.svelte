<script lang="ts">
	import type { FileType, File as FileProps } from "../types";
    import File from "./File.svelte";

	let files: FileProps[] = [];

	let inp: string;

	function addFile(type: FileType) {
		files = [
			...files,
			{
				name: inp,
				type: type
			}
		]
	}
</script>

<div>
	<input bind:value={inp} type="text" />
	<button on:click={() => addFile("file")}>Přidat soubor</button>
	<button on:click={() => addFile("folder")}>Přidat složku</button>
	<div>
		{#each files as file}
			<File name={file.name} type={file.type}/>
		{/each}
	</div>
</div>
