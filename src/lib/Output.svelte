<script lang="ts">
    import type { File } from "../types";


	export let files: File[];

	function filesToText(files: File[], depth: number) {
		const names = files.map((file, i) => {
			let name = file.name;

			if (file.type === "folder") name += "/";

			const symbol = i === files.length - 1 ? "└──" : "├──"; 
			if (depth > 0) name = `${"│\xa0\xa0\xa0".repeat(depth - 1)}${symbol}${name}`;
			if (file.children.length === 0) return name;
			
			const children = filesToText(file.children, depth + 1)
			return `${name}\n${children}`;
		});
		return names.join("\n");
	}

	let text: string;
	$: text = filesToText(files, 0);
</script>

<p class="p-4 w-full h-full bg-panelBg shadow-sm shadow-panelBg rounded-xl overflow-auto">
	{text}	
</p>

<style>
	p {
		font-family: monospace;
		white-space: pre-line;
	}
</style>
