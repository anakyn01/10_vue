<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4">
<h1>위 아래 형</h1>
<v-timeline direction="horizontal">
    
    <v-timeline-item>
        <template v-slot:opposite>
            Opposite content
        </template>
        <div class="">
            <div class="text-h6">content title</div>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus iure doloremque eveniet amet! Consequuntur ducimus cum corrupti, culpa unde temporibus.
            </p>
        </div>
    </v-timeline-item>

        <v-timeline-item>
        <template v-slot:opposite>
            Opposite content
        </template>
        <div class="">
            <div class="text-h6">content title</div>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus iure doloremque eveniet amet! Consequuntur ducimus cum corrupti, culpa unde temporibus.
            </p>
        </div>
    </v-timeline-item>

        <v-timeline-item>
        <template v-slot:opposite>
            Opposite content
        </template>
        <div class="">
            <div class="text-h6">content title</div>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus iure doloremque eveniet amet! Consequuntur ducimus cum corrupti, culpa unde temporibus.
            </p>
        </div>
    </v-timeline-item>

</v-timeline>
            </v-col>
            <v-col cols="12" md="4">
<h1>박스형 연혁</h1>     
<v-timeline side="end">
    <v-timeline-item
    v-for="item in items" :key="item.id" :dot-color="item.color" size="small"
    >
        <v-alert
        :color="item.color" :icon="item.icon" :value="true"
        >     
        얼럿창을 사용한 연혁      
        </v-alert>
    </v-timeline-item>
</v-timeline>           
            </v-col>
            <v-col cols="12" md="4">
<h1>박스타이틀에 배경색이 들어간 연혁</h1>
<v-timeline align="start">
    <v-timeline-item
v-for="(item, i) in its" key="i" :dot-color="item.color" :icon="item.icon"
fill-dot
    >
<v-card>
    <v-card-title :class="['text-h6', `bg-${item.color}`]">
        Lorem, ipsum dolor.
    </v-card-title>
    <v-card-text class="bg-white text--primary">
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita labore, fuga mollitia quae corrupti consequatur tempora, voluptatem commodi, repudiandae provident rem et laboriosam? Inventore ipsa et dolorum in, hic dolor.
        </p>
        <v-btn :color="item.color" variant="outlined">more</v-btn>
    </v-card-text>
</v-card>

</v-timeline-item>
</v-timeline>                
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
const items = [
{id:1, color:'info', icon:'mdi-information',},
{id:2, color:'error', icon:'mdi-alert-circle',},   
]
const its = [
   {
      color: 'red-lighten-2',
      icon: 'mdi-star',
    },
    {
      color: 'purple-lighten-2',
      icon: 'mdi-book-variant',
    },
    {
      color: 'green-lighten-1',
      icon: 'mdi-airballoon',
    },
    {
      color: 'indigo-lighten-2',
      icon: 'mdi-layers-triple',
    },
]
</script>