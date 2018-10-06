<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout align-center>
        <v-flex col-md-6 class="text-xs-center">
          <h1>Czy mam internet?</h1>
          <h2>Jedyny portal, co potwierdza Twoje połączenie z internetem!</h2>
        </v-flex>
        <v-flex col-md-6><img src="@/assets/jezu.jpg" width="100%" alt="Czy mam internet"></v-flex>
        <!-- <p>Twoje IP: {{info}}</p> -->
      </v-layout>
    </v-slide-y-transition>
    <v-data-table
      :headers="headers"
      :items="information"
      hide-actions
      class="elevation-1"
      text-xs-center
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.text }}</td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  beforeMount() {
    this.getUserIP();
  },
  data: function() {
    return {
      // info: this.getUserIP(),
      headers: [
        {
          text: "Informacja",
          align: "right",
          sortable: false,
          value: "name"
        },
        { text: "Wartość", value: "text", sortable: false }
      ],
      information: [
        {
          value: false,
          name: "Czy masz internet?",
          text: "Tak"
        },
        {
          value: false,
          name: "Adres IP",
          text: ""
        },
        {
          value: false,
          name: "Silnik przeglądarki",
          text: navigator.product
        },
        {
          value: false,
          name: "Przeglądarka dokładnie",
          text: navigator.userAgent
        },
        {
          value: false,
          name: "Platforma",
          text: navigator.platform
        }
      ]
    };
  },
  methods: {
    getUserIP() {
      return axios
        .get("https://api.ipify.org/?format=json")
        .then(response => (this.information[1].text = response.data.ip))
        .catch(error => this.blocked(error));
    },
    blocked(error) {
      let info =
        "Blokada reklam jest uruchomiona! Prosimy o wyłączenie, bo nie uda nam się pokazać Ci strony!";
      this.info = info;
      // eslint-disable-next-line
      console.log(error);
      return "Wyłącz AdBlock!";
    }
  }
};
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
