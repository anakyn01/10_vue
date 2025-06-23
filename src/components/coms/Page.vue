<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4">
<h1>basic</h1>
<v-pagination :length="20"></v-pagination>
            </v-col>
            <v-col cols="12" md="4">
<h1>round</h1>
<v-pagination v-model="page" :length="4" rounded="circle">
</v-pagination>
            </v-col>
            <v-col cols="12" md="4">
<v-system-bar>
    <v-icon icon="mdi-wifi-strength-4"></v-icon>
    <v-icon icon="mdi-signal" class="ms-2"></v-icon>
    <v-icon icon="mdi-battery" class="ms-2"></v-icon>
    <span class="ms-2">2:41PM</span>
</v-system-bar>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {ref} from 'vue'
//뷰라이브러리에서 ref(reactive)함수를 가져옵니다 
//일반적인 값(숫자,문자열,객체)등을 반응형으로 만들어 뷰컴포넌트에 추적할수 있게 해줍니다
const page = ref(1)
/*
page라는 변수를 선언하고 그값은 (1) 입니다
ref(1) 숫자 1을 초기값으로 가지는 반응형 참조객체(Ref object)를 만듭니다
즉 page는 단순히 숫자 1이 아니라 {value:1} 형태의 객체입니다
*/
</script>