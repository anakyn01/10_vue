<template>
    <v-container class="text-center">
        <v-row>
<v-col cols="12" md="4" sm="4">
<h1>small variant</h1>
<v-card class="mx-auto" max-width="">
    <v-toolbar
    color="light-blue"
    extended
    light
    >
<v-app-bar-nav-icon color="grey-darken-4">
</v-app-bar-nav-icon>

<v-toolbar-title>My files</v-toolbar-title>
<v-btn color="grey-darken-4" icon="mdi-magnify"></v-btn>
<v-btn color="grey-darken-4" icon="mdi-view-module"></v-btn>

<template v-slot:extension>
    <v-fab
    class="ms-4"
    color="cyan-accent-2"
    icon="mdi-plus"
    location="bottom left"
    size="40"
    absolute
    offset
    @click="dialog = !dialog"
    ></v-fab>
</template>
</v-toolbar>
<v-list lines="two">
    <v-list-subheader title="Folders" inset></v-list-subheader>
    <v-list-item
    v-for="item in items"
    :key="item.title"
    link
    >
        <template v-slot:prepend>
            <v-avatar :class="[item.iconClass]" :icon="item.icon"></v-avatar>
        </template>

        <v-list-item-title>{{ item.title }}</v-list-item-title>

        <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>

        <template v-slot:append>
            <v-list-item-action>
<v-btn color="grey-lighten-1" icon="mdi-information" variant="text"></v-btn>
            </v-list-item-action>
        </template>
    </v-list-item>
</v-list>

<v-dialog
v-model="dialog" max-width="500"
>
    <v-card>
        <v-card-text>
            <v-text-field label="File name"></v-text-field>
            <small class="text-grey">' actually save'</small>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
            color="primary" variant="text" @click="dialog = false"
            >
        Submit
            </v-btn>
        </v-card-actions>
    </v-card>

</v-dialog>
</v-card>

</v-col> 
<v-col cols="12" md="4" sm="4">
<h1>Display animation</h1>  
<v-card class="mx-auto" max-width="">
    <v-layout>
        <v-app-bar absolute extended>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <template v-slot:extension>
                <v-fab
                :active="!hidden"
                class="ms-4"
                icon="mdi-plus"
                location="bottom start"
                size="small"
                absolute
                offset
                ></v-fab>
            </template>
        </v-app-bar>
        <v-main>
            <v-sheet class="pa-4 text-center" color="surface-light">
                <v-btn
:text="hidden ? 'Show' : 'Hide'"    
color="surface-variant"    
width="80"    
@click="hidden = !hidden"    
                ></v-btn>
            </v-sheet>
            <v-sheet height="125">
                <v-fab
:active="!hidden" class="me-4" icon="mdi-plus" location="top end"
absolute offset
                >
                </v-fab>
            </v-sheet>
        </v-main>
    </v-layout>
</v-card> 
</v-col>
<v-col cols="12" md="4" sm="4">
<h1>Lateral screen</h1>  
<v-card>
    <v-layout>
        <v-app-bar color="indigo" absolute flat>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-app-bar-title>Page title</v-app-bar-title>
        <v-btn icon="mdi-magnify"></v-btn>
        <v-btn icon="mdi-dots-vertical">
            <v-icon></v-icon>
        </v-btn>

        <template v-slot:extension>
            <v-tabs v-model="tabs" align-tabs="title" slider-color="pink">
            <v-tab text="Item One" value="one"></v-tab> 
            <v-tab text="Item Two" value="two"></v-tab>
            <v-tab text="Item Three" value="three"></v-tab>      
            </v-tabs>
        </template>
                </v-app-bar>

        <v-main>
            <v-sheet height="150"></v-sheet>
        </v-main>

        <v-fab
        :key="activeFab.icon"
        :color="activeFab.color"
        :icon="activeFab.icon"
        class="ms-4 mb-4"
        location="bottom start"
        size="64"
        absolute
        app
        appear
        >

        </v-fab>

    </v-layout>
</v-card> 
</v-col>           
        </v-row>
    </v-container>
</template>

<script setup>
import {computed, ref} from 'vue'

const hidden = ref(false)

const dialog = ref(false)
const tabs = ref(null)
  const activeFab = computed(() => {
    switch (tabs.value) {
      case 'one': return { color: 'success', icon: 'mdi-share-variant' }
      case 'two': return { color: 'red', icon: 'mdi-pencil' }
      case 'three': return { color: 'green', icon: 'mdi-chevron-up' }
      default: return {}
    }
  })


const items = ref([
{icon:'mdi-folder',iconClass:'bg-grey-lighten-1 text-white',title:'Photos',subtitle:'June 3, 2025'},
{icon:'mdi-folder',iconClass:'bg-grey-lighten-1 text-white',title:'Photos',subtitle:'June 17, 2025'},
{icon:'mdi-folder',iconClass:'bg-grey-lighten-1 text-white',title:'Photos',subtitle:'June 28, 2025'},
])
const items2 = ref([
{icon:'mdi-clipboard-text',iconClass:'bg-blue text-white',title:'Vacation',subtitle:'June 3, 2025'},
{icon:'mdi-gesture-tap-button',iconClass:'bg-amber text-white',title:'Kitchen',subtitle:'June 17, 2025'},    
])
</script>