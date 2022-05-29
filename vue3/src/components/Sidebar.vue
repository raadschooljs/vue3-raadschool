<template>
    <ul class="menu p-4 overflow-y-auto w-full bg-base-100 text-base-content bg-slate-700 text-slate-300 overflow-x-hidden">
        <!-- Sidebar content here -->
        <li>
            <button class="px-0 flex justify-center"  @click="mainStore.toggleSidebarExpanded()">
                <ChevronDoubleRightIcon v-if="mainStore.sidebarExpanded" class="w-5 h-5" />
                <ChevronDoubleLeftIcon v-else class="w-5 h-5" />
            </button>
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
        <li>
            <RouterLink class="px-0 flex justify-center" to="/mouse-view"><TrendingUpIcon class="h-5 w-5" /><span v-if="mainStore.sidebarExpanded">Mouse Vsiew</span></RouterLink>
        </li>
    </ul>
</template>

<script setup>
import { HomeIcon, AnnotationIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon, PhotographIcon, PhoneIcon,TrendingUpIcon } from "@heroicons/vue/solid"
import { useMainStore } from "../stores/main"
const mainStore = useMainStore()
</script>

<style>

</style>