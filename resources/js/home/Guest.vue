<template>
    <v-main class="pt-0">
        <home />
        <about />
        <download />
        <pricing />
        <contact />
    </v-main>
</template>

<script>
import foote from "./components/Footer";
import home from "./components/HomeSection";
import about from "./components/AboutSection";
import download from "./components/DownloadSection";
import pricing from "./components/PricingSection";
import contact from "./components/ContactSection";
export default {
    components: {
        navigation,
        foote,
        home,
        about,
        download,
        pricing,
        contact,
    },
};
</script>

<style></style>
