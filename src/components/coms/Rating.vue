<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4">
<h1>Date pickers</h1>  
<v-date-picker></v-date-picker>              
            </v-col>
            <v-col cols="12" md="4">
<v-color-picker></v-color-picker>
            </v-col>
            <v-col cols="12" md="4">
<h1>스켈레톤 로더</h1>
<v-skeleton-loader type="card"></v-skeleton-loader>
<h1>스켈레톤 로더</h1>
<v-skeleton-loader :elevation="24" boilerplate type="card"></v-skeleton-loader>
            </v-col>
            <v-col cols="12" md="4">
                <h1>별</h1>
<v-rating
v-model="rating" active-color="blue"
color="orange-lighten-1"
></v-rating>
            </v-col>
            <v-col cols="12" md="4">
<v-rating
v-model="rat" empty-icon="mdi-circle-outline"
full-icon="mdi-circle" half-increments hover
></v-rating>                
            </v-col>
            <v-col cols="12" md="4">
<h1>컬러</h1> 
<v-rating v-model="rating">
    <template v-slot:item="props">
        <v-icon :color="props.isFilled ? colors[props.index] : 'grey-lighten-1'" size="large">
            {{ props.isFilled ? 'mdi-star-circle':'mdi-star-circle-outline' }}
        </v-icon>
    </template>
</v-rating>               
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
  import { ref } from 'vue'

  const colors = ['green', 'purple', 'orange', 'indigo', 'red']

  const rating = ref(3)
  const rat = ref(3.5)
</script>