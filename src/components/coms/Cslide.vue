<template>
<v-carousel>
    
    <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    cover
    >
    </v-carousel-item>

    <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
    cover
    >
    </v-carousel-item>

    <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    cover
    >
    </v-carousel-item>

</v-carousel>
<h1>카드 슬라이드</h1>
<v-card
class="mx-auto"
elevation="24"
max-width="444"
>
    <v-carousel
    :continous="false" :show-arrows="false" delimiter-icon="mdi-square"
    height="300" hide-delimiter-background
    >
        <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        >
            <v-sheet :color="colors[i]" height="100%" title>
                <div class="d-flex fill-height justify-center align-center">
                    <div class="text-h2">
                        {{ slide }} Slide
                    </div>
                </div>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</v-card>

</template>

<script setup>
const colors = ['green','secondary','yellow darken-4','red lighten-2','orange darken-1']
const slides = ['First','Second','third','Fourth','Fifth']
</script>