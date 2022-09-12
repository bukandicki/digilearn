<script setup>
import SearchIcon from "@/assets/icons/Search.vue";
import BellIcon from "@/assets/icons/Bell.vue";
import Person from "@/assets/images/person.png";
</script>

<template>
    <header>
        <nav class="flex justify-between py-4 px-6 rounded-md shadow-md">
            <SearchIcon class="w-6" />
            <div class="flex">
                <div class="flex relative w-[20px] mr-6">
                    <BellIcon class="w-[20px]" />
                    <span
                        class="bg-danger w-[18px] h-[18px] rounded-full absolute top-0 -right-1 flex items-center justify-center text-xs text-white"
                    >
                        4
                    </span>
                </div>
                <div class="flex">
                    <div class="text-right mr-4">
                        <p class="text-sm text-black">John Doe</p>
                        <p class="text-xs text-primary">Admin</p>
                    </div>
                    <figure
                        class="rounded-full bg-[#7367F0] bg-opacity-50 w-[38px] h-[38px] relative"
                    >
                        <img
                            :src="Person"
                            alt=""
                            class="rounded-full w-[38px] h-[38px]"
                        />
                        <span
                            class="w-[10px] h-[10px] rounded-full block bg-green-500 absolute right-0 bottom-0 border-2 border-white"
                        />
                    </figure>
                </div>
            </div>
        </nav>
    </header>
</template>
