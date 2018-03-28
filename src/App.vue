<template>
<div id="app">
  <h1 v-debug>{{ nombres | queEmpiezanConJota }}</h1>
  <avatar v-for="nombre in (nombres)" :name="nombre"></avatar>
</div>
</template>

<script>
import Avatar from './Avatar.vue';
export default {
  name: 'app',
  components: {
    Avatar,
  },
  data() {
    return {
      msg: 'Hola Mundo',
      nombres: ['juan', 'pepe', 'carlos', 'jose', 'Javi', 'Paco', 'Josele']
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
