<template>
  <div>
    <listOfProducts :products="getAllProducts" />
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
    ...mapGetters(["getAllProducts"])
  }
};
</script>

<style scoped>
</style>

