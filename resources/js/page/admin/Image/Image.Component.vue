<template>
    <div>
        <strong>Imagenes</strong>
        <upload-media server="/image" ref="getImages"> </upload-media>
        <v-btn @click="llamar">subir</v-btn>
    </div>
</template>

<script>
import { UploadMedia, UpdateMedia } from "vue-media-upload";

export default {
    components: {
        UploadMedia,
        UpdateMedia,
    },
    data: () => ({

    }),
    methods:{
        llamar(){
            console.log(this.$refs.getImages.media);
        }
    }
};
</script>

<style></style>
