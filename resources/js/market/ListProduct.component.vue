<template>
    <div>
        <v-app>
            <template>
            <v-container >
                <v-row> <!-- -->
                <v-card 
                    class="my-3 mx-3 col-md-3 col-sm-12" 
                    v-for="(product,i) in products " :key="i+'a'"
                    @click="verProducto(product.id)"
                >
                    <v-img
                    height="300px"
                    :src="product.image.length > 0 ? product.image[0].img_url : image"
                        >
                    
                    </v-img>
                    <v-card-title>
                        {{product.nombre}}
                    </v-card-title>
                    <v-card-subtitle>
                        <span v-if="product.venta">Disponible para venta</span>
                        <br>
                        <span v-if="product.alquiler">Disponible para alquiler </span>
                    </v-card-subtitle>
                    <v-card-subtitle v-if="product.precio"  class="text-h5 mb-1">
                        Gs. {{product.precio}}
                    </v-card-subtitle>
                    
                    <v-card-text>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                        depressed
                        color="success"
                        block
                        >
                            Ver producto
                        </v-btn>
                    </v-card-actions>

                </v-card>
                </v-row>
            </v-container>
        </template>
        </v-app>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import imageUrl from "../../assets/no-foto.png";

export default {
    data: () => ({
        image: imageUrl,
    }),
    components: {
       
    },
    mounted() {
        this.getProducts();
    },
    computed: {
       
       ...mapState("product",["products"]),
    },
    methods: {
        ...mapActions("product",["getProducts"]),
        verProducto(id){
            alert(id);
        }
    },
};
</script>
