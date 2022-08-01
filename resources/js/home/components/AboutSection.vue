<template>
    <section id="about">
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col cols="10">
                    <v-row align="center" justify="center">
                        <v-col cols="12" md="7">
                            <h1 class="font-weight-light display-2">Mas sobre nosotros</h1>
                            <h1 class="font-weight-light display-1 mb-3">
                                Itapua Medical
                            </h1>
                            <v-row>
                                <v-col cols="12" class="d-flex align-center">
                                    <v-img
                                        :src="
                                            require('../assets/img/icon1.svg')
                                        "
                                        max-width="60px"
                                        class="mr-4"
                                    />
                                    <p class="text-justify">
                                        informacion sobre
                                    </p>
                                </v-col>
                                <v-col cols="12" class="d-flex align-center">
                                    <v-img
                                        :src="
                                            require('../assets/img/icon2.svg')
                                        "
                                        max-width="60px"
                                        class="mr-4"
                                    />
                                    <p class="text-justify">
                                        informacion
                                    </p>
                                </v-col>
                                <v-col cols="12" class="d-flex align-center">
                                    <v-img
                                        :src="
                                            require('../assets/img/icon3.svg')
                                        "
                                        max-width="60px"
                                        class="mr-4"
                                    />
                                    <p class="text-justify">
                                        mas info
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
</style>
