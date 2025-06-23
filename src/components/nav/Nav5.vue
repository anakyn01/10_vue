<template>
    <v-layout class="rounded rounded-md border">
        <v-navigation-drawer color="suface-variant" permanent>  
<v-select
v-model="location"
:items="location"
label="Location"
>
</v-select>
<v-menu :location="location">
    <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props">
        Dropdown
        </v-btn>

        <v-list>
            <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
            >
<v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </template>
</v-menu>         
        </v-navigation-drawer>
        <v-app-bar
        :order="order"
        color="grey-lighten-2"
        title="bar"
        flat
        >
        <template v-slot:append>
            <v-switch
            v-model="order"
            class="me-2"
            false-value="0"
            label="Toggle order"
            true-value="-1"
            hide-details
            inset
            >
            </v-switch>
        </template>

        </v-app-bar>

        <v-main class="d-flex align-center justify-center">
<v-container>
    <v-row>
        <v-col cols="auto" sm="auto">
<h1>v-divider</h1>
<v-divider></v-divider>
<h2>vertical</h2>
<v-divider vertical class="border-opacity-100"></v-divider>
        </v-col>
        <v-col cols="auto" sm="auto">
<h1>Lists</h1>  
<v-card class="mx-auto">
    <v-list density="compact">
        <v-list-subheader>REPORTS</v-list-subheader>
        <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        color="primary"
        >
        <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title v-text="item.text"></v-list-item-title>
    </v-list-item>
    </v-list>
</v-card>          
        </v-col>
        <v-col cols="auto" sm="auto">
<h1>list2</h1> 
<v-card class="mx-auto" max-width="">
    <v-toolbar color="cyan-lighten-1">
        <v-btn icon="mdi-menu" variant="text"></v-btn>
        <v-toolbar-title>Inbox</v-toolbar-title>
        <v-btn icon="mdi-magnify" variant="text"></v-btn>
    </v-toolbar>
    <v-list
    :items="itemss"
    lines="three"
    item-props
    >
<template v-slot:subtitle="{subtitle}">
    <div v-html="subtitle"></div>
</template>
</v-list>
</v-card>          
        </v-col>
        <v-col cols="auto" sm="auto">
<h1>four</h1>           
        </v-col>
    </v-row>
</v-container>
        </v-main>
    </v-layout>
</template>

<script setup>
import {shallowRef} from 'vue'
import {ref} from 'vue'

const order = shallowRef(0)


const items = [
    {text: 'Real-Time', icon:'mdi-clock'},
    {text: 'Audience', icon:'mdi-account'},
    {text: 'Conversions', icon:'mdi-flag'},
    {title: 'Click Me'},{title: 'Click Me'},{title: 'Click Me'},{title: 'Click Me 2'},
]

const location = ref('end')
const locations = [
    'top','bottom','start','end','center',
]

 const itemss = [
    { type: 'subheader', title: 'Today' },
    {
      prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      title: 'Brunch this weekend?',
      subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
    },
    { type: 'divider', inset: true },
    {
      prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      title: 'Summer BBQ',
      subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
    },
    { type: 'divider', inset: true },
    {
      prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      title: 'Oui oui',
      subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
    },
    { type: 'divider', inset: true },
    {
      prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      title: 'Birthday gift',
      subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
    },
    { type: 'divider', inset: true },
    {
      prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
      title: 'Recipe to try',
      subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
    },
  ]
</script>