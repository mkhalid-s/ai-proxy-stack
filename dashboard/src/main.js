// The component entry point is intentionally kept separate from the legacy
// dashboard during the migration. The first Svelte screen will mount here
// after API and visual parity are validated.
import "./styles.css";
import App from "./App.svelte";

export const dashboardBuild = "svelte-uplot";
export { App };
