<script lang="ts">
    import { faFileCirclePlus, faFolderPlus } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa/src/fa.svelte";

	import type { FileType, File as FileProps } from "../types";
    import File from "./File.svelte";

	let files: FileProps[] = [];

	function addFile(type: FileType, name: string) {
		files = [
			...files,
			{
				name: name,
				type: type,
				children: []
			}
		];
	}
</script>

<div class="p-4 flex flex-col gap-4">
	<div>
		<button 
	 		title="Add a file"
			on:click={() => addFile("file", "new file")}
		>
			<Fa icon={faFileCirclePlus}/>
		</button>
		<button 
			title="Add a folder"
			on:click={() => addFile("folder", "new folder")}
		>
			<Fa icon={faFolderPlus} />
		</button>
	</div>

	<div class="flex flex-col gap-4">
		{#each files as file}
			<File 
				{...file}
				bind:name={file.name}
				bind:children={file.children}
			/>
		{/each}
	</div>
</div>
