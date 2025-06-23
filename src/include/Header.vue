<template>
     <v-app-bar app>
            <v-toolbar-title>Vuetify reference</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text :to="'/home'" >Home</v-btn>

            <v-menu offset-y>
                <template #activator="{ props }">
                    <v-btn v-bind="props" text>
                        vue html용
                        <v-icon end>mdi-menu-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    v-for="(item, index) in menuItems"
                    :key="index"
                    @click="navigate(item.link)"
                    >
<v-list-item-title>{{ item.title  }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

                        <v-menu offset-y>
                <template #activator="{ props }">
                    <v-btn v-bind="props" text>
                        vue 설치용
                        <v-icon end>mdi-menu-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    v-for="(item, index) in menuItems"
                    :key="index"
                    @click="navigate(item.link)"
                    >
<v-list-item-title>{{ item.title  }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-menu offset-y>
                <template #activator="{ props }">
                    <v-btn v-bind="props" text>
                        nav
                        <v-icon end>mdi-menu-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    v-for="(nav, index) in navItems"
                    :key="index"
                    @click="navigate(nav.link)"
                    >
<v-list-item-title>{{ nav.title  }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-menu offset-y>
                <template #activator="{ props }">
                    <v-btn v-bind="props" text>
                        Vuetify3
                        <v-icon end>mdi-menu-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    v-for="(vuetify, index) in vuetifyItems"
                    :key="index"
                    @click="navigate(vuetify.link)"
                    >
                    <v-list-item-title>{{ vuetify.title  }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-menu offset-y>
                <template #activator="{ props }">
                    <v-btn v-bind="props" text>
                        V-Form Inputs & Controls
                        <v-icon end>mdi-menu-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    v-for="(form, index) in formItems"
                    :key="index"
                    @click="navigate(form.link)"
                    >
                    <v-list-item-title>{{ form.title  }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

             <v-menu offset-y>
                <template #activator="{ props }">
                    <v-btn v-bind="props" text>
                        V-selection
                        <v-icon end>mdi-menu-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    v-for="(select, index) in selectItems"
                    :key="index"
                    @click="navigate(select.link)"
                    >
                    <v-list-item-title>{{ select.title  }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

             <v-menu offset-y>
                <template #activator="{ props }">
                    <v-btn v-bind="props" text>
                        V-feedback
                        <v-icon end>mdi-menu-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    v-for="(feedback, index) in feedbackItems"
                    :key="index"
                    @click="navigate(feedback.link)"
                    >
                    <v-list-item-title>{{ feedback.title  }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

                  <v-menu offset-y>
                <template #activator="{ props }">
                    <v-btn v-bind="props" text>
                        V-img, icon
                        <v-icon end>mdi-menu-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    v-for="(img, index) in imgItems"
                    :key="index"
                    @click="navigate(img.link)"
                    >
                    <v-list-item-title>{{ img.title  }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
  
        </v-app-bar>
    <v-main>
         <router-view></router-view>
    </v-main>
</template>

<script setup>
import { ref } from 'vue'

const menuItems = ref([
    {title:'뷰디렉티브', link:'/dir'},
    {title:'이벤트', link:'/events'},
    {title:'함수', link:'/fs'},
    {title:'계산된속성', link:'/computed'},
    {title:'v-model', link:'/vmodel'},
    {title:'워처스', link:'/watchers'},
])

const navItems = ref([
    {title:'nav1', link:'/nav1'},
    {title:'nav2', link:'/nav2'},
    {title:'nav3', link:'/nav3'},
    {title:'nav4', link:'/nav4'},
    {title:'nav5', link:'/nav5'},
])

const vuetifyItems = ref([
    {title:'tabs', link:'/tabs'},
    {title:'button', link:'/button'},
    {title:'floating Btn', link:'/fbutton'},
    {title:'helloworld', link:'/tooltip'},
    {title:'page', link:'/page'},
    {title:'footers', link:'/footer'},
    {title:'bottom navi', link:'/bottom1'},
])

const formItems = ref([
    {title:'자동완성', link:'/auto'},
    {title:'체크박스', link:'/check'},
    {title:'콤보박스', link:'/combo'},
    {title:'파일', link:'/file'},
    {title:'양식', link:'/form'},
    {title:'사용자 정의 인풋', link:'/custom'},
    {title:'넘버인풋', link:'/nums'},
    {title:'OTP인풋', link:'/otp'},
    {title:'라디오버튼', link:'/radio'},
    {title:'랜지슬라이더', link:'/range'},
    {title:'스위치', link:'/sw'},
    {title:'텍스트필드', link:'/textf'},
    {title:'텍스트 에이리어', link:'/texta'},
])

const selectItems = ref([
    {title:'버튼토글', link:'/btoggle'},
    {title:'캐러셀슬라이드', link:'/cslide'},
    {title:'칩그룹', link:'/chip'},
    {title:'아이템그룹', link:'/igroup'},
    {title:'슬라이드그룹', link:'/slideg'},
    {title:'스텝퍼', link:'/step'},
    {title:'윈도우즈', link:'/windows'},
])

const feedbackItems = ref([
    {title:'alerts', link:'/alerts'},
    {title:'badges', link:'/badges'},
    {title:'banner', link:'/banner'},
    {title:'empty', link:'/empty'},
    {title:'hover', link:'/hover'},
    {title:'progresscircular', link:'/pcircular'},
    {title:'progresslinear', link:'/plinear'},
    {title:'ratings', link:'/ratings'},
    {title:'skeletonloaders', link:'/skloaders'},
    {title:'snackbars', link:'/sbars'},
    {title:'snackbarqueue', link:'/queue'},
    {title:'timelines', link:'/time'},
])

const imgItems = ref([
    {title:'종횡비', link:'/ratio'},
    {title:'아바타', link:'/ava'},
    {title:'아이콘', link:'/icons'},
    {title:'이미지', link:'/imgs'},
    {title:'시차', link:'/parallax'},
])
/*
       
*/
//add
import { useRouter } from 'vue-router'

const router = useRouter()

function navigate(link) {
  router.push(link)
}
</script>
