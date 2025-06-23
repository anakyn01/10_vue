<template>
    <v-container class="text-center">
        <v-row>
            <v-col cols="12" md="6">
            <h1>보라돌이</h1>
<v-footer class="text-center d-flex flex-column ga-2 py-4" color="indigo-lighten-1">
<div class="d-flex ga-3">
    <v-btn
    v-for="icon in icons" :key="icon" :icon="icon" density="comfotable"
    variant="text"
    >
    </v-btn>
</div>

<v-divider class="my-2" thickness="2" width="50"></v-divider>

<div class="text-caption font-weight-regular opacity-60">
Do exercitation mollit excepteur incididunt. Culpa occaecat ipsum ipsum ad laboris. Nulla consequat dolor commodo commodo aliquip id qui voluptate. Dolore aliqua esse reprehenderit exercitation sint eu Lorem nisi magna quis sint aliqua adipisicing enim.
Id reprehenderit dolore dolore velit. Occaecat non deserunt magna exercitation minim Lorem non. Adipisicing eu enim consectetur nostrud eu sint pariatur.
Et cillum proident duis elit reprehenderit Lorem exercitation elit mollit laborum quis. Ullamco occaecat dolor eiusmod laborum. Id irure cupidatat duis aliquip nisi. Non adipisicing amet fugiat labore dolor exercitation.
Consectetur anim ipsum culpa esse qui id laborum irure qui. Consequat ut laborum culpa nulla mollit. Minim labore duis cupidatat culpa. Excepteur sunt ad elit tempor ad. Fugiat quis irure irure aliqua. Laboris eu sunt commodo sint magna sit tempor pariatur labore consequat et amet laborum anim.
Pariatur cupidatat exercitation ut mollit. Veniam nulla dolor anim esse Lorem voluptate minim. Non nulla reprehenderit ea culpa aute aliquip dolore amet sint voluptate mollit ad nostrud.
</div>
<v-divider></v-divider>
<div class="">
    {{ new Date().getFullYear() }} -<strong>Vuetify</strong>
</div>
</v-footer>

            </v-col>
            <v-col cols="12" md="6">
            <h1>회색</h1>
<v-footer class="d-flex align-center justify-center ga-2 flex-wrap flex-grow-1 py-3" color="surface-light">
<v-btn
v-for="link in links" :key="link" :text="link" variant="text"
rounded
>
</v-btn>
<div class="flex-1-0-100 text-center mt-2">
    {{ new Date().getFullYear() }} - <strong>Vuetify</strong>
</div>
</v-footer>
            </v-col>            
        </v-row>
    </v-container>
</template>

<script setup>
const icons = [
'mdi-facebook','mdi-twitter','mdi-linkedin','mdi-instagram'
]
const links = [
'Home','About Us','Team','Services','Blog','Contact Us',
]
</script>