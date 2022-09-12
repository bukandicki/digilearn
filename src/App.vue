<script setup>
import Sidebar from "@/components/Sidebar/Sidebar.component.vue";
import Navbar from "@/components/Navbar/Navbar.component.vue";
</script>

<template>
    <main class="flex">
        <Sidebar />
        <div class="w-full p-6">
            <Navbar class="mb-6" />
        </div>
    </main>
</template>
