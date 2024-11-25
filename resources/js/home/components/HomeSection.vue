<template>
    <section id="hero">
        <v-parallax
            dark
            src="/images/fondo.jpg"
            height="750"
        >
            <v-row align="center" justify="center">
                <v-col cols="10">
                    <v-row align="center" justify="center">
                        <h1 class=" text-black mb-4 ">
                            Lorem, ipsum.
                        </h1>
                        <h1 class="text-black">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto, ad explicabo itaque rerum sunt ipsum ipsam. Ex, dolore magni.
                        </h1>
                    </v-row>
                </v-col>
            </v-row>
            <div class="svg-border-waves text-white">
                <v-img :src="require('../assets/img/borderWaves.svg')" />
            </div>
        </v-parallax>
        
        <v-dialog v-model="dialog" max-width="640px">
            <v-card>
                <youtube
                    :video-id="videoId"
                    @ready="ready"
                    @playing="playing"
                ></youtube>
            </v-card>
        </v-dialog>
        <div class="svg-border-waves">
            <img src="../assets/img/wave2.svg" />
        </div>
    </section>
</template>

<style>
.sombra {
  text-shadow: 2px 2px #414040;
}</style>
<script>
export default {
    data() {
        return {
            dialog: false,
            videoId: "i8IvvHJssWE",
        };
    },
    watch: {
        dialog(value) {
            if (!value) {
                this.pause();
            }
        },
    },
    methods: {
        ready(event) {
            this.player = event.target;
        },
        playing(event) {
            // The player is playing a video.
        },
        change() {
            // when you change the value, the player will also change.
            // If you would like to change `playerVars`, please change it before you change `videoId`.
            // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
            // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
            this.videoId = "another video id";
        },
        stop() {
            this.player.stopVideo();
        },
        pause() {
            this.player.pauseVideo();
        },
    },
};
</script>

<style lang="scss">
.circle {
    stroke: white;
    stroke-dasharray: 650;
    stroke-dashoffset: 650;
    -webkit-transition: all 0.5s ease-in-out;
    opacity: 0.3;
}

.playBut {
    /*  border: 1px solid red;*/
    display: inline-block;
    -webkit-transition: all 0.5s ease;

    .triangle {
        -webkit-transition: all 0.7s ease-in-out;
        stroke-dasharray: 240;
        stroke-dashoffset: 480;
        stroke: white;
        transform: translateY(0);
    }

    &:hover {
        .triangle {
            stroke-dashoffset: 0;
            opacity: 1;
            stroke: white;
            animation: nudge 0.7s ease-in-out;

            @keyframes nudge {
                0% {
                    transform: translateX(0);
                }
                30% {
                    transform: translateX(-5px);
                }
                50% {
                    transform: translateX(5px);
                }
                70% {
                    transform: translateX(-2px);
                }
                100% {
                    transform: translateX(0);
                }
            }
        }

        .circle {
            stroke-dashoffset: 0;
            opacity: 1;
        }
    }
}
</style>

<style>
.btn-play {
    transition: 0.2s;
}

.svg-border-waves .v-image {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3rem;
    width: 100%;
    overflow: hidden;
}

#hero {
    z-index: 0;
}
.svg-border-waves img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-bottom: -2px;
    z-index: -1;
}

.card {
    min-height: 300px;
    padding: 10px;
    transition: 0.5s ease-out;
}

.card .v-image {
    margin-bottom: 15px;
    transition: 0.75s;
}

.card h1 {
    margin-bottom: 10px;
}

.zoom-efect {
    transform: scale(1.1);
}

.up {
    transform: translateY(-20px);
    transition: 0.5s ease-out;
}
</style>

<style>
section {
    position: relative;
}
</style>
