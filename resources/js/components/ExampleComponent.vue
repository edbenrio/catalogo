<template>
  <v-app id="inspire">
    <v-app-bar
      app
      shrink-on-scroll
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
            <v-col
                class="d-flex align-end"
                cols="12"
                sm="8"
                md="8"
            >
                <v-file-input
                    v-model="filename"
                    accept="image/*"
                    label="Selccionar Imagen"
                    show-size
                    counter
                    clearable
                    @change="onFileChange"
                >
                </v-file-input>
            </v-col>
            <v-col
                class="d-flex align-end mb-5"
                cols="12"
                sm="4"
                md="4"
            >
                <v-sheet elevation="2" class="rounded">
                    <v-img
                        v-if="showImg"
                        v-bind:src="showImg"
                        height="150"
                        width="120"
                        class="rounded text-center align-end pa-1"
                        aspect-ratio="2"
                        contain
                    >
                        <v-tooltip bottom>
                            <template
                                v-slot:activator="{
                                    on,
                                    attrs
                                }"
                            >
                                <v-fab-transition>
                                    <v-btn
                                        x-small
                                        dark
                                        bottom
                                        color="red"
                                        v-on="on"
                                        v-bind="attrs"
                                        @click="resetImage"
                                        >Eliminar
                                    </v-btn>
                                </v-fab-transition>
                            </template>
                            <span>Eliminar Imagen</span>
                        </v-tooltip>
                    </v-img>
                </v-sheet>
            </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    methods:{
		onFileChange(payload) {
            const file = payload; //obtener datos de la variable
            if (file) {
                this.showImg = URL.createObjectURL(file); //guardar solo la ruta guardada
                URL.revokeObjectURL(file); // liberar memoria
                this.saveImage(file); //guardar imagen
            } else {
                this.setImage(null);
            }
        },
	}
  }
</script>