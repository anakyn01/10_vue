<template>
    <v-layout>
        <v-app-bar title="확장패널"></v-app-bar>
        <v-navigation-drawer>
            <v-list nav>
<v-list-item title="Navigation drawer" link></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <v-container>
                <v-row>
                    <v-col>
<h1 class="text-primary">확장패널 => <small class="text-secondary">부트스트랩에서는 collapse {faq}</small></h1>
      <v-expansion-panels>
        <v-expansion-panel
        title="집에 갈까요?"
        text="just now"
        >
        </v-expansion-panel>
      </v-expansion-panels>    
      
      <div class="text-subtitle-2 mt-4 mb-2">
        Inset
      </div>
      <v-expansion-panels class="my-4" variant="inset">
        <v-expansion-panel
        v-for="i in 3"
        :key="i"
        text="Aliquip excepteur deserunt nostrud in cupidatat in nulla velit."
        title="Item"></v-expansion-panel>
      </v-expansion-panels>

      <div class="text-subtitle-2 mt-4 mb-2">
        Popout
      </div>
      <v-expansion-panels class="my-4" variant="popout">
        <v-expansion-panel
        v-for="i in 3"
        :key="i"
        text="Aliquip excepteur deserunt nostrud in cupidatat in nulla velit."
        title="Item"></v-expansion-panel>
      </v-expansion-panels>

      <h1>외부에서 제어할때</h1>
      <div class="text-center d-flex pb-4">
        <v-btn class="ma-2" @click="all">
            All
        </v-btn>
        <v-btn class="ma-2" @click="none">
            None
        </v-btn>
      </div>

      <div class="pb-4">v-model{{ panel }}</div>

      <v-expansion-panels v-model="panel" multiple>
        <v-expansion-panel
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        title="Foo"
        value="foo"
      ></v-expansion-panel>

      <v-expansion-panel
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        title="Bar"
        value="bar"
      ></v-expansion-panel>

      <v-expansion-panel
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        title="Baz"
        value="baz"
      ></v-expansion-panel>
      </v-expansion-panels>
</v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-layout>
</template>

<script setup>
import {ref} from 'vue'

const panel = ref([])
function all(){
    panel.value=['foo','bar','baz']
}
function none(){
    panel.value = []
}
</script>