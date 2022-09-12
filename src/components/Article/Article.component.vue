<!-- eslint-disable prettier/prettier -->
<script setup>
import { h, ref } from "vue";
import { tabButtons } from "@/constant"

const props = defineProps({ details: Object });
const activeTab = ref(1)

// JSX reusable tab button
const TabButton = ({ title, active }) => {
    const computeClass = active ? "text-opacity-100 bg-tab bg-opacity-20" : ""

    return h("button", {
        class: `transition-all text-tab text-opacity-50 py-[10px] px-[13px] rounded-md cursor-pointer ${computeClass}`,
        innerHTML: title,
        onClick: () => {}
    })
}

// JSX reusable field
const Field = ({ title, value, isLabel }) => {
    return h("div", {}, [
        h("label", {
            class: "text-xs font-semibold text-gray-500",
            innerHTML: title
        }),
        (!isLabel
            ? h("p", {
                class: "text-primary text-sm font-semibold",
                innerHTML: value
            })
            : h("span", {
                class: "mt-1 text-danger px-2 py-[1px] bg-danger w-max bg-opacity-10 rounded-full text-sm font-semibold block",
                innerHTML: value
            }))
    ]);
};

const handleActiveTab = (id) => {
    if (activeTab.value === id) return
    else activeTab.value = id
};
</script>

<template>
    <article class="relative rounded-md shadow-md bg-white bgop">
        <div class="border-b-[1px] p-6 text-black font-medium text-lg">
            Course Details
        </div>
        <div class="flex py-4 px-6 flex-col lg:flex-row">
            <section class="lg:mr-6 sm:mr-0 sm:mb-6">
                <img
                    class="w-full lg:w-[527px] lg:h-[320px] rounded-md"
                    :src="details.image"
                />
                <Field
                    class="my-6"
                    title="Created At"
                    :value="details.created_at"
                />
                <Field :isLabel="true" title="Status" :value="details.status" />
            </section>
            <section class="flex flex-col">
                <Field class="mb-6" title="Title" :value="details.title" />
                <Field
                    class="mb-6"
                    title="Category"
                    :value="details.category"
                />
                <Field
                    class="mb-6"
                    title="Competencies"
                    :value="details.competencies"
                />
                <Field class="mb-6" title="Caption" :value="details.caption" />
                <Field
                    class="mb-6"
                    title="Updated By"
                    :value="details.updated_by"
                />
                <Field
                    :isLabel="true"
                    title="Privacy"
                    :value="details.privacy"
                />
            </section>
        </div>
        <section class="px-6 mt-6 lg:mt-0">
            <div class="py-6 border-y-2 relative">
                <div
                    class="text-primary bg-white absolute -top-4 pr-4 font-semibold"
                >
                    Content
                </div>
                <div class="flex mb-6 flex-wrap">
                    <TabButton
                        class="flex-1 lg:flex-none whitespace-nowrap"
                        v-for="tab in tabButtons"
                        :key="tab.id"
                        @click="handleActiveTab(tab.id)"
                        :title="tab.title"
                        :active="activeTab === tab.id"
                    />
                </div>
                <p class="font-medium text-primary text-sm">
                    {{ details.desc }}
                </p>
            </div>
        </section>
        <section class="py-4 px-6 flex flex-row-reverse">
            <button
                class="bg-danger rounded-md text-white px-6 py-[10px] text-sm w-full sm:w-auto"
            >
                Publish Course
            </button>
        </section>
    </article>
</template>
