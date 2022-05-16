<template>
  <v-app>
    
    <Menu/>

    

    <v-main>
      <v-container fluid class="pa-10">
        <router-view/>
      </v-container>
    </v-main>


    <v-footer app>
      <div>
        <span>Desenvolvido por &#169;Victor Hugo  - {{ new Date().getFullYear() }}</span>
        <span> - v1.0.0</span>
      </div>
    </v-footer>

  </v-app>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  name: 'App',

  components: {
    Menu
  },

  data: () => ({
    //
  }),
};
</script>

<style >
.titulo {
  color: #a4a4a4;
}
</style>
