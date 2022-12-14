<script lang="ts">
    import type { File, FileType } from "../types";
	import { 
		faFile,
		faFolder,
		faChevronDown,
		faChevronRight,
		faFolderOpen, 
		faFileCirclePlus,
		faFolderPlus,
        faXmark
	} from '@fortawesome/free-solid-svg-icons';
    import Fa from "svelte-fa/src/fa.svelte";
    import { onMount } from "svelte";


	export let name: string;
	export let type: FileType;
	export let children: File[] = [];
	export let remove: () => void;

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

	let el: HTMLElement;
	onMount(() => {
		el.focus();
	})
</script>

<span class="flex gap-2 justify-start items-center">
	{#if type === "folder"}
		<button
			title="Collapse this folder"
			class="transition-colors duration-200 ease-in-out hover:text-buttonHover"
			on:click={() => open = !open}
		>
			<Fa fw pull={"left"} icon={chevronIcon} />
		</button>
	{/if}

	<!-- TODO: fix pull -->
	<Fa fw pull={"right"} icon={icon} />

	<span 
		contenteditable="true" 
		bind:innerHTML={name} 
		bind:this={el}
	>

	</span>

	{#if type === "folder"}
		<button 
			title="Add a file as a child"
			class="transition-colors duration-200 ease-in-out hover:text-buttonHover"
			on:click={() => addFile("file", "new file")}
		>
			<Fa icon={faFileCirclePlus}/>
		</button>
		<button 
			title="Add a folder as a child"
			class="transition-colors duration-200 ease-in-out hover:text-buttonHover"
			on:click={() => addFile("folder", "new folder")}
		>
			<Fa icon={faFolderPlus} />
		</button>
	{/if}

	<button
		title="Remove this item"
		on:click={remove}
		class="transition-colors duration-200 ease-in-out hover:text-hoverRed"
	>
		<Fa	icon={faXmark} />
	</button>
</span>

{#if children.length > 0 && open}
	<div class="pl-10 flex gap-4 flex-col">
		{#each children as child, i}
			<svelte:self 
				{...child}		 		
			 	remove={() => {
					children = [
						...children.slice(0, i),
						...children.slice(i+1)
					]
		 		}}
				bind:name={child.name}
				bind:children={child.children}
			/>
		{/each}
	</div>
{/if}
