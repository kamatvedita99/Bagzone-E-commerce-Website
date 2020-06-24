<template>
  <div>
    <listOfProducts :products="getbackpacks" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import listOfProducts from "./ListOfProducts";

export default {
  components: {
    listOfProducts
  },

  computed: {
    ...mapGetters(["getbackpacks"])
  }
};
</script>

<style>
</style>

