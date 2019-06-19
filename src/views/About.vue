<template>
  <div class="about">
    <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">CzyMamInternet.pl</h3>
            <div>
              Tworzymy strony, aplikacje oraz zajmujemy się obsługą
              administracyjną serwerów. Doradzamy, tworzymy, wspieramy.
              To jest właśnie ekipa tworząca ten portal, a dokładniej nazywamy
              się CoffeePenguin.com! Zapraszamy do współpracy!
            </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange" href="https://idkcloud.com">Sprawdź ofertę</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      card_text:
        "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat."
    };
  }
};
</script>
