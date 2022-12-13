<script lang="ts">
    import type { File, FileType } from "../types";
	import Fa from 'svelte-fa/src/fa.svelte';
	import { 
		faFile,
		faFolder,
		faChevronDown,
		faChevronRight,
		faFolderOpen, 
		faFileCirclePlus,
		faFolderPlus
	} from '@fortawesome/free-solid-svg-icons';


	export let name: string;
	export let type: FileType;
	export let children: File[] = [];

	let open = true;

	let icon: any;
	$: if (type === "folder") {
		if (open) {
			icon = faFolderOpen;
		}
		else {
			icon = faFolder;
		}
	}
	else {
		icon = faFile;
	}

	let chevronIcon: any;
	$: chevronIcon = open ? faChevronDown : faChevronRight;

	function addFile(type: FileType, name: string) {
		children = [
			...children,
			{
				name: name,
				type: type,
				children: []
			}
		];
	} 
</script>

<div>
	{#if type === "folder"}
		<button	on:click={() => open = !open}>
			<Fa icon={chevronIcon} />
		</button>
	{/if}

	<Fa icon={icon} />
	<span 
		contenteditable="true" 
		bind:innerHTML={name} 
	></span>

	{#if type === "folder"}
		<button 
			on:click={() => addFile("file", "new file")}
		>
			<Fa icon={faFileCirclePlus}/>
		</button>
		<button 
			on:click={() => addFile("folder", "new folder")}
		>
			<Fa icon={faFolderPlus} />
		</button>
	{/if}

	{#if children && open}
		<div class="p-4">
			{#each children as child}
				<svelte:self 
					{...child}		 		
					bind:name={child.name}
					bind:children={child.children}
				/>
			{/each}
		</div>
	{/if}
</div>
