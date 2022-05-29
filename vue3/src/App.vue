<script setup>
import {useMouse} from '@vueuse/core'
import {onMounted} from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue';
import { reactive } from '@vue/reactivity'
import Navbar from "@/components/Navbar.vue"
import { useMainStore } from "./stores/main"

import { themeChange } from "theme-change"
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const mainStore = useMainStore()
const data = reactive({
  sidebar: false
})
const {x,y} = useMouse()
onMounted(() => {
  themeChange(false)
})
function toggleSidebar() {
  console.log("toggleSidebar")
  console.log(mainStore.sidebarExpanded)
}
</script>

<template>
	<div class="drawer">
		<!-- <input id="toggleSidebar" type="checkbox" class="drawer-toggle" v-model="data.sidebar" /> -->
		<div :class="['drawer-content', mainStore.sidebarExpanded ? 'mr-36' : 'mr-16']">
			<!-- Page content here -->
			<Navbar>
				<template #toggle>
					<label for="toggleSidebar" class="btn"></label>
				</template>
			</Navbar>
		
			<main class="container mx-auto p-4">
				<button class="btn" @click="toggleDark()">dark</button>
				<br>
				x is {{x}} and y is {{y}}
				<RouterView />
			</main>
			<footer></footer>
		</div>
		<div :class="['drawer-side transition-all relative', mainStore.sidebarExpanded ? 'w-36' : 'w-16']">
			<Sidebar />
		</div>
	</div>
</template>

<style>
.drawer-side {
	grid-column-start: 1;
    grid-row-start: 1;
    display: grid;
    max-height: 100vh;
}
.drawer-content {
	z-index: 0;
    grid-column-start: 1;
    grid-row-start: 1;
    overflow-y: auto;
    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
