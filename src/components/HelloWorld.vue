<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>TAK!</h1>
    <p>Masz nawet adres IP: <br> {{ info }}</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    // info: String
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
      .catch(error => this.blocked())
      // .catch(error => console.log(error))
    },
    blocked(){
      let info = "Blokada reklam jest uruchomiona! Prosimy o wyłączenie, bo nie uda nam się pokazać Ci strony!";
      this.info = info;
      return "Wyłącz AdBlock!"
    }
  },
  // mounted: function(){
  //   this.info = this.getUserIP()
  // }
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
