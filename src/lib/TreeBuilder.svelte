<script lang="ts">
    import { faFileCirclePlus, faFolderPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa/src/fa.svelte";

	import type { FileType, File as FileProps } from "../types";
    import File from "./File.svelte";

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

	export let clearFunc: () => void;
</script>

<div class="flex flex-col gap-4 w-full h-full bg-panelBg rounded-xl shadow-panelBg shadow-sm overflow-hidden">
	<div class="flex justify-between p-4 border-b-2 border-textColor">
		<div class="flex gap-3">
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
		</div>

			<button 
				title="Clear all"
				class="transition-colors duration-200 ease-in-out hover:text-removeHover"
				on:click={clearFunc}
			>
				<Fa icon={faXmark} />
			</button>
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
		 		index={i}
				swap={swapWith => {
			 		[files[i], files[swapWith]] = [files[swapWith], files[i]];
		 			files = [...files]
				}}
		 		last={i === files.length - 1}
				bind:name={file.name}
				bind:children={file.children}
			/>
		{/each}
	</div>
</div>
