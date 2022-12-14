<script setup>
import { computed, ref } from "vue";
import { sidebarLinks } from "@/constant";
import Logo from "@/assets/icons/Logo.vue";
import CircleIcon from "@/assets/icons/Circle.vue";
import ArrowIcon from "@/assets/icons/Arrow.vue";

import "./Sidebar.modules.scss";

const props = defineProps({ show: Boolean });
const emits = defineEmits(["onClose"]);

const showMenu = ref(1);

const handleShowMenu = (id) => {
    if (showMenu.value === id) showMenu.value = null;
    else showMenu.value = id;
};

const handleClickOutside = () => {
    emits("onClose");
};
</script>

<template>
    <aside
        class="transition-all bg-primary bg-opacity-30 backdrop-blur-sm w-full fixed z-10 sm:relative sm:w-max sm:visible left-0 top-0"
        :class="props.show ? 'visible' : 'invisible'"
    >
        <div
            class="sidebar relative transition-all px-4 py-6 bg-white min-h-screen overflow-y-auto sm:min-h-full sm:left-0"
            :class="props.show ? 'left-0' : '-left-full'"
            v-click-outside="handleClickOutside"
        >
            <Logo class="sidebar__logo mb-6" />
            <span
                class="text-xs text-primary font-semibold mb-1 text-opacity-60"
            >
                CLONE MANAGEMENT
            </span>
            <div class="sidebar__container">
                <div
                    class="sidebar__link-wrapper mb-1"
                    v-for="link in sidebarLinks"
                    :key="link.id"
                >
                    <span
                        class="sidebar__link-title text-base transition-all font-medium flex items-center px-4 py-2 cursor-pointer rounded-md"
                        :class="
                            showMenu === link.id
                                ? 'bg-primary bg-opacity-30 text-primary'
                                : 'text-black'
                        "
                        @click="handleShowMenu(link.id)"
                    >
                        <component
                            class="w-5 h-5 mr-3"
                            :class="
                                showMenu === link.id
                                    ? 'fill-primary'
                                    : 'fill-black'
                            "
                            :is="link.icon"
                        />
                        {{ link.title }}
                        <ArrowIcon
                            class="w-5 h-5 ml-auto"
                            :class="
                                showMenu === link.id
                                    ? 'fill-primary'
                                    : 'fill-black'
                            "
                        />
                    </span>
                    <ul
                        class="sidebar__links"
                        :class="{
                            'sidebar__links--show': showMenu === link.id
                        }"
                    >
                        <li
                            class="text-primary transition-all text-base font-medium px-6 py-2 my-1 flex cursor-pointer rounded-md group hover:bg-danger hover:text-white hover:shadow-danger hover:shadow-md"
                            v-for="menu in link.menus"
                            :key="menu.id"
                        >
                            <CircleIcon
                                class="w-4 mr-4 fill-black group-hover:fill-white"
                            />
                            {{ menu.title }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </aside>
</template>
