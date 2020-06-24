<template>
  <listOfProducts :products="gethandbags" />
</template>

<script>
import { mapGetters } from "vuex";
import listOfProducts from "./ListOfProducts";

export default {
  components: {
    listOfProducts
  },

  computed: {
    ...mapGetters(["gethandbags"])
  }
};
</script>

<style>
</style>

