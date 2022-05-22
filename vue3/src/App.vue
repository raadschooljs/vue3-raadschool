<script setup>
import {onMounted} from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import { reactive } from '@vue/reactivity'
import Navbar from "@/components/Navbar.vue"
import { useMainStore } from "./stores/main"
import { HomeIcon, AnnotationIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon, PhotographIcon, PhoneIcon } from "@heroicons/vue/solid"
import { themeChange } from "theme-change"
const mainStore = useMainStore()
const data = reactive({
  sidebar: false
})
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
		<input id="toggleSidebar" type="checkbox" class="drawer-toggle" v-model="data.sidebar" />
		<div :class="['drawer-content', mainStore.sidebarExpanded ? 'mr-36' : 'mr-16']">
			<!-- Page content here -->
			<Navbar>
				<template #toggle>
					<label for="toggleSidebar" class="btn"></label>
				</template>
			</Navbar>
		
			<main class="container mx-auto p-4">
				<RouterView />
			</main>
			<footer></footer>
		</div>
		<div :class="['drawer-side transition-all relative', mainStore.sidebarExpanded ? 'w-36' : 'w-16']">
			<ul class="menu p-4 overflow-y-auto w-full bg-base-100 text-base-content bg-slate-700 text-slate-300 overflow-x-hidden">
				<!-- Sidebar content here -->
				<li>
					<RouterLink class="px-0 flex justify-center" to="" @click="mainStore.toggleSidebarExpanded()">
						<ChevronDoubleRightIcon v-if="mainStore.sidebarExpanded" class="w-5 h-5" />
						<ChevronDoubleLeftIcon v-else class="w-5 h-5" />
					</RouterLink>
				</li>
				<li>
					<RouterLink class="px-0 flex justify-center" to="/"><HomeIcon class="h-5 w-5" /><span v-if="mainStore.sidebarExpanded">Home</span></RouterLink>
				</li>
				<li>
					<RouterLink class="px-0 flex justify-center" to="/about"><AnnotationIcon class="h-5 w-5" /><span v-if="mainStore.sidebarExpanded">About</span></RouterLink>
				</li>
				<li>
					<RouterLink class="px-0 flex justify-center" to="/contact"><PhoneIcon class="h-5 w-5" /><span v-if="mainStore.sidebarExpanded">Contact</span></RouterLink>
				</li>
				<li>
					<RouterLink class="px-0 flex justify-center" to="/photos"><PhotographIcon class="h-5 w-5" /><span v-if="mainStore.sidebarExpanded">Photos</span></RouterLink>
				</li>
			</ul>
		</div>
	</div>
</template>

<style>

</style>
