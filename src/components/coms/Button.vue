<template>
    <v-layout ref="app" class="rounded rounded-md border">
        <v-app-bar color="surface-variant" name="app-bar">
            <child v-slot="{print}">
                <v-btn class="mx-auto" @click="print('app-bar')">
                    Get data
                </v-btn>
            </child>
        </v-app-bar>

        <v-navigation-drawer
        color="surface-light" name="drawer" permanent
        >

        <div class="d-flex justify-center align-center h-100">
            <child v-slot="{print}">
                <v-btn variant="text" @click="print('drawer')">
                    Get data
                </v-btn>
            </child>
        </div>

        </v-navigation-drawer>
        <v-main class="d-flex align-center justify-center">
            <v-container>
<v-row align="center" justify="center" >
    <v-col cols="12" md="4" sm="6">
<div class="position-absolute d-flex align-center justify-center">
    <v-btn color="deep-purple-darken-2" size="x-large" @click="dialog = !dialog">
        팝업창 열기
    </v-btn>
</div>     

<!-- 0529추가-->
<v-fade-transition hide-on-leave>
    <!--아래 팝업창-->
    <v-card
    v-if="dialog"
    append-icon="$close"
    class="mx-auto"
    elevation="16"
    max-width="500"
    title="send a receipt"
    >
    <template v-slot:append>
        <v-btn icon="$close" variant="text" @click="dialog = false"></v-btn>
    </template>

    <v-divider></v-divider>

    <div class="py-12 text-center">
        <v-icon
        class="mb-6"
        color="success"
        icon="mdi-check-circle-outline"
        size="128"
        >
        </v-icon>
        <div class="text-h4 font-weight-bold">
            This receipt was sent
        </div>

        <v-divider></v-divider>

        <div class="pa-4 text-end">
            <v-btn
            class="text-none"
            color="medium-emphasis"
            min-width="92"
            variant="outlined"
            rounded
            @click="dialog = false"
            >
            close
            </v-btn>
        </div>
    </div>

    </v-card>
</v-fade-transition>




    </v-col>
    <v-col cols="12" md="4" sm="6">

    </v-col>
    <v-col cols="12" md="4" sm="6">
<v-card
class="px-2 mx-auto"
max-width="900"
rounded="lg"
text="How .... Vuetify?"
theme="dark"
title="SURVEY"
variant="flat"
>
<template v-slot:append>
    <div class="me-n2">
        <v-btn
        density="comfortable"
        icon="$close"
        variant="plain"
        ></v-btn>
    </div>
</template>

<v-item-group
v-model="model"
class="d-flex justify-sm-space-between px-6 pt-2 pb-6"
>
<v-item v-for="n in 5" :key="n">
    <template v-slot:default="{toggle}">
        <v-btn
        :active="model != null && model + 1 >= n"
        :icon="`mdi-numeric-${n}`"
        height="40"
        variant="text"
        width="40"
        border
        @click="toggle"
        >
        </v-btn>
    </template>
</v-item>

</v-item-group>
</v-card>
    </v-col>
</v-row>
<v-row align="center" justify="center" >
<v-col cols="auto">
    <v-btn density="compact" icon="mdi-plus"></v-btn>
</v-col>
<v-col cols="auto">
    <v-btn density="comfortable" icon="$vuetify"></v-btn>
</v-col>
<v-col cols="auto">
    <v-btn density="default" icon="mdi-open-in-new"></v-btn>
</v-col>
<v-col cols="auto">
    <v-btn icon="mdi-account" size="x-small"></v-btn>
</v-col>
<v-col cols="auto">
    <v-btn icon="$vuetify"></v-btn>
</v-col>
<v-col cols="auto">
    <v-btn icon="mdi-open-in-new" size="large"></v-btn>
</v-col>
<v-col cols="auto">
    <v-btn icon="mdi-calendar" size="x-large"></v-btn>
</v-col>
<v-col cols="auto"></v-col>
</v-row>
<v-row align="center" justify="center" >
    <v-col>
<h1>Rounded Button</h1>
    </v-col>
</v-row>
<v-row align="center" justify="center" >
<v-col cols="12" md="4" sm="6">
    <v-btn rounded="0" size="x-large" block>Rounded 0</v-btn>
</v-col>
<v-col cols="12" md="4" sm="6">
    <v-btn rounded="xs" size="x-large" block>Rounded xs</v-btn>
</v-col>
<v-col cols="12" md="4" sm="6">
   <v-btn rounded="sm" size="x-large" block>Rounded sm</v-btn>
</v-col>
<v-col cols="12" md="4" sm="6">
<v-btn rounded="x-large" size="x-large" block>Rounded x-large</v-btn>
</v-col>
<v-col cols="12" md="4" sm="6">
<v-btn rounded="lg" size="x-large" block>Rounded lg</v-btn>
</v-col>
<v-col cols="12" md="4" sm="6">
<v-btn rounded="xl" size="x-large" block>Rounded xl</v-btn>
</v-col>
</v-row>
<v-row align="center" justify="center" >
    <v-col>
        <v-btn block>Block Button</v-btn>
    </v-col>
</v-row>
<v-row align="center" justify="center" >
        <v-col cols="auto" class="mt100">
<v-btn size="x-small">x-small</v-btn>
        </v-col>
        <v-col cols="auto" class="mt100">
<v-btn size="small">small</v-btn>            
        </v-col>
        <v-col cols="auto" class="mt100">
<v-btn size="auto">auto</v-btn>            
        </v-col>
        <v-col cols="auto" class="mt100">
<v-btn size="large">large</v-btn>            
        </v-col>
        <v-col cols="auto" class="mt100">
<v-btn size="x-large">x-large</v-btn>             
        </v-col>
    </v-row>

                <v-sheet
                border="dashed md" color="suface-light" rounded="lg" width="100%"
                >
                <h1 class="my-5 text-secondary">Buttons</h1>
<p><v-btn>기본형</v-btn><v-btn prepend-icon="$vuetify" class="mx-3">btn</v-btn>
<v-btn prepend-icon="$vuetify" append-icon="$vuetify">btn</v-btn>
<v-btn prepend-icon="$vuetify" stacked class="mx-3">btn</v-btn>
</p>
                </v-sheet>
            </v-container>
        </v-main>

        <v-footer color="surface-light" name="footer" app>
                <v-btn 
                class="mx-auto"
                text="Get data"
                variant="text"
                 @click="print('footer')">
                </v-btn>
        </v-footer>
    </v-layout>
</template>

<script setup>/*얘는 vue3에서 컴포지션 API를 간결하게 사용할수 있도록 해주는 
 SFC문법 입니다
*/
import {useLayout} from 'vuetify'

const Child = {
    setup (props, ctx){//setup함수의 매개변수 입니다
        const {getLayoutItem} = useLayout()

        function print(key){//키 값을 받아서 아이템의 정보를 json 으로 경고창 출력
            alert(JSON.stringify(getLayoutItem(key), null, 2))
        }

        return () => ctx.slots.default({print})
    },
}

import {ref} from 'vue'

const dialog = ref(true)
</script>

<style>
.mt100{
margin-top:50px;
margin-bottom:50px;
}
</style>