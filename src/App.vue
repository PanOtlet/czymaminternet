<template>
  <div id="app">
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          :to="item.path"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'fas fa-chevron-right' : 'fas fa-chevron-left'"></v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>fas fa-bars</v-icon>
      </v-btn> -->
    </v-toolbar>
    <v-content>
    <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>fas fa-exchange-alt</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>&copy; CoffeePenguin.com {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "CzyMamInternet.pl",
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "fas fa-home",
          title: "Strona główna",
          path: "/",
          meta: {
            title: "Strona główna | " + this.title
          }
        },
        {
          icon: "fas fa-tachometer-alt",
          title: "Test szybkości",
          path: "/speedtest"
        },
        {
          icon: "fas fa-server",
          title: "Usługi webmasterskie",
          path: "/webmaster"
        },
        {
          icon: "fas fa-user-secret",
          title: "O nas",
          path: "/o-nas"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false
    };
  }
};
</script>