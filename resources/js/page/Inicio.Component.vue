<template>
    <div>
        Hola inicios

        <upload-media server="/api/upload"> </upload-media>
    </div>
</template>

<script>
import { UploadMedia, UpdateMedia } from "vue-media-upload";

export default {
    components: {
        UploadMedia,
        UpdateMedia,
    },
};
</script>

<style></style>
