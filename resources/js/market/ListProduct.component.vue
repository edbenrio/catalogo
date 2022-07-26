<template>
    <div>
        <v-app>
            <template>
            <v-container>
                
                <v-row justify="space-around"> <!-- -->
                <v-card class="my-3" width="300" v-for="(product,i) in products " :key="i+'a'">
                    <v-img
                    height="300px"
                    src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                        >
                    
                    </v-img>
                    <v-card-title>
                        Producto nuevo para vender
                    </v-card-title>
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

export default {
    data: () => ({
        
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
    },
};
</script>
