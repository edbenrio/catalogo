<template>
    <div>
        <strong>Imagenes</strong>
        <upload-media server="/create_image"> </upload-media>
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
