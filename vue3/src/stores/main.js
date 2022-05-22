import { defineStore } from "pinia"

export const useMainStore = defineStore({
	id: "counter",
	state: () => ({
		sidebarExpanded: false
	}),
	getters: {},
	actions: {
		toggleSidebarExpanded() {
			this.sidebarExpanded = !this.sidebarExpanded
		}
	}
})