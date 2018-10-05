<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/jezu.jpg" alt="Czy mam internet" class="mb-5">
        <h1>Czy mam internet?</h1>
        <h2>TAK! Masz internet! Gratulacje!</h2>
        <p>Twoje IP: {{info}}</p>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function(){
    return {
      info: this.getUserIP()
    }
  },
  methods: {
      getUserIP(){
        return axios.get('https://api.ipify.org/?format=json')
        .then(response => (this.info = response.data.ip))
        .catch(error => this.blocked(error))
        },
      blocked(error){
        let info = "Blokada reklam jest uruchomiona! Prosimy o wyłączenie, bo nie uda nam się pokazać Ci strony!";
        this.info = info;
        // eslint-disable-next-line
        console.log(error);
        return "Wyłącz AdBlock!"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
