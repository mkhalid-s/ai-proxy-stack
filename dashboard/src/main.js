import "./styles.css";
import App from "./App.svelte";
import { mount } from "svelte";

export const dashboardBuild = "svelte-uplot";
export { App };

const target = document.querySelector("#svelte-overview");
if (target) mount(App, { target });
