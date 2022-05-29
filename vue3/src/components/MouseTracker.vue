<script setup>
import { useMouse } from '../composable/useMouse';
const {x,y} = useMouse()
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>