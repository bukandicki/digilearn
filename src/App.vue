<script setup>
import { breadcrumbLinks } from "@/constant";

import Sidebar from "@/components/Sidebar/Sidebar.component.vue";
import Navbar from "@/components/Navbar/Navbar.component.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.component.vue";

import Person from "@/assets/images/person.png";
</script>

<template>
    <main class="flex">
        <Sidebar />
        <div class="w-full p-6">
            <Navbar
                :avatar="Person"
                name="Jhon Doe"
                role="Admin"
                :notification-length="4"
            />
            <Breadcrumb class="my-6" title="Course" :links="breadcrumbLinks" />
        </div>
    </main>
</template>
