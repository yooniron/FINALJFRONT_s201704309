<template>

<v-app>
    <app-bar/>

        <v-content class="white">
            <router-view/>
        </v-content>
</v-app>
</template>

<script>
import AppBar from "./components/AppBar";
import Modal from "./common/Modal.vue"
export default {
  name: 'App',

  components: {
    AppBar,
    Modal
  },

  data: () => ({
    //
  }),
};
</script>
