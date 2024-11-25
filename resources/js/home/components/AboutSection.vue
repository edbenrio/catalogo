<template>
    <section id="about">
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col cols="10">
                    <v-row align="center" justify="center">
                        <v-col cols="12" md="7">
                            <h1 class="font-weight-light display-2">Mas sobre nosotros</h1>
                            <h1 class="font-weight-light display-1 mb-3">
                                Lorem, ipsum dolor.
                            </h1>
                            <v-row>
                                <v-col cols="12" class="d-flex align-center subtittle">
                                    <p class="text-justify">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                </v-col>
                                <v-col cols="12" class="d-flex align-center size">
                                    <p class="text-justify">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos modi in dolores sapiente nemo similique minus totam deserunt facilis.
                                    </p>
                                </v-col>
                                <v-col cols="12" class="d-flex align-center size">
                                    <p class="text-justify">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, soluta corrupti neque doloribus saepe eaque quo facilis architecto facere! Minima atque amet, repellat, architecto dignissimos dolore aut eveniet ea iure distinctio saepe! Error, laborum provident?
                                    </p>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" md="5" class="d-none d-md-flex">
                            <v-img
                                :src="require('../assets/img/oxigeno.jpg')"
                                class="d-block ml-auto mr-auto"
                                max-width="400px"
                            />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<style scoped>
#about {
    background-color: #ffffff;
}
.subtittle {
    font-size: 20px;
}
.size {
    font-size: 15px;
}
</style>
