<!--<template>-->
<!--  <div id="app">-->
<!--    &lt;!&ndash; <HelloWorld msg="Welcome to Your Vue.js App" /> &ndash;&gt;-->
<!--    <PackChart />-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--  import * as d3 from "d3";-->
<!--  import PackChart from "./components/Chart.vue";-->

<!--  export default {-->
<!--    name: "app",-->
<!--    components: {-->
<!--      PackChart-->
<!--    },-->
<!--    data: function() {-->
<!--      return {-->
<!--        loadData: []-->
<!--      };-->
<!--    },-->
<!--    mounted() {-->
<!--      console.log("App loaded");-->
<!--      this.fetchData();-->
<!--    },-->
<!--    methods: {-->
<!--      async fetchData() {-->
<!--        let data = await d3.json("./tweets.json");-->
<!--        this.loadData = data;-->
<!--      }-->
<!--    }-->
<!--  };-->
<!--</script>-->

<!--<style>-->
<!--  #app {-->
<!--    font-family: "Avenir", Helvetica, Arial, sans-serif;-->
<!--    -webkit-font-smoothing: antialiased;-->
<!--    -moz-osx-font-smoothing: grayscale;-->
<!--    text-align: center;-->
<!--    color: #2c3e50;-->
<!--    margin-top: 60px;-->
<!--  }-->
<!--</style>-->
<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>
