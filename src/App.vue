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
      <v-list two-line subheader>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          :to="item.path"
          class="black--text"
          active-class="purple--text"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
            <v-list-tile-sub-title v-text="item.subtitle"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
      dark
      color="purple"
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
      <div>&copy; IDKCloud.com {{ new Date().getFullYear() }}</div>
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
          subtitle: "Informacje o Twoim połączeniu",
          path: "/"
        },
        {
          icon: "fas fa-tachometer-alt",
          title: "Test szybkości",
          subtitle: "Przetestuj szybkość łącza!",
          path: "/speedtest"
        },
        {
          icon: "fas fa-server",
          title: "Usługi webmasterskie",
          subtitle: "Specjaliści dla Ciebie!",
          path: "/webmaster"
        },
        {
          icon: "fas fa-user-secret",
          title: "O nas",
          subtitle: "Poznaj twórców strony",
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

<style>
a:link {
  color: white;
}
</style>
