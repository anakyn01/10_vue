<template>
    <v-container>
        <v-row>
<v-col cols="12" md="4">
<h1>워처스</h1>
<pre>
- 같은 이름의 데이터 속성을 감시하는 메서드
- 데이터 속서값이 변경될때 마다 감시자가 실행됩니다
- 특정 데이터속성값에 작업이 필요한 경우 워처를 사용합니다
</pre>
</v-col>
<v-col cols="12" md="4">
<h1>Example: Input for e-mail Address</h1>
<p>A watcher is set up to watch the e-mail input. The user is informed if the current e-mail address input is valid or invalid (missing @).</p>
<p>The user is also informed if the input just became valid with the last input from the keyboard.</p>    

<div class="app">
    <label for="">
        <p>이메일 주소 유효성 체크</p>
        <input type="email" v-model="inpAddress" class="form-control">
        <p v-bind:class="myClass">
            <code>
                {{ feedbackText }}
            </code>
        </p>
    </label>
</div>

</v-col>
<v-col cols="12" md="4"></v-col>
        </v-row>
    </v-container>
</template>

<style lang="scss" scoped>
.app{
    border:dashed black 1px; width:200px; padding:0 10px 10px 10px;
    div{
        width:200px; height:50px; border:solid 1px; background: lightgreen;
    }
    p{
        font-size: large; font-weight: bold;
    }
    .valid{color:green;}.invalid{color:red;}
}
</style>

<script>
export default {
    data(){
        return{
inpAddress:"",feedbackText:"",myClass:"invalid"
        }
    },
    watch:{
        inpAddress(newVal, oldVal) {
            if(!newVal.includes('@')){
                this.feedbackText = '잘못된 이메일 주소';
                this.myClass = 'invalid';
            }else if(!oldVal.includes('@') && newVal.includes('@')){
                this.feedbackText = '완벽 그 잡체';
                this.myClass = 'valid';
            }else{
                this.feedbackText = '이메일 주소가 유효합니다';
            }
        }
    }
}
</script>