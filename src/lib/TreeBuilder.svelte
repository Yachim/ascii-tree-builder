<script lang="ts">
    import { faFileCirclePlus, faFolderPlus } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa/src/fa.svelte";

	import type { FileType, File as FileProps } from "../types";
    import File from "./File.svelte";
    import ThemeToggle from "./ThemeToggle.svelte";

	export let files: FileProps[] = [];

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

<div class="flex flex-col gap-4 w-full h-full bg-panelBg rounded-xl shadow-panelBg shadow-sm">
	<div class="flex gap-3 pt-4 px-4 pb-2 border-b-2 border-textColor">
		<button 
	 		title="Add a file"
			class="transition-colors duration-200 ease-in-out hover:text-buttonHover"
			on:click={() => addFile("file", "new file")}
		>
			<Fa icon={faFileCirclePlus}/>
		</button>
		<button 
			title="Add a folder"
			class="transition-colors duration-200 ease-in-out hover:text-buttonHover"
			on:click={() => addFile("folder", "new folder")}
		>
			<Fa icon={faFolderPlus} />
		</button>

		<ThemeToggle/>
	</div>

	<div class="flex flex-col gap-4 overflow-auto pb-4 px-4">
		{#each files as file, i}
			<File 
				{...file}
			 	remove={() => {
					files = [
						...files.slice(0, i),
						...files.slice(i+1)
					]
		 		}}
				bind:name={file.name}
				bind:children={file.children}
			/>
		{/each}
	</div>
</div>
