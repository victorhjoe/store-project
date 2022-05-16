<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      color="#1b1b28"
      :dark="$vuetify.theme.dark"
    >
      <v-list dense>
          <template v-for="rota in rotas">
            <v-list-group
              v-if="rota.filhos.length"
              :key="rota.name"
              :prepend-icon="rota.icon"
              append-icon=""
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ rota.title }}
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item
                v-for="(filho, i) in rota.filhos"
                :key="i"
                link
                :to="filho.path"
              >
                <v-list-item-action v-if="filho.icon">
                  <v-icon>{{ filho.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ filho.title }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-list-item
              v-else
              :key="rota.id"
              :to="rota.path"
              link
            >
              <v-list-item-action>
                <v-icon>{{ rota.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ rota.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar  app :dark="$vuetify.theme.dark">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="ml-0 pl-4"
        ><span class="hidden-sm-end-down"
          >Loja de produtos</span
        ></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-text-field
      v-model="searchData"
      label="Pesquisa"
      hide-no-data
      hide-details
      prepend-inner-icon="mdi-magnify"
      @keyup.enter="searchProducts"
      ></v-text-field>

      <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon color="primary">
          {{ ($vuetify.theme.dark) ? 'mdi-weather-night' : 'mdi-weather-sunny' }}
        </v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import routes from "@/router/routes";

export default {
  data() {
    return {
      drawer: false,
      rotas: [],
      searchData: ""
    };
  },
  created() {
    this.rotas = routes;
  },

  methods: {
    searchProducts(){
      this.$root.$emit("search", this.searchData);
    }
  }
};
</script>

<style scoped>
/*  mudando o menu lateral */
.v-item--active.v-list-item--active.v-list-item.v-list-item--link.theme--light,
.v-list .v-list-item--active .v-icon {
  color: #ffc107 !important;
}

.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled),
.theme--light.v-icon {
  color: #9899ad !important;
}
.v-icon.notranslate.icone-btn-agendar.mdi.mdi-plus-thick.theme--light.primary--text {
  color: #ffc107 !important;
}
.v-list-item__title {
  color: white;
}
</style>