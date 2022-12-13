<script lang="ts">
    import type { FileType } from "../types";
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faFile, faFolder } from '@fortawesome/free-solid-svg-icons';


	export let name: string;
	export let type: FileType;

	let icon: any;
	if (type === "file") {
		icon = faFile;
	}
	else if (type === "folder") {
		icon = faFolder;
	}
</script>

<div>
	<Fa icon={icon}/>
	<span>{name}</span>
</div>
