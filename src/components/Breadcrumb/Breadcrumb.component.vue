<script setup>
import HomeIcon from "@/assets/icons/Home.vue";
import ArrowIcon from "@/assets/icons/Arrow.vue";

const props = defineProps({ title: String, links: Array });
</script>

<template>
    <div class="flex items-center">
        <h1 class="text-2xl text-black font-medium mr-4">
            {{ title }}
        </h1>
        <div class="flex items-center h-[26px] border-l-2 pl-4">
            <HomeIcon class="w-[14px] fill-danger" />
            <span
                class="inline-flex ml-[10px] text-primary text-sm"
                v-for="link in links"
                :key="link.id"
            >
                <ArrowIcon class="w-[14px] mr-[10px] fill-primary" />
                {{ link.title }}
            </span>
        </div>
    </div>
</template>
