<template>
    <v-container>
        <v-row>
<v-col cols="12" md="4">
<h1>동적으로 만드는 모델 </h1>
<form v-on:submit.prevent="addItem" class="app">

<p>
What do you need?<br>
<input type="text" required placeholder="item name..." v-model="itemName">
</p>

<p>
How many?<br>
<input type="number" required placeholder="number of items..." 
v-model="itemNumber">
</p>

<p>
Important?
<input type="checkbox" v-model="itemImportant" class="form-check">
{{ itemImportant }}
</p>
<button type="submit">Add item</button>
</form>
<br>
<hr>
<p>shopping list:</p>
<ul id="ulToFind">
    <li
    v-for="item in shoppingList"
    v-bind:class="{ impClass : item.important }"
    v-on:click="item.found =! item.found"
    v-show="!item.found">
    {{ item.name }},{{ item.number }}
    </li>
</ul>

<ul id="ulFound">
    <li
    v-for="item in shoppingList"
    v-bind:class="{ impClass : item.important}"
    v-on:click="item.found =! item.found"
    v-show="!item.found">
    {{ item.name }},{{ item.number }}
    </li>
</ul>
</v-col>
            <v-col cols="12" md="4"></v-col>
            <v-col cols="12" md="4"></v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
itemName: null, itemNumber: null, itemImportant: false,
shoppingList:[
          { name: 'Tomatoes', number: 5, important: false, found: false },
          { name: 'Bread', number: 1, important: false, found: false },
          { name: 'Soap', number: 1, important: true, found: true }
]
        }
    },
    methods:{
addItem(){
    let item = {
        name : this.itemName, 
        number : this.itemNumber,
        important: this.itemImportant,
        found: false
    }
    this.shoppingList.push(item)
    this.itemName=null
    this.itemNumber=null
    this.itemImportant=false
}
    }
}
</script>

<style>
.app{border:dashed black 1px; display:inline-block; padding:0 20px;}
.app label, .app li { padding:5px; border-radius: 5px;}
.app label:hover, .app li:hover {
cursor:pointer; background-color: lightgray;    
}
ul,ol,li{list-style-type:none;}
li{margin:2px; background-color: rgb(211, 254, 211);}
.impClass{background-color: rgb(255, 202, 202);}
#ulFound li{text-decoration: line-through; background-color:rgb(230,230,230);}
</style>