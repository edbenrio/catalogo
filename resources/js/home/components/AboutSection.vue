<template>
    <section id="about">
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col cols="10">
                    <v-row align="center" justify="center">
                        <v-col cols="12" md="7">
                            <h1 class="font-weight-light display-2">Mas sobre nosotros</h1>
                            <h1 class="font-weight-light display-1 mb-3">
                                Itapúa Medical S.A
                            </h1>
                            <v-row>
                                <v-col cols="12" class="d-flex align-center subtittle">
                                    <p class="text-justify">
                                        Empresa fundada en el año 2013.
                                    </p>
                                </v-col>
                                <v-col cols="12" class="d-flex align-center size">
                                    <p class="text-justify">
                                        Nuestra principal actividad se centra en el campo de la sanidad y salud.
                                        Somos importadores, distribuidores de dispositivos médicos, materiales
                                        cortopunzantes y equipos de protección individual.
                                    </p>
                                </v-col>
                                <v-col cols="12" class="d-flex align-center size">
                                    <p class="text-justify">
                                        Taller de servicio de mantenimiento técnico. Especializados en equipos de 
                                        oxígeno medicinal, aspiraciones y apnea.
                                        Distribuidores y servicio técnico de plantas de oxígeno Medicinal (PSA) 
                                        de la firma  <b>SYSADVANCE</b>
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
