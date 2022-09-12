<script setup>
import { ref } from "vue";
import { breadcrumbLinks, sampleDetails } from "@/constant";

import Sidebar from "@/components/Sidebar/Sidebar.component.vue";
import Navbar from "@/components/Navbar/Navbar.component.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.component.vue";
import Article from "@/components/Article/Article.component.vue";

import Person from "@/assets/images/person.png";

const showSidebar = ref(false);

const handleOnClose = () => {
    showSidebar.value = false;
};

const handleOnShow = () => {
    showSidebar.value = true;
};
</script>

<template>
    <main class="flex">
        <Sidebar :show="showSidebar" @onClose="handleOnClose" />
        <div class="w-full p-6">
            <Navbar
                :avatar="Person"
                name="Jhon Doe"
                role="Admin"
                :notification-length="4"
                @onShowSidebar="handleOnShow"
            />
            <Breadcrumb class="my-6" title="Course" :links="breadcrumbLinks" />
            <Article :details="sampleDetails" />
        </div>
    </main>
</template>
