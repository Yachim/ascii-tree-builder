<script lang="ts">
    import { setContext } from "svelte";
    import { writable } from "svelte/store";


	let lightTheme = false;
	$: setContext("lightTheme", lightTheme);
</script>

<input type="checkbox" checked={lightTheme}>
